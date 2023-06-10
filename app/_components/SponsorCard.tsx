interface SponsorItem {
    imagePath: string;
    URL: string;
    alt: string;
}

import styles from "./SponsorCard.module.css";

function SponsorCard({ imagePath, URL, alt }: SponsorItem) {
    return (
        <a href={URL} target="blank" className={styles.sponsorItemLink}>
            <img
                className={styles.sponsorItem}
                src={imagePath}
                alt={alt}
            />
        </a>
    );
}

export default SponsorCard;