'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/write', controller.home.writeBlog);
  router.post('/commitArticle', controller.article.save);
  router.post('/findArticlePage', controller.article.findByPage);
  router.get('/showArticle', controller.article.showAritcle);
  router.get('/loginPage', controller.home.loginPage);
  router.post('/login', controller.home.login);
  router.get('/aboutMe', controller.home.aboutMe);
};
