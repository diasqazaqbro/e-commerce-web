import { CartContext } from '@/components/CartContext'
import Header from '@/components/Header'
import ProductImages from '@/components/ProductImages'
import CartIcon from '@/components/icons/CartIcon'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import { useContext } from 'react'
import styled from 'styled-components'

const ColWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	@media screen and (min-width: 768px) {
		grid-template-columns: 0.8fr 1.2fr;
	}
	gap: 40px;
	margin: 40px 0;
`
const PriceRow = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`
const Price = styled.span`
	font-size: 1.4rem;
`

export default function ProductPage({ product }) {
	const { addProduct } = useContext(CartContext)
	return (
		<>
			<Header />
			<ColWrapper>
				<ProductImages images={product.images} />
				<div>
					<h2 className='title'>{product.title}</h2>
					<p>{product.description}</p>
					<PriceRow>
						<div>
							<Price>{product.price} Тг</Price>
						</div>
						<div>
							<button
								className='button'
								primary
								onClick={() => addProduct(product._id)}
							>
								<CartIcon />
								Add to cart
							</button>
						</div>
					</PriceRow>
				</div>
			</ColWrapper>
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
