//require('./.env');
const Koa = require('koa');
const koaRouter = require('koa-router');
const logger = require('koa-logger');
const auth = require('./server/routes/auth.js');
const historyApiFallback = require('koa2-history-api-fallback');
const jwt =  require('koa-jwt');
const path = require('path');
const serve = require('koa-static');
const api = require('./server/routes/api.js');

const app = new Koa();
const router = koaRouter();

//let port = process.env.PORT

app.use(require('koa-bodyparser')());
app.use(logger());


app.use(async (ctx, next) =>{
   let start = new Date();
   await next();
   let ms = new Date() - start;
   console.log('%s %s - %s',ctx.method,ctx.url,ms);
});

app.on('error',(err,ctx) =>{
	console.log('server error',err);
});

router.use('/auth',auth.router.routes())
router.use('/api', jwt({secret: 'nothing-left'}), api.router.routes())

app.use(router.routes());
app.use(historyApiFallback())
app.use(serve(path.resolve('dist')))

app.listen(3001, () => {
    console.log('Koa is listening in 3001');
});

module.exports =  app; 