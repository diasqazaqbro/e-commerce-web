import Link from 'next/link'

const Breadcrumb = ({ nav }) => {
	return (
		<nav style={{ '--bs-breadcrumb-divider': "'>';" }} aria-label='breadcrumb'>
			<ol className='breadcrumb'>
				<li className='breadcrumb-item'>
					<Link href='/'>Главная страница</Link>
				</li>
				<li className='breadcrumb-item active' aria-current='page'>
					{nav}
				</li>
			</ol>
			<hr />
		</nav>
	)
}

export default Breadcrumb
