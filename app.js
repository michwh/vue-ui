const Koa = require('koa');
const koaRouter = require('koa-router');
const logger = require('koa-logger');
const auth = require('./server/routes/auth.js');

const app = new Koa();
const router = koaRouter();

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

router.use('auth',auth.routes());

app.use(router.routes());

app.listen(3001, () => {
    console.log('Koa is listening in 3001');
});

module.exports =  app; 