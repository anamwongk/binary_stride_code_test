import React from 'react';
import { Category } from './FAQ';

const Categories = (props: { categories: Category[], onSelectCategory: (categoryId: number) => void, selectedCategory: number }) => {
    const { categories, onSelectCategory, selectedCategory } = props
    return (
        <div className={'faq-categories'}>
            {categories.sort((a, b) => a.priority - b.priority).map((category) => {
                return (
                    <div className={`category ${selectedCategory === category.id ? 'active' : ''}`} key={category.id} onClick={() => onSelectCategory(category.id)}>
                        <span>{category.title}</span>
                    </div>
                )
            }
            )}
        </div>
    );
}

export default Categories;
