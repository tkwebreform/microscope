if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'webreform',
    url: 'http://webreform.de/'
  });

  Posts.insert({
    title: 'Wikipedia',
    url: 'http://wikipedia.de'
  });

  Posts.insert({
    title: 'A webdesign',
    url: 'http://awebdesign.de'
  });
}