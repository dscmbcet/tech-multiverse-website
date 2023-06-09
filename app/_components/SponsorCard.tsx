interface SponsorItem {
    imagePath: string;
    URL: string;
    height: string;
}

import styles from "./SponsorCard.module.css";

function SponsorCard({ imagePath, URL, height }: SponsorItem) {
    return (
        <a href={URL} target="blank" className={styles.sponsorItemLink}>
            <img
                className={styles.sponsorItem}
                src={imagePath}
                alt={imagePath}
            />
        </a>
    );
}

export default SponsorCard;