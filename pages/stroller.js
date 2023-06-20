import CartModal from '@/components/CartModal'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import ProductBox from '@/components/ProductBox'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'

export default function Stroller({ products }) {
	console.log(products)
	const category = '648be61de0a4fc54af37ee71'
	return (
		<div>
			<Header />
			<CartModal />
			<div className='container my-5 py-5'>
				<nav
					style={{ '--bs-breadcrumb-divider': "'>';" }}
					aria-label='breadcrumb'
				>
					<ol className='breadcrumb'>
						<li className='breadcrumb-item'>
							<a href='/'>Главная страница</a>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							Прогулка и улица
						</li>
					</ol>
				</nav>
				<div className='row'>
					<div className='col-4'></div>
					<div className='col-8'>
						<div className='row g-5'>
							{products?.length > 0 &&
								products
									.filter(f => f.category === category)
									.map(product => (
										<ProductBox col={'4'} key={product._id} {...product} />
									))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	await mongooseConnect()
	const products = await Product.find({}, null, {
		sort: { _id: -1 },
		limit: 10,
	})
	return {
		props: {
			products: JSON.parse(JSON.stringify(products)),
		},
	}
}
