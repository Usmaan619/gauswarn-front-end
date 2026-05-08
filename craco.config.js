const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  style: {
    postcss: {
      plugins:
        process.env.NODE_ENV === "production"
          ? [
              purgecss({
                // Scan all source files for used CSS classes
                content: [
                  "./src/**/*.{js,jsx,ts,tsx}",
                  "./public/index.html",
                ],
                // Safelist: classes that are added dynamically (Bootstrap utilities, JS-added classes)
                safelist: {
                  standard: [
                    /^modal/,
                    /^show/,
                    /^fade/,
                    /^collaps/,
                    /^navbar/,
                    /^active/,
                    /^open/,
                    /^disabled/,
                    /^slick/,
                    /^carousel/,
                    /^shimmer/,
                    /^toast/,
                    /^Toastify/,
                  ],
                  deep: [/data-bs-/, /aria-/],
                },
                // Keep @font-face, :root, keyframes even if unused in scan
                keyframes: true,
                fontFace: true,
                variables: true,
              }),
            ]
          : [],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Find the rule that handles images
      const imageRule = webpackConfig.module.rules.find(
        (rule) => rule.oneOf
      ).oneOf.find(
        (rule) =>
          rule.test &&
          rule.test.toString().includes("bmp|gif|jpe?g|png")
      );

      // If found, push image-webpack-loader so it compresses images before file-loader/url-loader processes them
      if (imageRule && process.env.NODE_ENV === "production") {
        if (!Array.isArray(imageRule.use)) {
          imageRule.use = [{ loader: imageRule.loader, options: imageRule.options }];
          delete imageRule.loader;
          delete imageRule.options;
        }
        imageRule.use.push({
          loader: "image-webpack-loader",
          options: {
            mozjpeg: { progressive: true, quality: 65 },
            optipng: { enabled: false },
            pngquant: { quality: [0.65, 0.9], speed: 4 },
            gifsicle: { interlaced: false },
            webp: { quality: 75 },
          },
        });
      }
      return webpackConfig;
    },
    plugins: {
      add: [
        ...(process.env.ANALYZE === "true"
          ? [
              new (require("webpack-bundle-analyzer").BundleAnalyzerPlugin)({
                analyzerMode: "static",
                reportFilename: "report.html",
                openAnalyzer: false,
              }),
            ]
          : []),
      ],
    },
  },
};
