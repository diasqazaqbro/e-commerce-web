import ProductBox from './ProductBox'

export default function NewProducts({ products }) {
	return (
		<div className='container'>
			<h2 className='title'>Специально для вас!</h2>
			<div className='row g-4'>
				{products?.length > 0 &&
					products.map(product => (
						<ProductBox col={'3'} key={product._id} {...product} />
					))}
			</div>
		</div>
	)
}
