import { useEffect, useState } from 'react'
import Categories from './components/Categories'
import Header from './components/Header'
import TshirtBlock from './components/TshirtBlock'
import Sort from './components/Sort'

import './scss/app.scss'

const App = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://62e92915249bb1284ebbb897.mockapi.io/shirts')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Сhoose</h2>
					<div className='content__items'>
						{products.map(product => (
							<TshirtBlock key={product.id} {...product} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
