import ProductBox from './ProductBox'

export default function NewProducts({ products }) {
	return (
		<div className='container'>
			<h2 className='title'>Новые товары</h2>
			<div className='row'>
				{products?.length > 0 &&
					products.map(product => (
						<ProductBox col={'4'} key={product._id} {...product} />
					))}
			</div>
		</div>
	)
}
