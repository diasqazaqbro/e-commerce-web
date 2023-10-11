import { Product } from '@/entities/models/Product'
import { Settings } from '@/entities/models/Settings'
import Category from '@/shared/UI/Category'
import Comment from '@/shared/UI/Comment'
import Quest from '@/shared/UI/Quest'
import Welcome from '@/shared/UI/Welcome'
import { mongooseConnect } from '@/shared/lib/mongoose'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import NewProducts from '@/widgets/Product/NewProducts'
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
