import { useState } from 'react'

export default function ProductImages({ images }) {
	const [activeImage, setActiveImage] = useState(images?.[0])
	return (
		<div className='image__section'>
			<div className='big__image-wrapper'>
				<img className='big__image' src={activeImage} />
			</div>
			<button className='image__buttons'>
				{images.map(image => (
					<button
						className='image__button'
						key={image}
						active={image === activeImage}
						onClick={() => setActiveImage(image)}
					>
						<img className='image' src={image} alt='' />
					</button>
				))}
			</button>
		</div>
	)
}
