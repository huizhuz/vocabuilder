import React from 'react'
import ContentCard from './ContentCard/ContentCard'
import styles from './ContentList.module.css'
import img1 from '../../assets/img/img1.jpeg'
import img2 from '../../assets/img/img2.jpeg'
import img3 from '../../assets/img/img3.jpeg'

const ContentList = () => {
    const titles = [
        {id: 0, title: 'One Phrase A Day', route: '/one-phrase-a-day', img: img1},
        {id: 1, title: 'Test Your Vocabulary!', route: 'vocab-quiz', img: img2},
        {id: 2, title: 'Contact The Creator', route: 'contact', img: img3}
    ];
    return (
        <div className={styles.ContentList}>
            {
                titles.map(eachTitle => {
                    return <ContentCard title={eachTitle.title} route={eachTitle.route} img={eachTitle.img} key={eachTitle.id}></ContentCard>
                })
            }
        </div>
    );
}

export default ContentList;

