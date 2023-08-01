import Link from 'next/link'

export default function Welcome({ settingsSite }) {
	const bgImg = settingsSite[0].photo
	return (
		<div
			className='welcome'
			style={{
				backgroundImage: `url(${bgImg})`,
			}}
		>
			<div className='container'>
				<div className='py-5'>
					<h2>{settingsSite[0].title}</h2>
					<h2>{settingsSite[0].supTitle}</h2>

					<Link
						href={'/category/stroller'}
						className='btn btn-lg btn-success my-2'
					>
						Наш Каталог
					</Link>
				</div>
			</div>
		</div>
	)
}
