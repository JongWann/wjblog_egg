'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const rank = await this.ctx.service.article.findByPage({}, 0, 5);
    await this.ctx.render('index.ejs', { rank, user: this.ctx.cookies.get('user') });
  }

  async right() {
    const rank = await this.ctx.service.article.findByPage({}, 0, 5);
    await this.ctx.render('public/right.ejs', { rank, user: this.ctx.cookies.get('user') });
  }

  async loginPage() {
    await this.ctx.render('login.ejs');
  }

  async writeBlog() {
    await this.ctx.render('writeArticle.ejs');
  }

  async aboutMe() {
    const rank = await this.ctx.service.article.findByPage({}, 0, 5);
    await this.ctx.render('aboutMe.ejs', { rank, user: this.ctx.cookies.get('user') });
  }

  async login() {
    const body = this.ctx.request.body;
    const userName = body.userName;
    const password = body.password;
    if (userName === 'admin' && password === '123456') {
      this.ctx.body = {
        status: 'ok',
      };
      // 设置cookie并设置时效时间
      this.ctx.cookies.set('user', 'admin', { maxAge: 30 * 60 * 1000 });
    } else {
      this.ctx.body = {
        status: 'error',
        msg: '用户名或密码错误',
      };
    }
  }
}

module.exports = HomeController;
