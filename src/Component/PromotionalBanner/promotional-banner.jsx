import React from "react";
import styles from "./promotional-banner.module.css";

export default function PromotionalBanner() {
  return (
    <div className={styles.bannerContainer}>
      {/* Sale Badge */}
      <div className={styles.saleBadge}>
        <span className={styles.badgeText}>Sale</span>
      </div>

      {/* Main Content Wrapper */}
      <div className={styles.contentWrapper}>
        {/* Left Section - Product Info & Tagline */}
        <div className={styles.leftSection}>
          <div className={styles.taglineContainer}>
            <p className={styles.tagline}>Fuel your</p>
            <p className={styles.tagline}>fitness</p>
            <div className={styles.accentLine}></div>
          </div>

          <div className={styles.productInfo}>
            <h2 className={styles.productName}>Gau'Swarn</h2>
            <p className={styles.productVariant}>A2 Gir Cow Ghee</p>
            <p className={styles.productSubtext}>Made from Herbal Grass</p>
          </div>
        </div>

        {/* Center Section - Hero Image */}
        <div className={styles.centerSection}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201816.png-ueiIDNoE7PWYXDSRt9uC9zpMIIB8Qo.jpeg"
            alt="Man preparing healthy meal with ghee"
            className={styles.heroImage}
          />
        </div>

        {/* Right Section - Product Jar */}
        <div className={styles.rightSection}>
          <div className={styles.productJarContainer}>
            <div className={styles.jarHighlight}></div>
            <p className={styles.jarLabel}>Premium A2 Ghee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
