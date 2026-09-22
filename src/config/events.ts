import type { EECEvent } from '../types/events';

export const eecEvents: EECEvent[] = [
  {
    id: 'environmental-cleanliness-drive-2026',
    title: 'ENVIRONMENTAL CLEANLINESS DRIVE',
    organizer: 'Kongu Engineering College & EEC Club',
    location: 'Sathyamangalam Forest',
    date: '25 September 2026',
    time: '9:00 AM – 4:00 PM',
    status: 'UPCOMING',
    sloganTamil: 'காட்டை காப்போம்... பசுமையை வளர்ப்போம்!',
    sloganEnglish: 'Clean Forests, Healthy Future',
    sdgGoals: [
      '3. Good Health & Well-being',
      '6. Clean Water & Sanitation',
      '11. Sustainable Cities & Communities',
      '13. Climate Action',
      '15. Life on Land',
    ],
    image: '/images/events/environmental-cleanliness-drive.jpg',
    isFeatured: true,
  },
  {
    id: 'pitch-for-planet-2k26',
    title: 'PITCH FOR PLANET 2K26',
    organizer: 'Kongu Engineering College & EEC Club',
    location: 'Chanakya Seminar Hall, Dept. of Chemical Engineering',
    date: '08 August 2026',
    time: '09:00 AM – 12:30 PM',
    status: 'COMPLETED',
    tagline: 'Innovate Today. Sustain Tomorrow.',
    description:
      'Present your innovative ideas to solve real-world environmental challenges. Join fellow innovators, inspire sustainable solutions, and turn your vision into meaningful impact.',
    eligibility: '2nd and 3rd Years',
    problemStatements: [
      'Food Waste',
      'Plastic Pollution',
      'Agricultural Waste',
      'Fossil Fuel Dependence',
    ],
    sdgGoals: [
      '3. Good Health',
      '6. Clean Water',
      '7. Clean Energy',
      '11. Sustainable Cities',
      '12. Responsible Consumption',
      '13. Climate Action',
      '15. Life on Land',
    ],
    image: '/images/events/pitch-for-planet-2k26.jpg',
  },
];
