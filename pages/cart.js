import { CartContext } from '@/entities/CartContext'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import { Breadcrumb } from 'antd'
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
	const [validate, setValidate] = useState(false)
	const [modal, setModal] = useState(false)
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
		document.title = 'Корзина товаров | Pegas.kz'
	}, [])
	function moreOfThisProduct(id) {
		addProduct(id)
	}
	function lessOfThisProduct(id) {
		removeProduct(id)
	}
	async function goToPayment() {
		if (name === '') {
			setValidate('name')
			setModal(true)
		} else if (number === '') {
			setValidate('number')
			setModal(true)
		} else {
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
					<p>Мы свяжемся с вами в течение нескольких часов.</p>
				</div>
				<Footer />
			</>
		)
	}
	return (
		<>
			<Header />
			<div className='container'>
				<Breadcrumb nav={'Корзина'} />
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
											<span>
												{cartProducts.filter(id => id === product._id).length}
											</span>
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
							<td className='pt-4'>
								<button
									onClick={() => clearCart()}
									className='btn btn-outline-success  btn-sm'
								>
									Очистить корзину
								</button>
							</td>
							<td></td>
							<td></td>
							<td></td>
							<td className='pt-4 total'>
								<h5>{total} Тг</h5>
							</td>
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
							<select
								value={option}
								name='option'
								onChange={event => setOption(event.target.value)}
								className='select-profession form-control'
							>
								<option disabled>Удобный способ связи</option>
								<option value={'WhatsApp'}>WhatsApp</option>
								<option value={'Telegram'}>Telegram</option>
								<option value={'По звонку'}>По звонку</option>
							</select>
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
						{modal ? (
							<div
								className='position-fixed cart-modal top-0 end-0 p-3'
								style={{ 'z-index': 11 }}
							>
								<div className='toast-header'>
									<div className='rounded me-2 img' alt='...'>
										/
									</div>
									<strong className='me-auto'>Validate</strong>
									<small>сейчас</small>
									<button
										onClick={() => setModal(false)}
										type='button'
										className='btn-close'
									></button>
								</div>
								<div className='toast-body'>Вы не указали имя или номер.</div>
							</div>
						) : (
							''
						)}
					</>
				)}
			</div>
			<Footer />
		</>
	)
}
