import { CartContextProvider } from '@/components/CartContext'
import '../public/style.sass'

export default function App({ Component, pageProps }) {
	return (
		<>
			<CartContextProvider>
				<Component {...pageProps} />
			</CartContextProvider>
		</>
	)
}
