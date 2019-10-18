import React from 'react';
import styles from './AnswerBox.module.css'

// Need props.pos to determine background color
// Props.choice to display

const AnswerBox = (props) => {
    let bgColor = 'white';
    switch (props.pos) {
        case 0:
            bgColor = '#6fa16a';
            break;
        case 1:
            bgColor = '#e68a7a';
            break;
        case 2:
            bgColor = '#e6c97a';
            break;
        case 3:
            bgColor = '#8fa3da';
            break;
        default:
            bgColor = 'white'
    }
    return (
        <div 
            className={styles.AnswerBox}
            style={{backgroundColor:bgColor}}
            onClick={props.clicked}>
                <p>{props.choice}</p>
        </div>
    );
}

export default AnswerBox;
