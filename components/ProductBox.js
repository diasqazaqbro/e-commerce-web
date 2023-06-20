import { CartContext } from '@/components/CartContext'
import Link from 'next/link'
import { useContext } from 'react'
export default function ProductBox({ _id, title, price, images, col }) {
	const { addProduct } = useContext(CartContext)
	const url = '/product/' + _id
	return (
		<div className={'product p-4 col-' + col}>
			<Link className='white__box' href={url}>
				<div>
					<img src={images?.[0]} alt='' />
				</div>
			</Link>
			<div className='info my-4'>
				<Link className='title' href={url}>
					{title}
				</Link>
				<div className='price__row my-2'>
					<button
						className='button'
						data-bs-toggle='modal'
						data-bs-target='#exampleModal'
						onClick={() => addProduct(_id)}
					>
						<div className='price'>{price} Тг</div>
						<img src='https://i.ibb.co/Wy8sHYF/2.png' />
					</button>
				</div>
			</div>
		</div>
	)
}
