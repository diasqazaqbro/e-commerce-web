import Footer from '@/components/Header/Footer'
import Header from '@/components/Header/Header'
import Category from '@/components/Main/Category'
import Comment from '@/components/Main/Comment'
import Quest from '@/components/Main/Quest'
import Welcome from '@/components/Main/Welcome'
import NewProducts from '@/components/Product/NewProducts'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import { Settings } from '@/models/Settings'
import { useEffect } from 'react'

export default function HomePage({ newProducts, settingsSite, product }) {
	useEffect(() => {
		document.title = 'Главная страница | Pegas.kz'
	}, [])
	return (
		<>
			<Header product={product} />
			<Welcome settingsSite={settingsSite} />
			<Category />
			<NewProducts products={newProducts} />
			<Quest settingsSite={settingsSite} />
			<Comment />
			<Footer />
		</>
	)
}

export async function getServerSideProps() {
	await mongooseConnect()
	const newProducts = await Product.find({}, null, {
		sort: { _id: -1 },
		limit: 4,
	})
	const product = await Product.find()
	const settingsSite = await Settings.find()
	return {
		props: {
			newProducts: JSON.parse(JSON.stringify(newProducts)),
			settingsSite: JSON.parse(JSON.stringify(settingsSite)),
			product: JSON.parse(JSON.stringify(product)),
		},
	}
}
