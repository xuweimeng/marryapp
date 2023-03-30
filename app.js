const Koa = require('koa');
const static = require('koa-static')


const app = new Koa();
app.use(static(__dirname, 'build'))

app.use(async (ctx) => {

})

app.listen(3389, () => {
	console.log('marry app is running at 3000')
})