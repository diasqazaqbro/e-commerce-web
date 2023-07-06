import Link from 'next/link'
export default function ProductBox({ _id, title, price, images, col }) {
	const url = '/product/' + _id
	return (
		<div className={'product p-4 col-sm-6 col-md-' + col}>
			<div className='card'>
				<div className='card-body'>
					<Link href={url}>
						<img className='card-img-top' src={images?.[0]} alt='' />
					</Link>
					<Link className='card-title' href={url}>
						{title}
					</Link>
					<div className='card-price my-2' href={url}>
						{price} Тг
					</div>
				</div>
			</div>
		</div>
	)
}
