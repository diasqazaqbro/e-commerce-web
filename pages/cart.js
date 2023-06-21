import { CartContext } from '@/components/CartContext'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import axios from 'axios'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

const ColumnsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1.2fr 0.8fr;
	}
	gap: 40px;
	margin-top: 40px;
`

const Box = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 30px;
`

export default function CartPage() {
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
					<ColumnsWrapper>
						<Box>
							<h1>Спасибо за покупку</h1>
							<p>Мы отправили вам на почту информацию.</p>
						</Box>
					</ColumnsWrapper>
				</Center>
			</>
		)
	}
	return (
		<>
			<Header />
			<div className='container'>
				<nav
					style={{ '--bs-breadcrumb-divider': "'>';" }}
					aria-label='breadcrumb'
					className='my-4'
				>
					<ol className='breadcrumb'>
						<li className='breadcrumb-item'>
							<a href='/'>Главная страница</a>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							Корзина
						</li>
					</ol>
				</nav>
				<h1 className='title'>Корзина товаров</h1>

				{!cartProducts?.length && <div>Корзина пуста</div>}
				{products?.length > 0 && (
					<table class='cart table'>
						<thead>
							<tr>
								<th scope='col'>Фото</th>
								<th scope='col'>Товар</th>
								<th scope='col'>Цена</th>
								<th scope='col'>Количество</th>
								<th scope='col'>Итог</th>
							</tr>
						</thead>
						<tbody>
							{products.map(product => (
								<tr key={product._id}>
									<td scope='row'>
										<Link href={'/product/' + product._id}>
											<img
												className='cart-img'
												src={product.images[0]}
												alt=''
											/>
										</Link>
									</td>

									<td className='name'>
										<Link href={'/product/' + product._id}>
											{product.title}
										</Link>
									</td>

									<td>{product.price} Тг</td>

									<td>
										<td>
											<button
												className='button'
												onClick={() => lessOfThisProduct(product._id)}
											>
												-
											</button>
											{cartProducts.filter(id => id === product._id).length}
											<button
												className='button'
												onClick={() => moreOfThisProduct(product._id)}
											>
												+
											</button>
										</td>
									</td>

									<td>
										{cartProducts.filter(id => id === product._id).length *
											product.price}
										Тг
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}

				{!!cartProducts?.length && (
					<>
						<h1 className='title mt-5'>Информация о покупке</h1>
						<div class='input-group mb-3'>
							<span class='input-group-text' id='basic-addon1'>
								Владимир Путин
							</span>
							<input
								type='text'
								class='form-control'
								placeholder='ФИО'
								value={name}
								name='name'
								onChange={ev => setName(ev.target.value)}
							/>
						</div>

						<div class='input-group mb-3'>
							<input
								type='text'
								class='form-control'
								placeholder='Почта'
								value={email}
								name='email'
								onChange={ev => setEmail(ev.target.value)}
							/>
							<span class='input-group-text' id='basic-addon2'>
								@example.com
							</span>
						</div>

						<div class='input-group mb-3'>
							<input
								type='text'
								class='form-control'
								placeholder='Город'
								value={city}
								name='city'
								onChange={ev => setCity(ev.target.value)}
							/>
							<span class='input-group-text'>|</span>
							<input
								type='text'
								class='form-control'
								placeholder='Почтовый Индекс'
								value={postalCode}
								name='postalCode'
								onChange={ev => setPostalCode(ev.target.value)}
							/>
						</div>
						<div class='input-group mb-3'>
							<input
								type='text'
								class='form-control'
								placeholder='Адрес'
								value={streetAddress}
								name='streetAddress'
								onChange={ev => setStreetAddress(ev.target.value)}
							/>
							<span class='input-group-text'>|</span>
							<input
								type='text'
								class='form-control'
								placeholder='Страна'
								value={country}
								name='country'
								onChange={ev => setCountry(ev.target.value)}
							/>
						</div>
						<div class='d-grid gap-2 col-6 mx-auto'>
							<button className='btn btn-outline-success' onClick={goToPayment}>
								Продолжить оплату
							</button>
						</div>
					</>
				)}
			</div>
			<Footer />
		</>
	)
}
