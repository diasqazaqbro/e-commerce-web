import SearchIcon from '@/shared/UI/Icon/SearchIcon'
import { useEffect, useState } from 'react'
import ListSearch from './ListSearch'

export default function Search({ product }) {
	const filterProduct = (searchText, listOfProduct) => {
		if (!searchText) {
			return listOfProduct
		}
		return listOfProduct.filter(({ title }) =>
			title.toLowerCase().includes(searchText.toLowerCase())
		)
	}
	const data = product
	const [searchTerm, setSearchTerm] = useState('')
	const [productList, setProductList] = useState(data)
	const [active, setActive] = useState(false)
	const activeSearch = () => {
		setActive(!active)
	}
	useEffect(() => {
		const Debounce = setTimeout(() => {
			const filteredProduct = filterProduct(searchTerm, data)
			setProductList(filteredProduct)
		}, 300)

		return () => clearTimeout(Debounce)
	}, [searchTerm])
	return (
		<div className='container mx-auto font-mono'>
			<div className='flex justify-center flex-col align-middle'>
				<input
					type='text'
					autoComplete='off'
					placeholder='Поиск'
					on
					onFocus={activeSearch}
					onChange={e => setSearchTerm(e.target.value)}
					className='form-control me-2'
				/>
				{active ? (
					<div className='list-search'>
						<SearchIcon />
						<ListSearch productList={productList} />
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}
