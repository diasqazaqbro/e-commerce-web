import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
	const [show, setShow] = useState(false)
	console.log(show)
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container'>
				<Link href='/' aria-current='page' className='home'>
					<svg
						className='svg-inline--fa fa-home fa-w-18 logo-header'
						aria-hidden='true'
						data-prefix='fas'
						data-icon='home'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 576 512'
						data-fa-i2svg=''
					>
						<path
							fill='currentColor'
							d='M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z'
						></path>
					</svg>
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

							{/* <li className='nav-item dropdown'>
						<Link
							className='nav-link dropdown-toggle'
							href='#'
							id='navbarDropdown'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							Dropdown
						</Link>
						<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<li>
								<Link className='dropdown-item' href='#'>
									Action
								</Link>
							</li>
							<li>
								<Link className='dropdown-item' href='#'>
									Another action
								</Link>
							</li>
							<li>
								<hr className='dropdown-divider' />
							</li>
							<li>
								<Link className='dropdown-item' href='#'>
									Something else here
								</Link>
							</li>
						</ul>
					</li>
					 */}
						</ul>
					</div>
				) : (
					''
				)}
			</div>
		</nav>
	)
}
