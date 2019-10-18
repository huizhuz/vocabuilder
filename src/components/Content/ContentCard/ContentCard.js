import React from 'react';
import styles from './ContentCard.module.css'

const ContentCard = (props) => {
    return (
        <div className={styles.ContentCard}>
            <p>{props.title}</p>
        </div>
    );
}

export default ContentCard;
