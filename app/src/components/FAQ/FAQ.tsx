import React, { useState, useEffect } from 'react';
import Categories from './Categories'
import Questions from './Questions'
import './FAQ.css';

export interface Category {
    id: number,
    title: string,
    priority: number
}

export interface Question {
    id: number,
    question: string,
    answer: string,
    categoryId: number,
    priority: number
}

const FAQ = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [questions, setQuestions] = useState<Question[]>([])
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [selectedQuestion, setSelectedQuestion] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://localhost:3001/categories').then(result => result.json()).then(result => setCategories(result))
            await fetch('http://localhost:3001/questions').then(result => result.json()).then(result => setQuestions(result))
        }
        fetchData()
    }, [])

    return (
        <div className="faq">
            <div className="faq-header"><p>FAQ</p></div>
            <Categories categories={categories} onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            <Questions questions={questions} onSelectQuestion={setSelectedQuestion} selectedQuestion={selectedQuestion} selectedCategory={selectedCategory} />
        </div>
    );
}

export default FAQ;
