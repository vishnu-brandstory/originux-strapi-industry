import type { Schema, Struct } from '@strapi/strapi';

export interface SectionAdvantageItem extends Struct.ComponentSchema {
  collectionName: 'components_section_advantage_items';
  info: {
    displayName: 'advantage_item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionCoreServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_section_core_service_items';
  info: {
    displayName: 'core-service-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionCoreServiceItemsNew extends Struct.ComponentSchema {
  collectionName: 'components_section_core_service_items_news';
  info: {
    displayName: 'core_service_items_new';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionEmpowerItem extends Struct.ComponentSchema {
  collectionName: 'components_section_empower_items';
  info: {
    displayName: 'empower-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionExperienceStudioItem extends Struct.ComponentSchema {
  collectionName: 'components_section_experience_studio_items';
  info: {
    displayName: 'experience_studio_item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_section_faq_items';
  info: {
    displayName: 'faq_item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    open_by_default: Schema.Attribute.Boolean;
    question: Schema.Attribute.String;
  };
}

export interface SectionJourneyItems extends Struct.ComponentSchema {
  collectionName: 'components_section_journey_items';
  info: {
    displayName: 'journey_items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionSolutionDetails extends Struct.ComponentSchema {
  collectionName: 'components_section_solution_details';
  info: {
    displayName: 'solution_details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    num_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSolutionDetailsNew extends Struct.ComponentSchema {
  collectionName: 'components_section_solution_details_news';
  info: {
    displayName: 'solution_details_new';
  };
  attributes: {};
}

export interface SectionSolutionDetailsTest extends Struct.ComponentSchema {
  collectionName: 'components_section_solution_details_test_s';
  info: {
    displayName: 'solution_details_test ';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    num_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionToolkitItems extends Struct.ComponentSchema {
  collectionName: 'components_section_toolkit_items';
  info: {
    displayName: 'toolkit_items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    toolkit_icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.advantage-item': SectionAdvantageItem;
      'section.core-service-item': SectionCoreServiceItem;
      'section.core-service-items-new': SectionCoreServiceItemsNew;
      'section.empower-item': SectionEmpowerItem;
      'section.experience-studio-item': SectionExperienceStudioItem;
      'section.faq-item': SectionFaqItem;
      'section.journey-items': SectionJourneyItems;
      'section.solution-details': SectionSolutionDetails;
      'section.solution-details-new': SectionSolutionDetailsNew;
      'section.solution-details-test': SectionSolutionDetailsTest;
      'section.toolkit-items': SectionToolkitItems;
    }
  }
}
