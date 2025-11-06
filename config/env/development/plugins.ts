export default ({ env }) => {
    const config: any = {
        'users-permissions': {
            config: {
                jwtSecret: env('JWT_SECRET'),
            },
        },
    };

    // Development: Always use local storage (public/uploads/)
    // No upload config = Strapi uses local storage by default

    return config;
};

