import { HomeIcon } from '@/shared/UI/Icon/HomeIcon'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
	const [show, setShow] = useState(false)
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container'>
				<Link href='/' aria-current='page' className='home'>
					<HomeIcon />
					<span>Home</span>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span
						onClick={() => setShow(!show)}
						className='navbar-toggler-icon'
					></span>
				</button>
				{!show ? (
					<div className='navbar-collapse'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link className='nav-link' href='/category/stroller'>
									Коляски
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' href='/category/toys'>
									Игрушки
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' href='/category/care'>
									Уход
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' href='/category/room'>
									Детская Комната
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' href='/category/cloths'>
									Одежда
								</Link>
							</li>
						</ul>
					</div>
				) : (
					''
				)}
			</div>
		</nav>
	)
}
