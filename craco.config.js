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
};
