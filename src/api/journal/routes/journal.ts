/**
 * journal router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::journal.journal',{
    config:{
        find:{
            "middlewares": ["api::journal.journal-populate"]
        },
        findOne: {
            middlewares: ['api::journal.journal-populate'],
        },
    }
});
