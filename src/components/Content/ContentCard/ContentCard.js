import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from './ContentCard.module.css'
import linkStyles from '../../Header/Navigation/Navigation.module.css'

class ContentCard extends Component {
    render() {
        return (
            <div 
                className={styles.ContentCard} 
                onClick={() => this.props.history.push(this.props.route)}
                style={{  
                    background: `linear-gradient(#f3df9c85, #d6818185), url(${this.props.img}) no-repeat center`,
                    backgroundSize: 'cover'
                  }}>
                <div className={linkStyles.Link}>{this.props.title}</div>
            </div>
        );
    }
}

export default withRouter(ContentCard);
