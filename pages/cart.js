import { CartContext } from '@/components/CartContext'
import Footer from '@/components/Header/Footer'
import Header from '@/components/Header/Header'
import axios from 'axios'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

export default function CartPage() {
	const { cartProducts, addProduct, removeProduct, clearCart } =
		useContext(CartContext)
	const [products, setProducts] = useState([])
	const [name, setName] = useState('')
	const [number, setNumber] = useState('')
	const [option, setOption] = useState('')
	const [commentary, setCommentary] = useState('')

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
		document.title = 'Корзина товаров | Tatos.kz'
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
			number,
			option,
			commentary,
			cartProducts,
		})
		setIsSuccess(true)
		clearCart()
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
				<div className='text-center my-5 py-5'>
					<h1>Спасибо за покупку</h1>
					<p>Мы отправим вам на {option} информацию.</p>
				</div>
				<Footer />
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
							<Link href='/'>Главная страница</Link>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							Корзина
						</li>
					</ol>
				</nav>
				<h1 className='title'>Корзина товаров</h1>

				{!cartProducts?.length && (
					<h5 className='text-center'>
						Корзина пуста. <Link href={'/'}>Подберите товар для себя</Link>
					</h5>
				)}
				{products?.length > 0 && (
					<table className='cart table'>
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
						<div className='input-group mb-3'>
							<span className='input-group-text' id='basic-addon1'>
								Владимир Путин
							</span>
							<input
								type='text'
								className='form-control'
								placeholder='ФИО'
								value={name}
								name='name'
								onChange={ev => setName(ev.target.value)}
							/>
						</div>

						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='Номер'
								value={number}
								name='number'
								onChange={ev => setNumber(ev.target.value)}
							/>
							<span className='input-group-text' id='basic-addon2'>
								+77027777777
							</span>
						</div>

						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='Удобный способ связаться (WhatsApp, Telegram, По звонку)'
								value={option}
								name='option'
								onChange={ev => setOption(ev.target.value)}
							/>
							<span className='input-group-text'>|</span>
							<input
								type='text'
								className='form-control'
								placeholder='Комментарий'
								value={commentary}
								name='commentary'
								onChange={ev => setCommentary(ev.target.value)}
							/>
						</div>

						<div className='d-grid gap-2 col-6 mx-auto'>
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
