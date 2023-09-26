/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
}

module.exports = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		disable: 'development',
	},
})

module.exports = nextConfig
