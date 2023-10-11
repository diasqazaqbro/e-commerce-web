import { Product } from '@/entities/models/Product'
import NavProduct from '@/shared/UI/Breadcrumb'
import { mongooseConnect } from '@/shared/lib/mongoose'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import ProductInner from '@/widgets/Product/InnerProduct'
import { useEffect } from 'react'

export default function Cloths({ products }) {
	const category = '648be630e0a4fc54af37ee7b'
	const nav = 'Одежда'
	useEffect(() => {
		document.title = `Категория - ${nav} | Pegas.kz`
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
