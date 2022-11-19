import mongoose from 'mongoose'

let models = {}

main()
async function main(){
    console.log('connecting to mongodb')
    await mongoose.connect('mongodb+srv://info441:info441@cluster0.ammniri.mongodb.net/test')

    console.log("successfully connected to mongodb!")

    const dreamSchema = new mongoose.Schema({
        dream: String
    })
    models.Dream = mongoose.model('Dream', dreamSchema)
    console.log('mongoose models created')
}

export default models