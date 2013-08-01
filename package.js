Package.describe({
  summary: "Greenlight feeds site template"
});

Package.on_use(function (api, where) {
    api.use('router', ['client', 'server']);
    api.use(['templating'], 'client');
    
    api.add_files(['client/create_feed.html', 'client/create_feed.js', 'client/create_feed.css'], 'client');
    api.add_files(['client/existing_feeds.html', 'client/existing_feeds.js', 'client/existing_feeds.css'], 'client');

    api.add_files('client/feeds.js', 'client');
    api.add_files('server/feeds.js', 'server');
});

Package.on_test(function (api) {
    api.add_files('feeds_tests.js', 'client');
});
