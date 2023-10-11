import { CartContext } from '@/entities/CartContext'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'

import { Product } from '@/entities/models/Product'
import Breadcrumb from '@/shared/UI/Breadcrumb'
import DetailProduct from '@/shared/UI/DetailProduct'
import { mongooseConnect } from '@/shared/lib/mongoose'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'

export default function ProductPage({ product }) {
	const { cartProducts, addProduct, removeProduct, clearCart } =
		useContext(CartContext)
	const [products, setProducts] = useState([])
	useEffect(() => {
		document.title = `${product.title} | Tatos.kz`
	}, [])
	useEffect(() => {
		if (cartProducts.length > 0) {
			axios.post('/api/cart', { ids: cartProducts }).then(response => {
				setProducts(response.data)
			})
		} else {
			setProducts([])
		}
	}, [cartProducts])
	return (
		<>
			<Header />
			<div className='product__item'>
				<div className='container'>
					<Breadcrumb nav={product.title} />
					<div className='row'>
						<div className='border col-md-5 col-sm-12 my-4'>
							<img className='img-fluid' src={product.images} alt='' />
						</div>
						<div className='col-md-7'>
							<div className='row'>
								<div className='col-12 mx-3'>
									<h2 className='titles'>{product.title}</h2>
									<div className='price'>{product.price} Тг</div>
									<button
										onClick={() => addProduct(product._id)}
										className='btn my-2 btn-lg btn-outline-success'
									>
										Добавить в корзину
									</button>

									<DetailProduct description={product.description} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export async function getServerSideProps(context) {
	await mongooseConnect()
	const { id } = context.query
	const product = await Product.findById(id)
	return {
		props: {
			product: JSON.parse(JSON.stringify(product)),
		},
	}
}
