export interface Step {
  n: number;
  title: string;
  short: string;
  detail: string;
  points: string[];
  icon: string;
}

export const STEPS: Step[] = [
  {
    n: 1,
    title: 'Search',
    short: 'Tell us your university and move-in date.',
    detail:
      'Use the search bar or send us a message. Give us your city or university, your budget per week, and roughly when you need to move in. There is nothing to pay and no account to create.',
    points: [
      'Search by city, university or country',
      'Filter by price, room type and distance to campus',
      'Or just message an advisor and skip the browsing',
    ],
    icon: 'search',
  },
  {
    n: 2,
    title: 'Shortlist',
    short: 'We send you 3–5 verified options that fit.',
    detail:
      'An advisor checks availability, confirms the real price including bills, and sends you a short list of places that actually match what you asked for — not 60 tabs to sift through.',
    points: [
      'Every option is a verified listing with a real provider contract',
      'Prices shown are all-in — no agency fee sprung on you later',
      'We flag the trade-offs honestly (noise, distance, older building)',
    ],
    icon: 'list',
  },
  {
    n: 3,
    title: 'See it before you book',
    short: 'Virtual tour, video walkthrough or in-person viewing.',
    detail:
      'Before you commit a penny you see the actual room — a 360° virtual tour, a video walkthrough filmed by our team or the provider, or an in-person viewing if you are already in the city. No booking blind.',
    points: [
      'Video tour on every single listing',
      'Live video call walkthroughs on request',
      'In-person viewings arranged where possible',
    ],
    icon: 'video',
  },
  {
    n: 4,
    title: 'Book & move in',
    short: 'We handle the contract, deposit and move-in.',
    detail:
      'We send the provider paperwork, explain every clause in plain language, help with the deposit and guarantor questions, and stay on WhatsApp through move-in day and beyond.',
    points: [
      'Contract explained clause by clause before you sign',
      'Guarantor and deposit guidance for international students',
      'A real person on WhatsApp through arrival and after',
    ],
    icon: 'key',
  },
];
