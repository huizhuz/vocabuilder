import React from 'react';
import Navigation from './Navigation/Navigation'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.TitleWrapper}>
                <h1>Vocabuilder</h1>
            </div>
            <Navigation></Navigation>
        </div>
    );
}

export default Header;
