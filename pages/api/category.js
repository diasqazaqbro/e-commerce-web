import { Category } from '@/entities/models/Category'
import { mongooseConnect } from '@/shared/lib/mongoose'

export default async function handle(req, res) {
	await mongooseConnect()
	const ids = req.body.ids
	res.json(await Category.find())
}
