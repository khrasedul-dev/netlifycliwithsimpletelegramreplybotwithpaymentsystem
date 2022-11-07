const {Telegraf} = require('telegraf')
const mongoose = require('mongoose')

const bot = new Telegraf('5778440630:AAHUx8xYvPy-3UFrxJtDkTfWXyLAVhtYutY')


const Schema = mongoose.Schema;

const  shemaDB = new Schema({
  msg: {
    type: String
  } 
})

const testModel = mongoose.model("test", shemaDB)


mongoose.connect('mongodb+srv://rasedul20:rasedul20@telegramcluster.xfaz1rx.mongodb.net/sdBot', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then((d) => console.log('Database connected'))
.catch((e) => console.log(e))



bot.start(ctx=>{
  ctx.reply('hi')
})


bot.command('test',ctx=>{
  testModel.find()
  .then(data=>{
    ctx.reply(data[0].msg)
  })
  .catch(e=>console.log(e))
})




const handler = async (event) => {
  try {
      await bot.handleUpdate(JSON.parse(event.body))
      return { statusCode: 200, body: "" }
  } catch (error) {
      return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
