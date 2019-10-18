import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Contact.module.css'
import linkStyles from '../../components/Header/Navigation/Navigation.module.css'

import img4 from '../../assets/img/img4.jpeg'
import Aux from '../../hoc/Aux'
import Button from '../../components/UI/Button/Button'

import axios from 'axios'

export class Contact extends Component {
    state = {
        emailForm: {
            name: {
                value: '',
                type: 'text',
                name: 'name',
                placeholder: 'Your name'
            },
            emailAddress: {
                value: '',
                type: 'email',
                name: 'email',
                placeholder: 'Your email'
            },
            subject: {
                value: '',
                type: 'text',
                name: 'subject',
                placeholder: 'Subject'
            },
            content: {
                value: '',
                type: 'text',
                name: 'content',
                placeholder: 'Your message'
            }
        },
        emailIsSent: false
    }
    sendHandler = (e) => {
        e.preventDefault();
        let newemail = {
            name: this.state.emailForm.name.value,
            email: this.state.emailForm.emailAddress.value,
            subject: this.state.emailForm.subject.value,
            content: this.state.emailForm.content.value
        }
        axios.post('https://vocabuilder-f7396.firebaseio.com/useremail.json', newemail)
             .then(this.setState({emailIsSent: true}))
    }
    updateFormHandler = (e, key) => {
        const formToBeUpdated = {
            ...this.state.emailForm
        }
        const fieldToBeUpdated = {
            ...formToBeUpdated[key]
        }
        fieldToBeUpdated.value = e.target.value;
        formToBeUpdated[key] = fieldToBeUpdated;
        this.setState({emailForm: formToBeUpdated})
    }
    render() {
        const formElementsArray = [];
        for(let key in this.state.emailForm){
            formElementsArray.push({
                key: key,
                config: this.state.emailForm[key]
            })
        }
        let form = (
            <form className={styles.Contact} onSubmit={this.sendHandler}>
                {formElementsArray.map(formElement => (
                    <input
                        key={formElement.key}
                        className={styles.Input} 
                        type={formElement.config.type} 
                        name={formElement.config.name}
                        placeholder={formElement.config.placeholder}
                        onChange={(e) => this.updateFormHandler(e, formElement.key)}
                    ></input>
                ))}
                <Button>Send</Button>
            </form>
        )
        let thankyou = (
            <div className = {styles.Thankyou}>
                <p>I have received your message! Keep in touch :)</p>
                <Link
                    className={linkStyles.Link}
                    to='/vocabuilder'
                >
                    Go back
                </Link>
            </div>
        )
        return (
            <Aux>
                <div
                    className={styles.ContactTitle}
                    style={{
                        background: `linear-gradient(#1f1bf122, #d6818133), url(${img4}) no-repeat center`,
                        backgroundSize: 'cover'
                    }}>
                    <h4>Contact the creator</h4>
                </div>
                <div>
                    {this.state.emailIsSent ? thankyou : form}
                </div>
            </Aux>

        );
    }
}

export default Contact;
