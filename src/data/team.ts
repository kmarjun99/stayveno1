export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  seed: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Priya Nadar',
    role: 'Co-founder & CEO',
    bio: "Moved from Chennai to Leeds for her master's, spent her first three weeks in a hostel because a rental fell through on arrival. Started Stay Veno so no one else has to.",
    seed: 'priya-nadar',
  },
  {
    name: 'Tom Becker',
    role: 'Co-founder & Head of Housing',
    bio: 'Ran student lettings in Berlin and Munich for eight years. Personally vets new provider partners and wrote our verification checklist.',
    seed: 'tom-becker',
  },
  {
    name: 'Aoife Kelly',
    role: 'Head of Student Support',
    bio: 'Leads the advisor team across timezones. Has talked more anxious parents through a tenancy agreement than she can count.',
    seed: 'aoife-kelly',
  },
  {
    name: 'Daniel Osei',
    role: 'Head of Partnerships',
    bio: 'Works with universities and accredited providers in the UK, Ireland, Germany and Canada to keep verified rooms coming in before each intake.',
    seed: 'daniel-osei',
  },
];

export const VALUES = [
  {
    title: 'No blind bookings, ever',
    body: 'You see the actual room — virtual tour, video walkthrough or in-person viewing — before you are asked to commit anything.',
    icon: 'video',
  },
  {
    title: 'One honest price',
    body: 'The weekly figure you see includes what it says it includes. We never bolt on an agency fee at the contract stage.',
    icon: 'tag',
  },
  {
    title: 'Verified or it is not listed',
    body: 'Every property is checked by our team against a real provider contract before it reaches you. No Marketplace mystery landlords.',
    icon: 'shield',
  },
  {
    title: 'A person, not a portal',
    body: 'Real advisors on WhatsApp, email and call — through your search, your move-in day and the messy stuff after.',
    icon: 'chat',
  },
];
