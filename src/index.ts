// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
  
  /**
   * Log a simple deployment banner so Railway logs show a clear marker.
   */
  async bootstrap() {
    const commit = process.env.RAILWAY_GIT_COMMIT_SHA || process.env.COMMIT_SHA || "unknown";
    const branch = process.env.RAILWAY_GIT_BRANCH || process.env.BRANCH || "unknown";
    const repo = process.env.RAILWAY_GIT_REPO || process.env.REPOSITORY || "unknown";
    const env = process.env.NODE_ENV || "development";

    // One concise line for easy grepping in Railway logs
    console.log(
      `[Boot] Strapi starting | env=${env} | repo=${repo} | branch=${branch} | commit=${commit.substring(0, 7)}`
    );
  },
};
