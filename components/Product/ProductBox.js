import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../CartContext'
export default function ProductBox({ _id, title, price, images, col }) {
	const url = '/product/' + _id
	const { cartProducts, addProduct, removeProduct, clearCart } =
		useContext(CartContext)
	return (
		<div className={'product p-4 col-sm-6 col-md-' + col}>
			<div className='card'>
				<div className='card-body text-center'>
					<Link href={url}>
						<img className='card-img-top' src={images?.[0]} alt='' />
					</Link>
					<hr />
					<Link className='card-title mt-5' href={url}>
						{title}
					</Link>
					<div className='card-price my-2' href={url}>
						<span>Цена:</span> {price} Тг
					</div>
					<div className='d-grid button-size my-2' href={url}>
						<Link
							href={'/cart'}
							onClick={() => addProduct(_id)}
							className='btn my-2 btn-outline-success'
						>
							Добавить в корзину
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
