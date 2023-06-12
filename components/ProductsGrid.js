import ProductBox from '@/components/ProductBox'

export default function ProductsGrid({ products }) {
	return (
		<div className='product__grid'>
			{products?.length > 0 &&
				products.map(product => <ProductBox key={product._id} {...product} />)}
		</div>
	)
}
