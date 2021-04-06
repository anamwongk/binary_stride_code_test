import { Category } from './FAQ';

const Categories = (props: { categories: Category[], onSelectCategory: (categoryId: string) => void, selectedCategory: string }) => {
    const { categories, onSelectCategory, selectedCategory } = props
    return (
        <div className={'faq-categories'}>
            {categories.sort((a, b) => a.priority - b.priority).map((category) => {
                return (
                    <div className={`faq-category${selectedCategory === category._id ? ' active' : ''}`} key={category._id} onClick={() => onSelectCategory(category._id)}>
                        <span className="faq-category-name">{category.name}</span>
                    </div>
                )
            }
            )}
        </div>
    );
}

export default Categories;
