/*
var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  }, 
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  }, 
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  },
  {
	title: 'Das Kapital',
	url: 'http://karlmarx.de'
  }, 
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  }, 
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  },
  {
	title: 'Das Kapital',
	url: 'http://karlmarx.de'
  }
];
Template.postsList.helpers({
  posts: postsData
});
*/

// server/fixture.js
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});