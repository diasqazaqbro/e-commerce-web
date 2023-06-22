import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

export default function Care() {
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
							<Link href='/'>Главная страница</Link>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							Забота и уход
						</li>
					</ol>
				</nav>
			</div>

			<Footer />
		</div>
	)
}
