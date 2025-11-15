"use client";

import styles from "./promotional-cards.module.css";

const PromoCard = ({ badge, badgePosition, imageUrl, alt, tagline }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.badge} ${styles[`badge-${badgePosition}`]}`}>
        <span className={styles.badgeText}>{badge}</span>
      </div>

      {/* Card image */}
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={alt}
        className={styles.cardImage}
      />

      {tagline && (
        <div className={styles.taglineContainer}>
          <p className={styles.tagline}>{tagline}</p>
        </div>
      )}
    </div>
  );
};

export default function PromotionalCards() {
  const cards = [
    {
      badge: "Sale",
      badgePosition: "left",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201816.png-ueiIDNoE7PWYXDSRt9uC9zpMIIB8Qo.jpeg",
      alt: "Gau Swarn Cow Ghee Sale - Man preparing healthy food",
      tagline: "Fuel your fitness",
    },
    {
      badge: "Pack of 3",
      badgePosition: "right",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2036003%281%29.png-CPHfJAEIrzKpsrwtfFdjvh24iLY1MG.jpeg",
      alt: "Gau Swarn Cow Ghee Pack of 3 - Three jar sizes",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <PromoCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
