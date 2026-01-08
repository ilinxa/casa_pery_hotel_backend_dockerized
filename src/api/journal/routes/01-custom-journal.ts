module.exports = {
  routes: [
    {
        method: 'GET',
        path: '/journals/slug/:slug',
        handler: 'journal.findBySlug',
        config: {
            middlewares: ['api::journal.journal-populate'],
            auth: false,
        },
    },
  ],
};