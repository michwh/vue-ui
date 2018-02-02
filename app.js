import Koa from 'koa';
import koaBodyparser from 'koa-bodyparser';
import koaLogger from 'koa-logger';
import koaStatic from 'koa-static';
import koaRouter from 'koa-router';

const app = new Koa();
const router = koaRouter();

app.use(koaBodyparser());
app.use(koaLogger());