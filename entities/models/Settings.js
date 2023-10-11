import { model, models, Schema } from 'mongoose'

const SettingsSchema = new Schema({
	number: { type: String },
	title: { type: String },
	supTitle: { type: String },
	photo: { type: String },
})

export const Settings = models?.Settings || model('Settings', SettingsSchema)
