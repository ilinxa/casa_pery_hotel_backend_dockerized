/**
 * journal-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::journal-page.journal-page',{
        config:{
        find:{
            middlewares:["api::journal-page.journal-page-populate"]
        }
    }
});
//   