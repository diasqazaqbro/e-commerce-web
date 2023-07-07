import { CartContext } from '@/components/CartContext'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Search from '../Search/Search'

export default function HeaderMain({ product }) {
	const { cartProducts } = useContext(CartContext)
	useEffect(() => {
		if (cartProducts.length > 0) {
			axios.post('/api/cart', { ids: cartProducts }).then(response => {
				setProducts(response.data)
			})
		} else {
			setProducts([])
		}
	}, [cartProducts])

	const [products, setProducts] = useState([])
	const router = useRouter()
	let total = 0
	for (const productId of cartProducts) {
		const price = products.find(p => p._id === productId)?.price || 0
		total += price
	}
	return (
		<div className='header-main pb-3'>
			<div className='logo'>Tatos.kz</div>
			{router.asPath === '/' ? (
				<div className='search'>
					<Search product={product} />
				</div>
			) : (
				''
			)}
			{/* <Link className='telephone' href={'tel:87022445300'}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 16 16'
				>
					<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
				</svg>

				<span className='telephone-num'>8 (702) 244 53 00</span>
			</Link> */}
			<ul className='account-menu'>
				<li className='mini-cart'>
					<Link href='/cart' className='account-menu__link '>
						<svg viewBox='0 0 24 24' width='25' height='25'>
							<path
								fillRule='evenodd'
								d='M9.88 4.63A3 3 0 0 1 14.9 6H9.1a3 3 0 0 1 .78-1.37ZM7.56 6a4.5 4.5 0 0 1 8.88 0h3.8c.84 0 1.51.67 1.51 1.5v8.75A4.75 4.75 0 0 1 17 21H7a4.75 4.75 0 0 1-4.75-4.75V7.5c0-.83.67-1.5 1.5-1.5h3.81Zm8.19 1.5h4.5v8.75A3.25 3.25 0 0 1 17 19.5H7a3.25 3.25 0 0 1-3.25-3.25V7.5h12Z'
							></path>
						</svg>
						<span className='cart-amount mx-2'>
							| {cartProducts.length} на {total} тг
						</span>
					</Link>
				</li>
			</ul>
		</div>
	)
}
