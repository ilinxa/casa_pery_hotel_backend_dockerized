// /**
//  * `global-populate` middleware
//  */


// import type { Core } from '@strapi/strapi';

// const populate = 
// {
//     header: {
//       populate: {
//         logo: {
//           populate: { Logo: { fields: [ 'alternativeText', 'url' ] } }
//         },
//         navItems: 'true',
//         cta: 'true'
//       }
//     }
//   }

// export default (config, { strapi }: { strapi: Core.Strapi }) => {
//   // Add your own logic here.
//   return async (ctx, next) => {
//     // console.dir(ctx.query, {depth:null})
//     ctx.query.populate = populate
//     strapi.log.info('In global-populate middleware.');

//     await next();
//   };
// };

import type { Core } from '@strapi/strapi';

const populate = {
  header: {
    populate: {
      logo: {
        populate: { logo: { fields: ['alternativeText', 'url'] } }
      },
      navItems: true, // can be boolean not string
      cta: true
    }
  },
  footer:{
    populate:{
      image:{fields: ['alternativeText', 'url']},
      file:{
        populate:{
          file:{fields: ['alternativeText', 'url']}
        }
      },
      logo:{ 
        populate:{
          logo:{fields: ['alternativeText', 'url']}
        }
      },
      Address:true,
      phoneNumber:true,
      email:true,
      socialLinks:{
        populate:{
          icon:{fields: ['alternativeText', 'url']}
        }
      }

    }
  }
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    
    strapi.log.info('In global-populate middleware.');

    // ✅ Always inject populate
    ctx.query.populate = populate;

    // ✅ Respect locale from frontend, fallback to "en"
    if (!ctx.query.locale) {
      ctx.query.locale = 'en';
    }

    // (Optional) enforce only supported locales
    const allowedLocales = ['en', 'tr'];
    if (ctx.query.locale && !allowedLocales.includes(ctx.query.locale)) {
      strapi.log.warn(`Invalid locale requested: ${ctx.query.locale}, falling back to "en"`);
      ctx.query.locale = 'en';
    }

    await next();
  };
};