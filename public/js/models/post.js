var app = app || {};
app.Post = Backbone.Model.extend({
  defaults: {
    link: '',
    isRead: false,
	isFavorite: false,
	savedFolder: ''
  }
});