import { Head, Html, Main, NextScript } from 'next/document'
export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<meta name='theme-color' content='#ffffff' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta property='og:type' content='website' />
				<meta property='og:locale' content='ru_RU' />
				<meta property='og:site_name' content='tatos' />
				{/* <meta
					name='google-site-verification'
					content='7FN78Puq3e56O4oZGxzFzqsOmSZqXYXUt5EvBHaWQmE'
				/>
				<meta name='yandex-verification' content='628507053801d86e' /> */}
				<link rel='shortcut icon' href='/logo.png' type='image/png' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>

				<meta
					property='og:title'
					content='Детская одежда в интернет магазине Pegas.kz по всем Казахстану❤️'
				/>

				<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
				<title>Pegas.kz - детские товары по всему Казахстану</title>

				<meta
					name='description'
					content='Описание того, что содержится на странице'
				/>
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
					crossorigin='anonymous'
				/>
				<meta name='theme-color' content='#fff' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
