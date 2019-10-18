import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.Navigation}>
            <NavLink className={styles.Link} to="/">Home</NavLink>
            <NavLink className={styles.Link} to="/one-phrase-a-day">One Phrase A Day</NavLink>
            <NavLink className={styles.Link} to="/vocab-quiz">Vocab Quiz</NavLink>
            <NavLink className={styles.Link} to="/contact">Contact</NavLink>
        </div>
    );
}

export default Navigation;
