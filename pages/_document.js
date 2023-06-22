import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
					crossorigin='anonymous'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>

			<Script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js'
				integrity='sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF'
				crossorigin='anonymous'
			/>
			<Script
				src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js'
				integrity='sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p'
				crossorigin='anonymous'
			/>
		</Html>
	)
}
