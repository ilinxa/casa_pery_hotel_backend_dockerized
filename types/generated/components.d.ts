import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_us_s';
  info: {
    displayName: 'About Us ';
  };
  attributes: {
    bottomTagline: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
    description_1: Schema.Attribute.Text;
    description_2: Schema.Attribute.Text;
    image_1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image_2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tagline: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksBottomCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_bottom_cards';
  info: {
    displayName: 'Bottom Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    fileDownloader: Schema.Attribute.Component<
      'shared.file-download-btn',
      false
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksEventCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_event_cards';
  info: {
    displayName: 'Event Card';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    bulletPoints: Schema.Attribute.Component<'shared.bulet-points', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Label'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksHeadline extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headlines';
  info: {
    displayName: 'Headline';
    icon: 'pencil';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'house';
  };
  attributes: {
    herocard: Schema.Attribute.Component<'layout.hero-image', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    heroImg: Schema.Attribute.Media<'images' | 'files'>;
    heroVid: Schema.Attribute.Media<'files' | 'videos'>;
    tagLine: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksJournalsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_journals_sections';
  info: {
    displayName: 'Journals section';
  };
  attributes: {
    journals: Schema.Attribute.Relation<'oneToMany', 'api::journal.journal'>;
    tagline: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksPreface extends Struct.ComponentSchema {
  collectionName: 'components_blocks_prefaces';
  info: {
    displayName: 'Preface';
  };
  attributes: {
    aboutus: Schema.Attribute.Component<'blocks.about-us', false>;
    bgImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    headline: Schema.Attribute.Component<'blocks.headline', false>;
  };
}

export interface BlocksRoom extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rooms';
  info: {
    displayName: 'Rooms';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
    room: Schema.Attribute.Component<'layout.room-info', true>;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    serviceCards: Schema.Attribute.Component<'shared.service-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTravelExperiences extends Struct.ComponentSchema {
  collectionName: 'components_blocks_travel_experiences';
  info: {
    displayName: 'Travel Experiences';
  };
  attributes: {
    notes: Schema.Attribute.Component<'shared.experience', true>;
    tagline: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface LayoutContactUs extends Struct.ComponentSchema {
  collectionName: 'components_layout_contactuses';
  info: {
    displayName: 'contactUs';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Address: Schema.Attribute.Component<'layout.contact-us', false>;
    email: Schema.Attribute.Component<'layout.contact-us', false>;
    file: Schema.Attribute.Component<'shared.file-download-btn', false>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    license: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    note: Schema.Attribute.Text;
    phoneNumber: Schema.Attribute.Component<'layout.contact-us', false>;
    socialLinks: Schema.Attribute.Component<'shared.social-link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.nav-link', true>;
  };
}

export interface LayoutHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_images';
  info: {
    displayName: 'hero Image';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface LayoutRoomInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_room_infos';
  info: {
    displayName: 'roomInfo';
  };
  attributes: {
    available: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.features', true>;
    image: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    img360: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    occupancy: Schema.Attribute.String;
    price: Schema.Attribute.String;
    priceUnit: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
    size: Schema.Attribute.String;
    suit: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedBuletPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_bulet_points';
  info: {
    displayName: 'buletPoint';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedExperience extends Struct.ComponentSchema {
  collectionName: 'components_shared_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String;
    note: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SharedFileDownloadBtn extends Struct.ComponentSchema {
  collectionName: 'components_shared_file_download_btns';
  info: {
    displayName: 'fileDownloadBtn';
  };
  attributes: {
    externalFile: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    fileUrl: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    btnType: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isWhatsApp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'link Label'>;
    whatsApp_number: Schema.Attribute.String;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 25;
      }>;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'navLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    isPage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    pageLink: Schema.Attribute.String;
  };
}

export interface SharedRoomFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_room_features';
  info: {
    displayName: 'roomFeature';
  };
  attributes: {
    feature: Schema.Attribute.Enumeration<
      [
        'King Bed',
        'Ocean View',
        'Private Balcony',
        'Rainfall Shower',
        'Private Pool',
        'Garden View',
        'Outdoor Shower',
        'Living Area',
        'Infinity Pool',
        'Butler Service',
        'Full Kitchen',
        'Beach Access',
        'Spa Bath',
        'Private Deck',
        'Fireplace',
        'Mountain View',
      ]
    >;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'socialLink';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    tagName: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 18;
      }>;
  };
}

export interface SharedTextCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_cards';
  info: {
    displayName: 'textCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-us': BlocksAboutUs;
      'blocks.bottom-card': BlocksBottomCard;
      'blocks.event-card': BlocksEventCard;
      'blocks.headline': BlocksHeadline;
      'blocks.hero': BlocksHero;
      'blocks.journals-section': BlocksJournalsSection;
      'blocks.preface': BlocksPreface;
      'blocks.room': BlocksRoom;
      'blocks.services': BlocksServices;
      'blocks.travel-experiences': BlocksTravelExperiences;
      'layout.contact-us': LayoutContactUs;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-image': LayoutHeroImage;
      'layout.room-info': LayoutRoomInfo;
      'shared.bulet-points': SharedBuletPoints;
      'shared.experience': SharedExperience;
      'shared.features': SharedFeatures;
      'shared.file-download-btn': SharedFileDownloadBtn;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.nav-link': SharedNavLink;
      'shared.room-feature': SharedRoomFeature;
      'shared.service-card': SharedServiceCard;
      'shared.social-link': SharedSocialLink;
      'shared.tag': SharedTag;
      'shared.text-card': SharedTextCard;
    }
  }
}
