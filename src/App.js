import Categories from './components/Categories'
import Header from './components/Header'
import Sort from './components/Sort'
import TshirtBlock from './components/TshirtBlock'
import products from './assets/shirt.json'

import './scss/app.scss'

const App = () => {
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
							<TshirtBlock {...product} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
