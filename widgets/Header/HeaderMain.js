import { CartContext } from '@/entities/CartContext'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Search from '../../features/Search/Search'

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
			<Link href='/'>
				<Image className='logo' src={'/logo.png'} width={65} height={65} />
			</Link>
			{router.asPath === '/' ? (
				<div className='search'>
					<Search product={product} />
				</div>
			) : (
				''
			)}
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
