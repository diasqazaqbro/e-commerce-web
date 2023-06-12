import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='pt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-1'></div>
					<div className='col-9'>
						<form class='form' action='action_page.php'>
							<input
								type='text'
								placeholder='Поиск по магазину'
								name='search'
							/>
						</form>
					</div>
					<div className='col-1'>
						<Link className='link__nav' href={'/cart'}>
							<Image
								src='/cart.png'
								width={50}
								height={50}
								alt='Picture of the author'
							/>
						</Link>
					</div>
					<div className='col-1'></div>
				</div>
				{/* end header */}
				<nav className='my-5'>
					<Link className='link__nav' href={'/stroller'}>
						<Image
							src='/nav1.png'
							width={70}
							height={70}
							alt='Picture of the author'
						/>
						<div>
							Прогулка <br /> и улица
						</div>
					</Link>
					<Link className='link__nav' href={'/room'}>
						<Image
							src='/nav2.png'
							width={70}
							height={70}
							alt='Picture of the author'
						/>
						<div>
							Детская
							<br /> комната
						</div>
					</Link>
					<Link className='link__nav' href={'/toys'}>
						<Image
							src='/nav3.png'
							width={70}
							height={70}
							alt='Picture of the author'
						/>
						<div>
							Игрушки <br />и развлечения
						</div>
					</Link>
					<Link className='link__nav' href={'/care'}>
						<Image
							src='/nav5.png'
							width={70}
							height={70}
							alt='Picture of the author'
						/>
						<div>
							Забота
							<br /> и уход
						</div>
					</Link>
					<Link className='link__nav' href={'/cloths'}>
						<Image
							src='/nav4.png'
							width={70}
							height={70}
							alt='Picture of the author'
						/>
						<div>Одежда</div>
					</Link>
				</nav>
			</div>
			<img
				style={{ width: '100%', position: 'relative', top: 70 }}
				src='/cloud.png'
			></img>
		</header>
	)
}
