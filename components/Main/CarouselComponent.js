import { Carousel } from 'antd'
import Link from 'next/link'
const contentStyle = {
	height: '300px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'left',
	backgroundImage:
		'url(https://images.ctfassets.net/dvf03q5b4rnw/7mTcYNMpwqBl6ynrk2yMKI/dcbe35d1c81c23c9f0d6fad4dfbd8466/BS_HP_HERO_PHASE_1_END_OF_SEASON_SALE_-_UP_TO_50-_MAY_22_copy_2__1_.jpg?w=2000&h=1200&q=80)',
}
const CarouselComponent = ({ settingsSite }) => (
	<Carousel autoplay>
		<div>
			<h3 style={contentStyle}>
				<div className='py-5'>
					<h2>{settingsSite[0].title}</h2>
					<h2>{settingsSite[0].supTitle}</h2>
					<Link
						href={'/category/stroller'}
						className='btn btn-lg btn-success my-2'
					>
						Наш Каталог
					</Link>
					s
				</div>
			</h3>
		</div>
		<div>
			<h3 style={contentStyle}>2</h3>
		</div>
		<div>
			<h3 style={contentStyle}>3</h3>
		</div>
		<div>
			<h3 style={contentStyle}>4</h3>
		</div>
	</Carousel>
)
export default CarouselComponent
