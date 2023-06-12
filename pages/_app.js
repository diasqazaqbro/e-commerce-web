import { CartContextProvider } from '@/components/CartContext'
import '../public/footer.css'
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
