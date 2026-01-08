/**
 * global router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::global.global',{
    // define what endpoints we want to our middleware to fire
    config:{
        find:{
            middlewares:["api::global.global-populate"]
        }
    }
});
