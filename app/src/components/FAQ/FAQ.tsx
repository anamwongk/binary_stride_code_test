import React, { useState, useEffect } from 'react';
import Categories from './Categories'
import Questions from './Questions'
import './FAQ.css';

export interface Category {
    _id: string,
    name: string,
    priority: number
}

export interface Question {
    _id: string,
    question: string,
    answer: string,
    category: string,
    priority: number
}

const FAQ = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [questions, setQuestions] = useState<Question[]>([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedQuestion, setSelectedQuestion] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://localhost:3001/faq/categories').then(result => result.json()).then(result => setCategories(result))
        }
        fetchData()
    }, [])

    const onSelectCategory = async (categoryId: string) => {
        setSelectedCategory(categoryId)
        await fetch(`http://localhost:3001/faq/questions/${categoryId}`).then(result => result.json()).then(result => {
            console.log("🚀 ~ result", result)
            
        setQuestions(result)})
    }

    return (
        <div className="faq">
            <div className="faq-header"><p>FAQ</p></div>
            <Categories categories={categories} onSelectCategory={onSelectCategory} selectedCategory={selectedCategory} />
            <Questions questions={questions} onSelectQuestion={setSelectedQuestion} selectedQuestion={selectedQuestion} />
        </div>
    );
}

export default FAQ;
