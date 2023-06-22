import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NewProducts from '@/components/NewProducts'
import Welcome from '@/components/Welcome'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import Link from 'next/link'

export default function HomePage({ featuredProduct, newProducts }) {
	return (
		<div>
			<Header />
			<Welcome product={featuredProduct} />
			<section class='category-list'>
				<div className='container'>
					<h1 class='title'>Категории товаров</h1>
					<div class='list'>
						<Link href='/category/stroller' class='item'>
							<img
								src={
									'https://babyplus.store/wp-content/uploads/sites/2/2023/02/2-Categorie-Wandelen-EN.png'
								}
								alt=''
								width={135}
								height={135}
							/>
						</Link>

						<Link href='/category/toys' class='item'>
							<img
								src={
									'https://babyplus.store/wp-content/uploads/sites/2/2023/02/2-Categorie-Spelen-EN.png'
								}
								width={135}
								height={135}
							/>
						</Link>

						<Link href='/category/care' class='item'>
							<img
								src={
									'https://babyplus.store/wp-content/uploads/sites/2/2023/02/2-Categorie-Verzorgen-EN.png'
								}
								width={135}
								height={135}
							/>
						</Link>
						<Link href='/category/room' class='item'>
							<img
								src={
									'https://babyplus.store/wp-content/uploads/sites/2/2023/02/2-Categorie-Inrichten-EN.png'
								}
								width={135}
								height={135}
							/>
						</Link>

						<Link href='/category/cloths' class='item'>
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
			<div className='quest'>
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<h2>Остались вопросы?</h2>
							<p>
								Задайте их специалисту TatosKids.kz по телефону горячей линии,
								закажите звонок или напишите нам.
							</p>
						</div>
						<div className='col-6'>
							<Link href='tel:8 (702) 244 53 00' class='number'>
								8 (702) 244 53 00
							</Link>
							<div class='quest-text'>Ежедневно с 10:00 до 20:00</div>
						</div>
					</div>
				</div>
			</div>

			<NewProducts products={newProducts} />
			<div className='comment'>
				<div className='container'>
					<h1 className='comment__title text-center my-5'>
						Что говорят клиенты
					</h1>
					<div className='row'>
						<div className='col-md-4 col-sd-12'>
							<div className='comment__ava'>
								<img
									src='https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'
									alt=''
								/>
								<div className='comment__about mx-3'>
									<div className='comment__name'>Дмитрий</div>
									<div className='comment__status my-1'>Клиент</div>
								</div>
							</div>
							<div className='comment__review my-4'>
								Lorem ipsum dolor sit amet consectetur adipisicing.
							</div>
						</div>
						<div className='col-md-4 col-sd-12'>
							<div className='comment__ava'>
								<img
									src='https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'
									alt=''
								/>
								<div className='comment__about mx-3'>
									<div className='comment__name'>Дмитрий</div>
									<div className='comment__status my-1'>Клиент</div>
								</div>
							</div>
							<div className='comment__review my-4'>
								Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Officiis cumque
								vel, quis laborum accusamus maiores deleniti ut perspiciatis
								recusandae molestias necessitatibus commodi dolore iste. Sit
								nisi cupiditate distinctio pariatur eaque?
							</div>
						</div>
						<div className='col-md-4 col-sd-12'>
							<div className='comment__ava'>
								<img
									src='https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'
									alt=''
								/>
								<div className='comment__about mx-3'>
									<div className='comment__name'>Дмитрий</div>
									<div className='comment__status my-1'>Клиент</div>
								</div>
							</div>
							<div className='comment__review my-4'>
								Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Perferendis, illum.
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	await mongooseConnect()
	const newProducts = await Product.find({}, null, {
		sort: { _id: -1 },
		limit: 4,
	})
	return {
		props: {
			newProducts: JSON.parse(JSON.stringify(newProducts)),
		},
	}
}
