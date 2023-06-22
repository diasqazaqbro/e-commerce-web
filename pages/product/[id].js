import { CartContext } from '@/components/CartContext'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import axios from 'axios'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

export default function ProductPage({ product }) {
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
					<nav
						style={{ '--bs-breadcrumb-divider': "'>';" }}
						aria-label='breadcrumb'
					>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<Link href='/'>Главная страница</Link>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								{product.title}
							</li>
						</ol>
					</nav>
					<div className='row'>
						<div className='border col-md-4'>
							<img src={product.images} alt='' />
						</div>
						<div className='col-md-8'>
							<div className='row'>
								<div className='col-6 mx-3'>
									<h2 className='titles'>{product.title}</h2>

									<div className='price'>{product.price} Тг</div>
									<button
										onClick={() => addProduct(product._id)}
										className='btn my-2 btn-lg btn-outline-success'
									>
										Добавить в корзину
									</button>
									<div class='accordion-item my-3'>
										<h2 class='accordion-header' id='flush-headingOne'>
											<button
												class='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#flush-collapseOne'
												aria-expanded='false'
												aria-controls='flush-collapseOne'
											>
												Описание
											</button>
										</h2>
										<div
											id='flush-collapseOne'
											class='accordion-collapse collapse show'
											aria-labelledby='flush-headingOne'
											data-bs-parent='#accordionFlushExample'
										>
											<div class='accordion-body'>{product.description}</div>
										</div>
									</div>
									<div class='accordion-item'>
										<h2 class='accordion-header' id='flush-headingOne'>
											<button
												class='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#flush-collapseOnee'
												aria-expanded='false'
												aria-controls='flush-collapseOnee'
											>
												Условие перевозки
											</button>
										</h2>
										<div
											id='flush-collapseOnee'
											class='accordion-collapse collapse'
											aria-labelledby='flush-headingOnee'
											data-bs-parent='#accordionFlushExamplee'
										>
											<div class='accordion-body'>
												<b className='my-3'>Доставка</b>
												<br /> Мы стремимся отправить все заказы с нашего склада
												в течение одного рабочего дня. Дополнительную информацию
												о сроках и стоимости доставки для вашего конкретного
												места можно получить при оформлении заказа. <br />
												<br />
												Обратите внимание, что ваш заказ может быть отправлен в
												разных упаковках. Когда ваш заказ будет отправлен с
												нашего склада, мы вышлем вам подтверждение доставки по
												электронной почте с номером отслеживания. <br /> <br />
												<b className='my-3'>Возврат</b> <br />
												Мы хотим, чтобы вы остались довольны своим товаром и
												имели возможность рассмотреть его поближе. Если вы
												хотите вернуть товар, вы можете узнать больше о нашей
												политике возврата здесь.
											</div>
										</div>
									</div>
								</div>
								<div className='col-5'>
									<h2 className='titles'>Количество товара</h2>
									<div className='product-cart'>
										{products
											.filter(f => f._id === product._id)
											.map(product => (
												<div key={product._id}>
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
													{cartProducts.filter(id => id === product._id)
														.length * product.price}{' '}
													Тг
												</div>
											))}
									</div>
									<hr />
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
