import Link from 'next/link'

export default function Quest({ settingsSite }) {
	return (
		<div className='quest'>
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<h2>Остались вопросы?</h2>
						<p>
							Задайте их специалисту PegasShop.kz по телефону горячей линии,
							закажите звонок или напишите нам.
						</p>
					</div>
					<div className='col-6'>
						<Link href={'tel:' + settingsSite[0].number} className='number'>
							{settingsSite[0].number}
						</Link>
						<div className='quest-text'>Ежедневно с 10:00 до 20:00</div>
					</div>
				</div>
			</div>
		</div>
	)
}
