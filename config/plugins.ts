export default ({ env }) => {
    const config: any = {
        'users-permissions': {
            config: {
                jwtSecret: env('JWT_SECRET'),
            },
        },
    };

    // Use AWS S3 if bucket name is provided, otherwise use local storage
    if (env('AWS_BUCKET')) {
        config.upload = {
            config: {
                provider: 'aws-s3',
                providerOptions: {
                    baseUrl: env('AWS_CDN_URL'),
                    s3Options: {
                      credentials: {
                        accessKeyId: env('AWS_ACCESS_KEY_ID', ''),
                        secretAccessKey: env('AWS_ACCESS_SECRET', ''),
                      },
                      params: {
                        ACL: env('AWS_ACL', 'public-read'),
                        Bucket: env('AWS_BUCKET'),
                      },
                    },
                  },
                actionOptions: {
                    upload: {},
                    uploadStream: {},
                    delete: {},
                },
            },
        };
    }
    // If no AWS_S3_BUCKET, Strapi will use local storage by default

    return config;
};
