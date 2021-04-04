import React from 'react';
import { Question } from './FAQ';

const Questions = (props: { questions: Question[], onSelectQuestion: (faqId: number) => void, selectedQuestion: number, selectedCategory: number }) => {
    const { questions, onSelectQuestion, selectedQuestion, selectedCategory } = props
    const filtered = questions.sort((a, b) => a.priority - b.priority).filter(question => question.categoryId === selectedCategory)
    return (
        <div className={'faq-questions'}>
            {filtered.map((question) => {
                return (
                    <div className={`question ${selectedQuestion === question.id ? 'active' : ''}`} onClick={() => onSelectQuestion(question.id)} key={question.id}>
                        <div className={'title'}>{question.question} <i className={`arrow ${selectedQuestion === question.id ? 'up' : 'down'}`}></i></div>
                        <div className={`anwser ${selectedQuestion === question.id ? 'show' : 'hide'}`}>
                            <p>{question.answer}</p>
                            <div className={`useful`}><a>useful</a><a>not useful</a></div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Questions;
