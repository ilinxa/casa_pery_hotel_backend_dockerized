/**
 * `journal-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';


const populate = {

  bgImage: { fields: ['alternativeText', 'url'] },
  // bottomCard:{
  //   populate:{
  //     image:{fields: ['alternativeText', 'url'] },
  //     fileDownloader:{
  //       populate:{
  //         file:{fields: ['alternativeText', 'url']}
  //       }
  //     },
  //     // cta:true
  //   }
  // },
  // cta:true,
  journals:{
    populate:{
      journal_tags : { fields: ['title'] },
      image:{ fields: ['alternativeText', 'url'] },
    },
    fields:['title','ShortContent','slug','category', 'featured','readTime', 'creator', 'date' ]
  }
 
}


export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    strapi.log.info('In journal-page-populate middleware.');

    // ✅ Always inject populate
    ctx.query.populate = populate;

    // ✅ If frontend didn't pass locale, fallback to default ("en")
    if (!ctx.query.locale) {
      ctx.query.locale = 'en';
    }

    await next();
  };
};
