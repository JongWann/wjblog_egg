'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async save() {
    const body = this.ctx.request.body;
    // 防止XSS威胁
    body.title = this.ctx.helper.escape(body.title);
    await this.ctx.service.article.saveArticle(body);
    this.ctx.body = {
      msg: '保存成功',
    };
  }

  async findByPage() {
    const body = this.ctx.request.body;
    const query = body.query;
    const page = body.page;
    const pagesize = body.pagesize;
    const articleList = await this.ctx.service.article.findByPage(query, page, pagesize);
    const count = await this.ctx.service.article.pageCount(query);
    this.ctx.body = {
      status: 'ok',
      articles: articleList,
      count,
    };
  }

  async showAritcle() {
    const body = this.ctx.request.query;
    const id = body.id;
    const article = await this.ctx.service.article.findById(id);
    const rank = await this.ctx.service.article.findByPage({}, 0, 5);
    const count = article.count ? ++article.count : 1;
    await this.ctx.service.article.updateById(article._id, { count });
    await this.ctx.render('showArticle.ejs', { article, rank, user: this.ctx.cookies.get('user') });
  }

}

module.exports = ArticleController;
