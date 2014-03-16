Package.describe({
  summary: 'Makes Cheerio (https://github.com/MatthewMueller/cheerio) available in your meteor server.'
});

Npm.depends({ cheerio: '0.13.1'});

Package.on_use(function (api) {
  api.add_files('cheerio.js', 'server');
  api.export('Cheerio');
});
