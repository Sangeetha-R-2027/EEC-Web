export interface SiteConfig {
  brand: {
    name: string;
    shortName: string;
    college: string;
    tagline: string;
    logo: string;
    logoAlt: string;
  };
  hero: {
    videoSrc: string;
    posterSrc?: string;
    headline: string;
    subheadline: string;
    scrollIndicatorText: string;
  };
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isAvailable: boolean;
  statusText?: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  institution: string;
  description: string;
}
