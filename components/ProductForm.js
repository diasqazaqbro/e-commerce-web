import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ProductForm({
	_id,
	title: existingTitle,
	description: existingDescription,
	price: existingPrice,
	images: existingImages,
	category: assignedCategory,
	properties: assignedProperties,
}) {
	const [title, setTitle] = useState(existingTitle || '')
	const [description, setDescription] = useState(existingDescription || '')
	const [category, setCategory] = useState(assignedCategory || '')
	const [productProperties, setProductProperties] = useState(
		assignedProperties || {}
	)
	const [price, setPrice] = useState(existingPrice || '')
	const [images, setImages] = useState('')
	const [goToProducts, setGoToProducts] = useState(false)
	const [isUploading, setIsUploading] = useState(false)
	const [categories, setCategories] = useState([])
	const router = useRouter()
	useEffect(() => {
		axios.get('/api/categories').then(result => {
			setCategories(result.data)
		})
	}, [])
	async function saveProduct(ev) {
		ev.preventDefault()
		const data = {
			title,
			description,
			price,
			images,
			category,
			properties: productProperties,
		}
		if (_id) {
			//update
			await axios.put('/api/products', { ...data, _id })
		} else {
			//create
			await axios.post('/api/products', data)
		}
		setGoToProducts(true)
	}
	if (goToProducts) {
		router.push('/products')
	}
	async function uploadImages(ev) {
		const files = ev.target?.files
		if (files?.length > 0) {
			setIsUploading(true)
			const data = new FormData()
			for (const file of files) {
				data.append('file', file)
			}
		}
	}
	function setProductProp(propName, value) {
		setProductProperties(prev => {
			const newProductProps = { ...prev }
			newProductProps[propName] = value
			return newProductProps
		})
	}

	const propertiesToFill = []
	if (categories.length > 0 && category) {
		let catInfo = categories.find(({ _id }) => _id === category)
		propertiesToFill.push(...catInfo.properties)
		while (catInfo?.parent?._id) {
			const parentCat = categories.find(
				({ _id }) => _id === catInfo?.parent?._id
			)
			propertiesToFill.push(...parentCat.properties)
			catInfo = parentCat
		}
	}

	return (
		<form onSubmit={saveProduct}>
			<label>Имя Товара</label>
			<input
				type='text'
				placeholder='Имя Товара'
				value={title}
				onChange={ev => setTitle(ev.target.value)}
			/>
			<label>Фото</label>
			<input
				type='text'
				placeholder='Ссылка на фотографию'
				value={images}
				onChange={ev => setImages(ev.target.value)}
			/>
			<label>Категория</label>
			<select value={category} onChange={ev => setCategory(ev.target.value)}>
				<option value=''>Нет Категории</option>
				{categories.length > 0 &&
					categories.map(c => (
						<option key={c._id} value={c._id}>
							{c.name}
						</option>
					))}
			</select>
			{propertiesToFill.length > 0 &&
				propertiesToFill.map(p => (
					<div key={p.name} className=''>
						<label>{p.name[0] + p.name.substring(1)}</label>
						<div>
							<select
								value={productProperties[p.name]}
								onChange={ev => setProductProp(p.name, ev.target.value)}
							>
								{p.values.map(v => (
									<option key={v} value={v}>
										{v}
									</option>
								))}
							</select>
						</div>
					</div>
				))}

			<label>Описание</label>
			<textarea
				placeholder='Описание'
				value={description}
				onChange={ev => setDescription(ev.target.value)}
			/>
			<label>Цена (в Тг)</label>
			<input
				type='number'
				placeholder='Цена'
				value={price}
				onChange={ev => setPrice(ev.target.value)}
			/>
			<button type='submit' className='btn-primary'>
				Сохранить
			</button>
		</form>
	)
}
