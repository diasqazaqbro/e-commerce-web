import Link from 'next/link'

export default function Category() {
	return (
		<section className='category-list'>
			<div className='container'>
				<h1 className='title'>Категории товаров</h1>
				<div className='list'>
					<Link href='/category/stroller' className='item'>
						<img
							src={
								'https://babyplus.store/wp-content/uploads/sites/2/2023/02/2-Categorie-Wandelen-EN.png'
							}
							alt=''
							width={135}
							height={135}
						/>
					</Link>

					<Link href='/category/toys' className='item'>
						<img
							src={
								'https://babyplus.store/wp-content/uploads/sites/2/2023/02/2-Categorie-Spelen-EN.png'
							}
							width={135}
							height={135}
						/>
					</Link>

					<Link href='/category/care' className='item'>
						<img
							src={
								'https://babyplus.store/wp-content/uploads/sites/2/2023/02/2-Categorie-Verzorgen-EN.png'
							}
							width={135}
							height={135}
						/>
					</Link>
					<Link href='/category/room' className='item'>
						<img
							src={
								'https://babyplus.store/wp-content/uploads/sites/2/2023/02/2-Categorie-Inrichten-EN.png'
							}
							width={135}
							height={135}
						/>
					</Link>

					<Link href='/category/cloths' className='item'>
						<img
							src={
								'https://babyplus.store/wp-content/uploads/sites/2/2023/02/2-Categorie-Merken-EN.png'
							}
							width={135}
							height={135}
						/>
					</Link>
				</div>
			</div>
		</section>
	)
}
