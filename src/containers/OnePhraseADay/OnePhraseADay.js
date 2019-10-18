import React, { Component } from 'react';
import styles from './OnePhraseADay.module.css'
import img6 from '../../assets/img/img6.jpeg'

import phrases from './phrases'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const date = new Date();
const month = monthNames[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();

export class OnePhraseADay extends Component {
    render() {
        let phrase = {phrase: 'Something went wrong', definition: 'Come back later!'}
        for (let i = 1; i < phrases.length; i++){
            if(phrases[i].day == day){
                phrase.phrase = phrases[i].phrase;
                phrase.definition = phrases[i].definition;
            }
        }
            return (
                <div className={styles.OnePhraseADay}>
                    <h3>Phrase of The Day - {month} {day}, {year}</h3>
                    <div
                        className={styles.Phrase}
                        style={{
                            background: `linear-gradient(#f0e6e622, #f0e6e611), url(${img6}) no-repeat center`,
                            backgroundSize: 'cover'

                        }}>
                        <h4>{phrase.phrase}</h4>
                        <h5>{phrase.definition}</h5>
                    </div>
                    <p>Resources are found <a target="_blank" href="https://www.kaplaninternational.com/blog/halloween-idioms">here</a> and <a target="_blank" href="https://blog.esllibrary.com/2015/10/27/10-halloween-idioms-expressions/">here</a>!</p>
                </div>

            );
    }
}

export default OnePhraseADay;
