'use strict';
const Service = require('egg').Service;
const moment = require('moment');
class ArticleService extends Service {

  // 保存
  async saveArticle(entity) {
    const timeAt = moment().format('YYYY-MM-DD HH:mm:ss');
    entity.createTime = timeAt;
    entity.auther = '无力吐槽的银酱';
    const article = new this.ctx.model.Article(entity);
    await article.save();
    return article;
  }
  // 分页查询
  async findByPage(query, page, pagesize) {
    const articleList = await this.ctx.model.Article.find(query).skip(page * pagesize).limit(parseInt(pagesize))
      .sort({ _id: 1 });
    return articleList;
  }
  async findById(id) {
    const article = await this.ctx.model.Article.findById(id);
    return article;
  }

}
module.exports = ArticleService;
