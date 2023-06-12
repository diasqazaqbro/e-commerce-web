import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NewProducts from '@/components/NewProducts'
import Welcome from '@/components/Welcome'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'

export default function HomePage({ featuredProduct, newProducts }) {
	return (
		<div>
			<Header />
			<Welcome product={featuredProduct} />
			<NewProducts products={newProducts} />
			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	await mongooseConnect()
	const newProducts = await Product.find({}, null, {
		sort: { _id: -1 },
		limit: 10,
	})
	return {
		props: {
			newProducts: JSON.parse(JSON.stringify(newProducts)),
		},
	}
}
