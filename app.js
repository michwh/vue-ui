import Koa from 'koa';
import koaBodyparser from 'koa-bodyparser';
import koaLogger from 'koa-logger';
import koaStatic from 'koa-static';
import koaRouter from 'koa-router';

const app = new Koa();
const router = koaRouter();

app.use(koaBodyparser());
app.use(koaLogger());

app.use(async (ctx, next) =>{
   let start = new Date();
   await next();
   let ms = new Date() - start;
   console.log('%s %s - %s',ctx.method,ctx.url,ms);
});

app.on('error',(err,ctx) =>{
	console.log('server error',err);
});

app.listen(3001, () => {
    console.log('Koa is listening in 3001');
});

export default app; 