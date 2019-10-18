import React, { Component } from 'react';
import styles from './VocabQuiz.module.css'
import AnswerBox from './AnswerBox/AnswerBox'

import quizItems from './quizItems'
import img5 from '../../assets/img/img5.jpeg'

export class VocabQuiz extends Component {
    state = {
        isFinished: false,
        quizData: [...quizItems],
        pageTitle: 'Let\'s do this halloween themed vocab quiz!'
    }
    clickHandler = (e, isRight, index) => {
        if (isRight === true) {
            var updatedQuizData = [...this.state.quizData];
            updatedQuizData.splice(index, 1);
            this.setState({ quizData: updatedQuizData })
            if(updatedQuizData.length === 0){
                this.setState({pageTitle: 'You have finished this spooky vocab quiz! Congrats!'})
            }
        } else {
            alert('try again!')
        }
    }
    render() {
        let quiz = null;
        if (this.state.quizData.length === 0) {
            quiz = null;
        } else {
            let index = Math.floor(Math.random() * this.state.quizData.length);
            let choices = this.state.quizData[index].wrongAnswers.map((eachWrong) => {
                return {
                    isRight: false,
                    choice: eachWrong
                }
            })
            choices.push({ isRight: true, choice: this.state.quizData[index].word })
            //Now what we have is an array with four choices for the current quizData[index]
            quiz = (
                <div className={styles.VocabQuiz}>
                    <p>{this.state.quizData[index].definition}</p>
                    <div className={styles.AnswerBoxes}>
                        {choices.map((choice, key) => (
                            <AnswerBox
                                key={key}
                                pos={key}
                                isRight={choice.isRight}
                                choice={choice.choice}
                                clicked={(e) => this.clickHandler(e, choice.isRight, index)} />
                        ))}
                    </div>
                </div>
            )
        }

        return (
            <div className={styles.VocabQuiz}>
                <div 
                    className={styles.Title}
                    style={{background: `linear-gradient(#1f1bf122, #d6818133), url(${img5}) no-repeat center`}}>
                        <h4>{this.state.pageTitle}</h4>
                    </div>
                {quiz}
            </div>
        );
    }
}

export default VocabQuiz;
