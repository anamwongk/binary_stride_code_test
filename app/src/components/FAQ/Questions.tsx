import React from 'react';
import { Question } from './FAQ';

const Questions = (props: { questions: Question[], onSelectQuestion: (questionId: string) => void, selectedQuestion: string }) => {
    const { questions, onSelectQuestion, selectedQuestion } = props
    const filtered = questions.sort((a, b) => a.priority - b.priority)
    return (
        <div className={'faq-questions'}>
            {filtered.map((question) => {
                return (
                    <div className={`faq-question${selectedQuestion === question._id ? '-active' : ''}`} onClick={() => onSelectQuestion(question._id)} key={question._id}>
                        <div className={'faq-question-title'}>{question.question} <i className={`arrow ${selectedQuestion === question._id ? 'up' : 'down'}`}></i></div>
                        <div className={`faq-answer ${selectedQuestion === question._id ? 'show' : 'hide'}`}>
                            <p className={`faq-answer-text`}>{question.answer}</p>
                            <div className={`faq-useful`}><a>useful</a><a>not useful</a></div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Questions;
