import Link from 'next/link'

const ItemSearch = ({ title, linkId, img }) => {
	return (
		<Link href={'/product/' + linkId} className='link-search'>
			<div className='row  my-2'>
				<div className='col-4'>
					<img className='border' src={img} />
				</div>
				<div className='col-8'>
					<h5>{title}</h5>
				</div>
			</div>
		</Link>
	)
}
export default ItemSearch
