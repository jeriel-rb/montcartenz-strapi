export default ({ env }) => {
    const config: any = {
        'users-permissions': {
            config: {
                jwtSecret: env('JWT_SECRET'),
            },
        },
    };

    // Only configure upload in production (development uses config/env/development/plugins.ts)
    // In development, if AWS_BUCKET is not set, it will use local storage
    const isDevelopment = env('NODE_ENV') !== 'production';
    
    if (!isDevelopment) {
        // Production: Always use S3
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

    return config;
};
