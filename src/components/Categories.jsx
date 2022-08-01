import { useState } from 'react'

const Categories = () => {
	const [categoryName, setCategoryName] = useState([
		'All',
		"Men's",
		'Female',
		'Childish',
		'Box',
		'Accessories',
	])
	const [activeCategory, setActiveCategory] = useState('All')

	const changeActiveCategory = category => {
		setActiveCategory(category)
	}
	return (
		<div className='categories'>
			<ul>
				{categoryName.map(c => (
					<li
						key={c}
						onClick={() => changeActiveCategory(c)}
						className={activeCategory === c ? 'active' : ''}
					>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Categories
