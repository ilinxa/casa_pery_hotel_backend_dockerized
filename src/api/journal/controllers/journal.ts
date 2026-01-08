/**
 * journal controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::journal.journal');

import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::journal.journal', ({ strapi }) => ({
//   async findBySlug(ctx) {
//     const { slug } = ctx.params;
//     // Use the Query Engine API to find the first entry matching the slug
//     const entry = await strapi.db.query('api::journal.journal').findOne({
//       where: { slug },
//       populate: ctx.query.populate,
//     });

//     if (!entry) {
//       return ctx.notFound();
//     }
//     ctx.body = entry;
//   },
// }));
export default factories.createCoreController('api::journal.journal', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    // Pass ctx.query.populate to ensure population works
    const entry = await strapi.db.query('api::journal.journal').findOne({
      where: { slug },
      populate: ctx.query.populate, // <-- this line is essential
    });

    if (!entry) {
      return ctx.notFound();
    }
    ctx.body = entry;
  },
}));