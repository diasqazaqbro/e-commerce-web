import axios from 'axios'
import { useEffect, useState } from 'react'

export default function FiltrationProduct({
	products,
	categoryProps,
	setProperties,
}) {
	const [categoryState, setCategoryState] = useState('')
	const [state, setState] = useState('')

	useEffect(() => {
		axios.post('/api/category').then(response => {
			setCategoryState(response.data)
		})
	}, [])
	useEffect(() => {
		setProperties(state)
	}, [state])
	const checkFluency = v => {
		let check = document.querySelector('#' + v)
		let f = document.forms.Form
		f.onchange = function () {
			var n = f.querySelectorAll('[type="checkbox"]'),
				l = f.querySelectorAll('[type="checkbox"]:checked')
			for (var j = 0; j < n.length; j++)
				if (l.length >= 1) {
					n[j].disabled = true
					for (var i = 0; i < l.length; i++) l[i].disabled = false
				} else {
					n[j].disabled = false
				}
		}
		if (check.checked === true) {
			setState(v)
		} else {
			setState('')
		}
	}
	const filtrationCategory =
		categoryState.length && categoryState.filter(f => f._id === categoryProps)
	return (
		<>
			{filtrationCategory.length &&
				filtrationCategory[0].properties.map((p, index) => {
					return (
						<div className='item' key={index}>
							<h5 className='mt-3'>{p.name}</h5>
							<form name='Form'>
								{p.values.map(v => (
									<div className='custom-checkbox' key={v}>
										<input
											id={v}
											onClick={() => checkFluency(v)}
											type='checkbox'
										/>
										<label for={v}>
											{v}
											<span></span>
										</label>
									</div>
								))}
							</form>
						</div>
					)
				})}
			{state}
		</>
	)
}
