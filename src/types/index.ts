export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  year: number;
  time?: string;
  venue: string;
  category: 'Workshops' | 'Campaigns' | 'Awareness' | 'Competitions' | 'Other';
  shortDescription: string;
  fullDescription?: string;
  image: string;
  isFeatured?: boolean;
  registrationLink?: string;
  isUpcoming?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Events' | 'Campaigns' | 'Workshops' | 'Campus' | 'Activities';
  date: string;
  image: string;
  alt: string;
  description?: string;
}

export interface OfficeBearer {
  id: string;
  name: string;
  position: string;
  department: string;
  year: string;
  image: string;
  linkedin?: string;
  email?: string;
  order: number;
}

export interface FacultyCoordinator {
  id: string;
  name: string;
  role: string;
  department: string;
  designation: string;
  image: string;
  email?: string;
  linkedin?: string;
}

export interface PolicyPillar {
  id: string;
  title: string;
  iconName: string;
  shortSummary: string;
  description: string;
  objectives: string[];
  actionItems: string[];
}
