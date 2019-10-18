import React from 'react';
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const github = <FontAwesomeIcon icon={faCodeBranch} />

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div>
                <p>Created with ReactJS</p>
                <a target="_blank" href="https://github.com/huizhuz/vocabuilder/tree/master"><p>See the code on my  {github}  page</p></a>
                <p>&copy; Huizhu Zhang - October 2019</p>
            </div>

        </div>
    );
}

export default Footer;
