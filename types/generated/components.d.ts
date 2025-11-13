import type { Schema, Struct } from '@strapi/strapi';

export interface ReviewReview extends Struct.ComponentSchema {
  collectionName: 'components_review_reviews';
  info: {
    description: '';
    displayName: 'Review';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files'>;
    date: Schema.Attribute.Date;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    review: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'review.review': ReviewReview;
    }
  }
}
