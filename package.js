Package.describe({
    summary: "Meteor smart package for quran."
});

Npm.depends({
    "quran": "0.0.3"
});

Package.on_use(function (api) {
    api.add_files('quran.js', 'server');
    api.add_files('quran.js', 'client');
});