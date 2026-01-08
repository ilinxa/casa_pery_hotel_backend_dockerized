// /**
//  * `landing-page-populate` middleware
//  */

// import type { Core } from '@strapi/strapi';
// const populate = {
//     blocks: {
//       on: {
//         'blocks.hero': {
//           populate: {
//             heroImg: { fields: [ 'alternativeText', 'url' ] },
//             herocard: {
//               populate: { image: { fields: [ 'alternativeText', 'url\n' ] } }
//             }
//           }
//         }
//       }
//     }
//   }

// export default (config, { strapi }: { strapi: Core.Strapi }) => {
//   // Add your own logic here.
//   return async (ctx, next) => {
//     console.dir(ctx.query, {depth:null})
//     strapi.log.info('In landing-page-populate middleware.');
//     ctx.query.populate = populate
//     await next();
//   };
// };

import type { Core } from '@strapi/strapi';

const populate = {

  blocks: {
    on: {
      'blocks.hero': {
        populate: { 
          heroImg: { fields: ['alternativeText', 'url'] },
          heroVid: { fields: ['alternativeText', 'url'] },
          herocard: {
            populate: { image: { fields: ['alternativeText', 'url'] } }
          }
        }
      },
      // 'blocks.headline':{
      //   populate:{
      //     background_image:{fields: ['alternativeText', 'url']}
      //   }
      // },
      // 'blocks.about-us':{
      //   populate:{
      //     image_1:{fields: ['alternativeText', 'url']},
      //     image_2:{fields: ['alternativeText', 'url']},
      //     cta:true,
      //   }
      // },
      'blocks.preface':{
        populate:{
          headline:true,
          aboutus:{
            populate:{

              image_1:{fields: ['alternativeText', 'url']},
              image_2:{fields: ['alternativeText', 'url']},
              cta:true,
            }
          },
          bgImage:{fields: ['alternativeText', 'url']}

        }
      },
      'blocks.room': {
        populate:{
          room:{
            populate:{
              image:{fields:['alternativeText', 'url']},
              img360:{fields:['alternativeText', 'url']},
              features:true
            }
          },
          cta:true,
        }
      },
      "blocks.services":{
        populate:{
          serviceCards:{
            populate:{
              icon:{fields:['alternativeText', 'url']}
            }
          }
        }
      },
      "blocks.event-card":{
        populate:{
          image:{fields:['alternativeText', 'url']},
          bgImage:{fields:['alternativeText', 'url']},
          bulletPoints:true,
          cta:true
        }
      },
      "blocks.travel-experiences":{
        populate:{
          notes:{
            populate:{
              image:{fields:['alternativeText', 'url']}
            }
          }
        }
      },

      "blocks.journals-section":{
        populate:{
          journals:{
            populate:{
            image:{fields:["url"]},
            journal_tags:true,
            }
            
          }
        }
      }

    }
  }
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');

    // ✅ Always inject populate
    ctx.query.populate = populate;

    // ✅ If frontend didn't pass locale, fallback to default ("en")
    if (!ctx.query.locale) {
      ctx.query.locale = 'en';
    }

    await next();
  };
};
