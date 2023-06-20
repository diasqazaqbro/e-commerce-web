import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Cloths() {
	return (
		<div>
			<Header />
			<div className='container my-5 py-5'>
				<nav
					style={{ '--bs-breadcrumb-divider': "'>';" }}
					aria-label='breadcrumb'
				>
					<ol className='breadcrumb'>
						<li className='breadcrumb-item'>
							<a href='/'>Главная страница</a>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							Одежда
						</li>
					</ol>
				</nav>
			</div>
			<Footer />
		</div>
	)
}
