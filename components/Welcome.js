export default function Welcome() {
	return (
		<div className='welcome'>
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<div className='box__first'>
							<h1 className='mb-5'>
								Стильная Детская
								<br />
								Одежда
							</h1>
							<button>Смотреть</button>
						</div>
					</div>
					<div className='col-6'>
						<div className='box__second'>
							<img src='/welcome.png' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
