import ItemSearch from '../../shared/UI/ItemSearch'

const ListSearch = ({ productList }) => {
	console.log(productList)
	return (
		<div className='container-lg mx-auto grid-cols-3'>
			{productList?.map((product, index) => {
				return (
					<ItemSearch
						key={index}
						title={product.title}
						linkId={product._id}
						img={product.images[0]}
					/>
				)
			})}
		</div>
	)
}
export default ListSearch
