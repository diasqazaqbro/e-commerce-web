import ProductsGrid from '@/components/ProductsGrid'

export default function NewProducts({ products }) {
	return (
		<div className='container'>
			<h2 className='title'>Новые товары</h2>
			<ProductsGrid products={products} />
		</div>
	)
}
