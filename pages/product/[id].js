import { CartContext } from '@/components/CartContext'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import CartIcon from '@/components/icons/CartIcon'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

export default function ProductPage({ product }) {
	const QuantityLabel = styled.span`
		padding: 0 15px;
		display: block;
		@media screen and (min-width: 768px) {
			display: inline-block;
			padding: 0 10px;
		}
	`
	const { cartProducts, addProduct, removeProduct, clearCart } =
		useContext(CartContext)
	const [products, setProducts] = useState([])

	useEffect(() => {
		if (cartProducts.length > 0) {
			axios.post('/api/cart', { ids: cartProducts }).then(response => {
				setProducts(response.data)
			})
		} else {
			setProducts([])
		}
	}, [cartProducts])
	function moreOfThisProduct(id) {
		addProduct(id)
	}
	function lessOfThisProduct(id) {
		removeProduct(id)
	}
	return (
		<>
			<Header />
			<div className='product__item'>
				<div className='container'>
					<div className='row'>
						<div className='col-4'>
							<img src={product.images} />
						</div>
						<div className='col-8'>
							<div className='row'>
								<div className='col-6'>
									<h2 className='title'>{product.title}</h2>
									<p>{product.description}</p>
									<div>
										<div>
											<div>{product.price} Тг</div>
										</div>
									</div>
								</div>
								<div className='col-6'>
									<div className='s'>
										{products
											.filter(f => f._id === product._id)
											.map(product => (
												<tr key={product._id}>
													<td>
														<button
															className='button'
															onClick={() => lessOfThisProduct(product._id)}
														>
															-
														</button>
														<QuantityLabel>
															{
																cartProducts.filter(id => id === product._id)
																	.length
															}
														</QuantityLabel>
														<button
															className='button'
															onClick={() => moreOfThisProduct(product._id)}
														>
															+
														</button>
													</td>
													<td>
														{cartProducts.filter(id => id === product._id)
															.length * product.price}{' '}
														Тг
													</td>
												</tr>
											))}
										<tr>
											<td></td>
											<td></td>
										</tr>
									</div>
									<button
										className='button'
										primary
										onClick={() => addProduct(product._id)}
									>
										<CartIcon />
										Add to cart
									</button>
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
