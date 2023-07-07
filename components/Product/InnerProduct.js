import { useState } from 'react'
import FiltrationProduct from './FiltrationProduct'
import ProductBox from './ProductBox'
import SelectFiltration from './SelectFiltration'

export default function ProductInner({ products, category }) {
	const filterProduct = products.filter(f => f.category === category)
	const [currentProperties, setCurrentProperties] = useState(false)
	const [productsArr, setProductsArr] = useState(products)
	const setProperties = value => {
		setCurrentProperties(value)
	}

	const [selectedSort, setSelectedSort] = useState('')
	const sortPosts = sort => {
		setSelectedSort(sort)
		if (sort === 'title') {
			setProductsArr(
				[...productsArr].sort((a, b) => {
					if (a.title < b.title) {
						return -1
					}
					if (a.title > b.title) {
						return 1
					}
					return 0
				})
			)
		} else if (sort === 'priceLow') {
			setProductsArr(
				[...productsArr].sort((a, b) => {
					if (a.price < b.price) {
						return -1
					}
					if (a.price > b.price) {
						return 1
					}
					return 0
				})
			)
		} else if (sort === 'priceHight') {
			setProductsArr(
				[...productsArr]
					.sort((a, b) => {
						if (a.price < b.price) {
							return -1
						}
						if (a.price > b.price) {
							return 1
						}
						return 0
					})
					.reverse()
			)
		} else if (sort === 'createdAt') {
			setProductsArr([...productsArr].reverse())
		}

		console.log(productsArr)
	}
	return (
		<div className='row'>
			<div className='col-md-4 col-sm-12 filtration'>
				<SelectFiltration
					value={selectedSort}
					onChange={sortPosts}
					defaultValue={'Сортировка'}
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'priceLow', name: 'По цене (Сначала дешевые)' },
						{ value: 'priceHight', name: 'По цене (Сначала дорогие)' },
						{ value: 'createdAt', name: 'По дате' },
					]}
				/>
				<FiltrationProduct
					setProperties={setProperties}
					categoryProps={category}
					productsArr={filterProduct}
				/>
			</div>
			<div className='col-md-8 col-12-sm'>
				<div className='row'>
					{productsArr?.length > 0 &&
						productsArr
							.filter(f => f.category === category)
							.filter(f =>
								!currentProperties
									? f
									: f.properties.Производитель == currentProperties
							)
							.map(product => (
								<ProductBox col={'6'} key={product._id} {...product} />
							))}
				</div>
			</div>
		</div>
	)
}
