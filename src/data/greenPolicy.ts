import type { PolicyPillar } from '../types';

export const greenPolicyData: PolicyPillar[] = [
  {
    id: 'energy-conservation',
    title: 'Energy Conservation',
    iconName: 'Zap',
    shortSummary: 'Optimizing electricity usage across classrooms, laboratories, and hostel premises through efficiency and smart monitoring.',
    description: 'The EEC Club advocates for systematic power management and renewable integration across Kongu Engineering College. Through student energy audits and habit formation campaigns, we aim to prevent power wastage.',
    objectives: [
      'Conduct regular departmental energy audits to identify idle equipment loads.',
      'Transition campus fixtures to high-efficiency LED and motion-sensor technology.',
      'Promote off-peak electrical usage in heavy testing facilities.'
    ],
    actionItems: [
      'Last-out switch-off protocol across all lecture halls and laboratories.',
      'Monitoring standby power draw on laboratory testing benches.',
      'Installing solar thermal water pre-heaters in hostel residential blocks.'
    ]
  },
  {
    id: 'water-conservation',
    title: 'Water Conservation',
    iconName: 'Droplet',
    shortSummary: 'Promoting responsible water usage, greywater recycling, and rainwater harvesting infrastructure maintenance.',
    description: 'Kongu Engineering College maintains advanced groundwater recharge wells. EEC supports campus water stewardship by monitoring distribution lines, reducing tap wastage, and promoting rainwater percolation pits.',
    objectives: [
      'Zero-tolerance policy for leaky fixtures and piping infrastructure.',
      'Maximize treated greywater utilization for botanical irrigation across campus.',
      'Maintain 100% functional rainwater collection catchments ahead of monsoons.'
    ],
    actionItems: [
      'Student water patrol squads for reporting dormitory leaks.',
      'Drip irrigation deployment for horticultural zones.',
      'Installing low-flow aerators on high-use washing facilities.'
    ]
  },
  {
    id: 'waste-management',
    title: 'Waste Management',
    iconName: 'Recycle',
    shortSummary: 'Strict source segregation, campus composting of bio-waste, and periodic electronic waste collection drives.',
    description: 'Sustainable waste management requires active participation. EEC coordinates three-bin source segregation systems and partners with certified e-waste recycling vendors for responsible disposal.',
    objectives: [
      'Implement standardized color-coded segregation bins in all academic blocks.',
      'Eliminate single-use plastic cups, cutlery, and banners during campus symposia.',
      'Convert 100% of organic mess waste into nutrient-rich vermicompost.'
    ],
    actionItems: [
      'Bi-monthly E-Waste Fortnight collection drives for outdated devices.',
      'Audit of food waste quantities in dining halls to optimize preparation.',
      'Paperless administrative notice boards and digital event registration.'
    ]
  },
  {
    id: 'green-campus',
    title: 'Green Campus & Biodiversity',
    iconName: 'Trees',
    shortSummary: 'Expanding native tree canopy, protecting natural ecosystems, and maintaining micro-forest zones.',
    description: 'KEC spans a lush green campus environment in Erode. EEC organizes native sapling drives and flora mapping exercises to protect local bird and plant biodiversity.',
    objectives: [
      'Increase native tree count by planting drought-resistant indigenous species.',
      'Establish botanical tagging and QR-code informational plaques on trees.',
      'Maintain dedicated quiet flora zones for bird and pollinator protection.'
    ],
    actionItems: [
      'Departmental sapling adoption program for first-year cohorts.',
      'Quarterly weeding, organic mulching, and soil health monitoring.',
      'Celebration of World Environment Day with wide sapling distribution.'
    ]
  },
  {
    id: 'sustainable-mobility',
    title: 'Sustainable Mobility',
    iconName: 'Bike',
    shortSummary: 'Encouraging pedestrian pathways, non-motorized transport, and shared electric mobility options.',
    description: 'Reducing carbon emissions from campus transit by prioritizing tree-shaded walkways, bicycle racks, and electric shuttle accessibility.',
    objectives: [
      'Promote pedestrian safety and bicycle commuting for internal movement.',
      'Establish EV charging bays powered by campus solar installations.',
      'Discourage idle motor vehicle engines near academic blocks.'
    ],
    actionItems: [
      'Designated non-motorized vehicle corridors across core campus zones.',
      'Bicycle sharing racks near main gates and student hostel blocks.',
      'Carpooling awareness boards for day-scholar bus routing.'
    ]
  },
  {
    id: 'resource-responsibility',
    title: 'Responsible Resource Use',
    iconName: 'ShieldCheck',
    shortSummary: 'Mindful consumption of paper, lab consumables, and campus infrastructure assets.',
    description: 'Promoting circular economy principles within the college ecosystem by extending hardware lifespans, re-using event materials, and digitizing documentation.',
    objectives: [
      'Prioritize double-sided printing and recycled paper stock.',
      'Upcycle event banners and wooden exhibition frameworks for future usage.',
      'Educate incoming students during orientation on eco-friendly living.'
    ],
    actionItems: [
      'Digital certificate issuance for all club workshops and competitions.',
      'Reuse of badge holders and lanyards across annual club events.',
      'Green pledge signatures during annual college orientation programs.'
    ]
  }
];
