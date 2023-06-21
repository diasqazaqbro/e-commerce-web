import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from './CartContext'
export default function Header() {
	const { cartProducts } = useContext(CartContext)
	return (
		<header className=''>
			<p class='header-sell'>
				Получите скидку 10% по коду скидки JUNE23. пожалуйста, проверьте.
				<Link href='' class='mx-2'>
					Dismiss
				</Link>
			</p>
			<div className='container'>
				<div className='header-main'>
					<div className='logo'>Tatos</div>
					<div className='search'>
						<form class='d-flex'>
							<input
								class='form-control me-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button class='btn btn-outline-success' type='submit'>
								Поиск
							</button>
						</form>
					</div>
					<ul class='account-menu'>
						<li class='mini-cart'>
							<Link href='/cart' class='account-menu__link'>
								<svg
									class='fill-black stroke-none '
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path
										fill-rule='evenodd'
										d='M9.88 4.63A3 3 0 0 1 14.9 6H9.1a3 3 0 0 1 .78-1.37ZM7.56 6a4.5 4.5 0 0 1 8.88 0h3.8c.84 0 1.51.67 1.51 1.5v8.75A4.75 4.75 0 0 1 17 21H7a4.75 4.75 0 0 1-4.75-4.75V7.5c0-.83.67-1.5 1.5-1.5h3.81Zm8.19 1.5h4.5v8.75A3.25 3.25 0 0 1 17 19.5H7a3.25 3.25 0 0 1-3.25-3.25V7.5h12Z'
									></path>
								</svg>
								<span class='cart-amount'>
									{cartProducts.length === 1 ? '0' : cartProducts.length - 1}
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<nav class='navbar navbar-expand-lg navbar-light bg-light'>
				<div class='container'>
					<Link href='/' aria-current='page' className='home'>
						<svg
							class='svg-inline--fa fa-home fa-w-18'
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
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
							<li class='nav-item'>
								<Link class='nav-link' href='/category/stroller'>
									Коляски
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' href='/category/toys'>
									Игрушки
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' href='/category/care'>
									Уход
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' href='/category/room'>
									Детская Комната
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' href='/category/cloths'>
									Одежда
								</Link>
							</li>

							{/* <li class='nav-item dropdown'>
								<Link
									class='nav-link dropdown-toggle'
									href='#'
									id='navbarDropdown'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Dropdown
								</Link>
								<ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
									<li>
										<Link class='dropdown-item' href='#'>
											Action
										</Link>
									</li>
									<li>
										<Link class='dropdown-item' href='#'>
											Another action
										</Link>
									</li>
									<li>
										<hr class='dropdown-divider' />
									</li>
									<li>
										<Link class='dropdown-item' href='#'>
											Something else here
										</Link>
									</li>
								</ul>
							</li>
							 */}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
