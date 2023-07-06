import Footer from '@/components/Header/Footer'
import Header from '@/components/Header/Header'
import ProductInner from '@/components/Product/InnerProduct'
import NavProduct from '@/components/Product/NavProduct'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import { useEffect } from 'react'
export default function Stroller({ products }) {
	const category = '648be61de0a4fc54af37ee71'
	const nav = 'Коляски'
	useEffect(() => {
		document.title = `Категория - ${nav} | Tatos.kz`
	}, [])
	return (
		<>
			<Header />
			<div className='container my-5 py-5'>
				<NavProduct nav={nav} />
				<ProductInner products={products} category={category} />
			</div>
			<Footer />
		</>
	)
}
export async function getServerSideProps() {
	await mongooseConnect()
	const products = await Product.find()
	return {
		props: {
			products: JSON.parse(JSON.stringify(products)),
		},
	}
}
