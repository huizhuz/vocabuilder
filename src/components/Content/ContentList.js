import React from 'react';
import ContentCard from './ContentCard/ContentCard';
import styles from './ContentList.module.css';

const ContentList = () => {
    const titles = [
        'One Phrase A Day',
        'Test Your Vocab Knowledge!',
        'Contact The Creator'
    ];
    return (
        <div className={styles.ContentList}>
            <p>Choose from below</p>
            {
                titles.map(title => {
                    return <ContentCard title={title} key={title}></ContentCard>
                })
            }
        </div>
    );
}

export default ContentList;
