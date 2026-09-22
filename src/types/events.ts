export type EventFilter = 'ALL' | 'UPCOMING' | 'COMPLETED';

export type EventStatus = 'UPCOMING' | 'COMPLETED';

export interface EECEvent {
  id: string;
  title: string;
  organizer: string;
  location: string;
  date: string;
  time: string;
  status: EventStatus;
  sloganTamil?: string;
  sloganEnglish?: string;
  tagline?: string;
  description?: string;
  eligibility?: string;
  problemStatements?: string[];
  sdgGoals: string[];
  image: string;
  isFeatured?: boolean;
}
