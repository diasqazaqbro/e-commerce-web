import { CartContext } from '@/components/CartContext'
import Header from '@/components/Header'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 30px;
`

const ProductInfoCell = styled.td`
	padding: 10px 0;
`

const ProductImageBox = styled.div`
	width: 70px;
	height: 100px;
	padding: 2px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	img {
		max-width: 60px;
		max-height: 60px;
	}
	@media screen and (min-width: 768px) {
		padding: 10px;
		width: 100px;
		height: 100px;
		img {
			max-width: 80px;
			max-height: 80px;
		}
	}
`

const QuantityLabel = styled.span`
	padding: 0 15px;
	display: block;
	@media screen and (min-width: 768px) {
		display: inline-block;
		padding: 0 10px;
	}
`

const CityHolder = styled.div`
	display: flex;
	gap: 5px;
`

export default function CartModal() {
	const { cartProducts, addProduct, removeProduct, clearCart } =
		useContext(CartContext)
	const [products, setProducts] = useState([])
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [city, setCity] = useState('')
	const [postalCode, setPostalCode] = useState('')
	const [streetAddress, setStreetAddress] = useState('')
	const [country, setCountry] = useState('')
	const [isSuccess, setIsSuccess] = useState(false)
	useEffect(() => {
		if (cartProducts.length > 0) {
			axios.post('/api/cart', { ids: cartProducts }).then(response => {
				setProducts(response.data)
			})
		} else {
			setProducts([])
		}
	}, [cartProducts])
	useEffect(() => {
		if (typeof window === 'undefined') {
			return
		}
		if (window?.location.href.includes('success')) {
			setIsSuccess(true)
			clearCart()
		}
	}, [])
	function moreOfThisProduct(id) {
		addProduct(id)
	}
	function lessOfThisProduct(id) {
		removeProduct(id)
	}
	async function goToPayment() {
		const response = await axios.post('/api/checkout', {
			name,
			email,
			city,
			postalCode,
			streetAddress,
			country,
			cartProducts,
		})
		if (response.data.url) {
			window.location = response.data.url
		}
	}
	let total = 0
	for (const productId of cartProducts) {
		const price = products.find(p => p._id === productId)?.price || 0
		total += price
	}

	if (isSuccess) {
		return (
			<>
				<Header />
				<Center>
					<Box>
						<h1>Спасибо за покупку</h1>
						<p>Мы отправили вам на почту информацию.</p>
					</Box>
				</Center>
			</>
		)
	}
	return (
		<>
			<div
				className='modal fade'
				id='exampleModal'
				tabindex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title'>Modal title</h5>
							<button
								type='button'
								class='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div class='modal-body'>
							<Box>
								<h2>Cart</h2>
								{!cartProducts?.length && <div>Корзина пуста</div>}
								{products?.length > 0 && (
									<div>
										<thead>
											<tr>
												<th>Продукт</th>
												<th>Количество</th>
												<th>Цена</th>
											</tr>
										</thead>
										<tbody>
											{products.map(product => (
												<tr key={product._id}>
													<ProductInfoCell>
														<ProductImageBox>
															<img src={product.images[0]} alt='' />
														</ProductImageBox>
														{product.title}
													</ProductInfoCell>
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
												<td>{total} Тг</td>
											</tr>
										</tbody>
									</div>
								)}
							</Box>
							{!!cartProducts?.length && (
								<Box>
									<h2>Информация о покупке</h2>
									<input
										className='input'
										type='text'
										placeholder='Name'
										value={name}
										name='name'
										onChange={ev => setName(ev.target.value)}
									/>
									<input
										className='input'
										type='text'
										placeholder='Email'
										value={email}
										name='email'
										onChange={ev => setEmail(ev.target.value)}
									/>
									<CityHolder>
										<input
											className='input'
											type='text'
											placeholder='City'
											value={city}
											name='city'
											onChange={ev => setCity(ev.target.value)}
										/>
										<input
											className='input'
											type='text'
											placeholder='Postal Code'
											value={postalCode}
											name='postalCode'
											onChange={ev => setPostalCode(ev.target.value)}
										/>
									</CityHolder>
									<input
										className='input'
										type='text'
										placeholder='Street Address'
										value={streetAddress}
										name='streetAddress'
										onChange={ev => setStreetAddress(ev.target.value)}
									/>
									<input
										className='input'
										type='text'
										placeholder='Country'
										value={country}
										name='country'
										onChange={ev => setCountry(ev.target.value)}
									/>
								</Box>
							)}
						</div>
						<div class='modal-footer'>
							<button
								type='button'
								class='btn btn-secondary'
								data-bs-dismiss='modal'
							>
								Закрыть
							</button>
							<button
								type='button'
								onClick={goToPayment}
								class='btn btn-primary'
							>
								Купить
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
