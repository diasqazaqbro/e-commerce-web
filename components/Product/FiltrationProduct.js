import axios from 'axios'
import { useEffect, useState } from 'react'

export default function FiltrationProduct({
	products,
	categoryProps,
	setProducerFc,
	setColorFc,
	setSizeFc,
}) {
	const [categoryState, setCategoryState] = useState('')
	const [size, setSize] = useState('')
	const [color, setColor] = useState('')
	const [producer, setProducer] = useState('')

	useEffect(() => {
		axios.post('/api/category').then(response => {
			setCategoryState(response.data)
		})
	}, [])
	useEffect(() => {
		setProducerFc(producer)
	}, [producer])
	useEffect(() => {
		setColorFc(color)
	}, [color])
	useEffect(() => {
		setSizeFc(size)
	}, [size])
	const checkFluencyProducer = v => {
		let check = document.querySelector('#' + v)
		let f = document.getElementById('Form1')
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
			setProducer(v)
		} else {
			setProducer('')
		}
	}
	const checkFluencyColor = v => {
		let check = document.querySelector('#' + v)
		let f = document.getElementById('Form2')
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
			setColor(v)
		} else {
			setColor('')
		}
	}
	const checkFluencySize = v => {
		let check = document.querySelector('#' + v)
		let f = document.getElementById('Form3')
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
		console.log(f)
		if (check.checked === true) {
			setSize(v)
		} else {
			setSize('')
		}
	}
	const filtrationCategory =
		categoryState.length && categoryState.filter(f => f._id === categoryProps)

	return (
		<>
			<div className='item'>
				<h5 className='mt-3'>Производитель</h5>
				<form id='Form1'>
					{filtrationCategory[0] &&
						filtrationCategory[0].properties[0].values.map(v => (
							<div className='custom-checkbox' key={v}>
								<input
									id={v}
									onClick={() => checkFluencyProducer(v)}
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
			<div className='item'>
				<h5 className='mt-3'>Цвет</h5>
				<form id='Form2'>
					{filtrationCategory[0] &&
						filtrationCategory[0].properties[1].values.map(v => (
							<div className='custom-checkbox' key={v}>
								<input
									id={v}
									onClick={() => checkFluencyColor(v)}
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
			<div className='item'>
				<h5 className='mt-3'>Размер</h5>
				<form id='Form3'>
					{filtrationCategory[0] &&
						filtrationCategory[0].properties[2].values.map(v => (
							<div className='custom-checkbox' key={v}>
								<input
									id={v}
									onClick={() => checkFluencySize(v)}
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
		</>
	)
}
