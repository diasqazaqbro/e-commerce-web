import HeaderMain from './HeaderMain'
import Nav from './Nav'
export default function Header({ product }) {
	return (
		<header className='py-4'>
			{/* <p className='header-sell'>
				Получите скидку 10% по коду скидки JUNE23. пожалуйста, проверьте.
				<Link href='' className='mx-2'>
					Dismiss
				</Link>
			</p> */}
			<div className='container'>
				<HeaderMain product={product} />
			</div>
			<Nav />
		</header>
	)
}
