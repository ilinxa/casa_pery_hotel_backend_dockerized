/**
 * `journal-populate` middleware
 */

import type { Core } from '@strapi/strapi';
// import journal from '../controllers/journal';

const populate = {
  image: { fields: ['url', 'alternativeText'] },
  journal_tags:{fields:['id','title','description']}
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    strapi.log.info('In journal-populate middleware.');

    // ✅ Always inject populate config
    ctx.query.populate = populate;

    // ✅ Respect locale from frontend, fallback to "en"
    if (!ctx.query.locale) {
      ctx.query.locale = 'en';
    }

    // (Optional) enforce allowed locales
    const allowedLocales = ['en', 'tr'];
    if (ctx.query.locale && !allowedLocales.includes(ctx.query.locale)) {
      strapi.log.warn(`Invalid locale requested: ${ctx.query.locale}, falling back to "en"`);
      ctx.query.locale = 'en';
    }

    await next();
  };
};
