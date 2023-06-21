import { CartContext } from '@/components/CartContext'
import Link from 'next/link'
import { useContext } from 'react'
export default function ProductBox({ _id, title, price, images, col }) {
	const { addProduct } = useContext(CartContext)
	const url = '/product/' + _id
	return (
		<div className={'product p-4 col-md-' + col}>
			<div class='card'>
				<div className='card-body'>
					<Link href={url}>
						<img class='card-img-top' src={images?.[0]} alt='' />
					</Link>
					<Link class='card-title' href={url}>
						{title}
					</Link>
					<div class='card-price my-2' href={url}>
						{price} Тг
					</div>

					{/* <button
							className='button'
							data-bs-toggle='modal'
							data-bs-target='#exampleModal'
							onClick={() => addProduct(_id)}
						></button> */}
				</div>
			</div>
		</div>
	)
}
