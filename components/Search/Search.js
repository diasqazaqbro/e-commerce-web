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
						<svg
							onClick={activeSearch}
							xmlns='http://www.w3.org/2000/svg'
							width='35'
							height='35'
							fill='currentColor'
							className='p-right'
							viewBox='0 0 16 16'
						>
							<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
						</svg>
						<ListSearch productList={productList} />
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}
