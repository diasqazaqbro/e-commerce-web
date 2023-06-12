import { CartContext } from '@/components/CartContext'
import Link from 'next/link'
import { useContext } from 'react'

export default function ProductBox({ _id, title, description, price, images }) {
	const { addProduct } = useContext(CartContext)
	const url = '/product/' + _id
	return (
		<div className='product__wrapper'>
			<Link className='white__box' href={url}>
				<div>
					<img src={images?.[0]} alt='' />
				</div>
			</Link>
			<div className='product__info'>
				<Link className='title' href={url}>
					{title}
				</Link>
				<div className='price__row'>
					<div className='price'>{price} Тг</div>
					<button
						className='button'
						block
						onClick={() => addProduct(_id)}
						primary
						outline
					>
						Добавить в корзину
					</button>
				</div>
			</div>
		</div>
	)
}
