import HeaderMain from './HeaderMain'
import Nav from './Nav'
export default function Header({ product }) {
	return (
		<header className='py-4'>
			<div className='container'>
				<HeaderMain product={product} />
			</div>
			<Nav />
		</header>
	)
}
