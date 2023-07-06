import { mongooseConnect } from '@/lib/mongoose'
import { Category } from '@/models/Category'

export default async function handle(req, res) {
	await mongooseConnect()
	const ids = req.body.ids
	res.json(await Category.find())
}
