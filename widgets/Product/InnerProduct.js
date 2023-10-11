import { useState } from 'react'
import SelectFiltration from '../../features/SelectFiltration/SelectFiltration'
import ProductBox from './ProductBox'

export default function ProductInner({ products, category }) {
	const [productsArr, setProductsArr] = useState(products)

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
			</div>
			<div className='col-md-8 col-12-sm'>
				<div className='row'>
					{productsArr?.length > 0 &&
						productsArr
							.filter(f => f.category === category)
							.map(product => (
								<ProductBox col={'6'} key={product._id} {...product} />
							))}
				</div>
			</div>
		</div>
	)
}
