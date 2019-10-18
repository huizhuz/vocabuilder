import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.Navigation}>
            <NavLink 
                className={styles.Link} 
                to="/vocabuilder" exact
                activeStyle={{
                    fontWeight: "bold",
                    color: "#C6574F"
                  }}>Home</NavLink>
            <NavLink 
                className={styles.Link} 
                to="/vocabuilder/one-phrase-a-day"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#C6574F"
                  }}>One Phrase A Day</NavLink>
            <NavLink 
                className={styles.Link} 
                to="/vocabuilder/vocab-quiz"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#C6574F"
                  }}>Vocab Quiz</NavLink>
            <NavLink 
                className={styles.Link} 
                to="/vocabuilder/contact"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#C6574F"
                  }}>Contact</NavLink>
        </div>
    );
}

export default Navigation;
