export interface Worry {
  fear: string;
  answer: string;
  icon: string;
}

export const WORRIES: Worry[] = [
  {
    fear: '“What if it’s a scam and I lose my deposit?”',
    answer:
      'Every listing is a verified provider with a registered business, a real address and a contract we’ve reviewed. You pay the provider directly under local deposit-protection rules — never a stranger’s bank account.',
    icon: 'shield',
  },
  {
    fear: '“What if there are hidden fees at the end?”',
    answer:
      'The weekly price is all-in and we spell out exactly what it covers before you commit. No agency fee appears at contract stage. What you’re shown is what you pay.',
    icon: 'tag',
  },
  {
    fear: '“What if it looks nothing like the photos?”',
    answer:
      'You get a video walkthrough on every listing, plus the option of a live video viewing of your actual room. If you arrive and it’s not as shown, we take it up with the provider for you.',
    icon: 'video',
  },
  {
    fear: '“What if I end up an hour from campus?”',
    answer:
      'Filter by walking minutes to your university, and every shortlist states the real commute. We’d rather tell you a place is a 25-minute bus ride than let you find out on day one.',
    icon: 'map',
  },
  {
    fear: '“What if my visa is refused after I’ve paid?”',
    answer:
      'We prioritise providers with a visa-refusal cancellation clause for students still awaiting a decision, and confirm the refund terms in writing before you pay anything.',
    icon: 'passport',
  },
  {
    fear: '“What if something goes wrong and no one answers?”',
    answer:
      'A real advisor is on WhatsApp, email and call around the clock, whatever your timezone — through your search, your move-in day and the awkward stuff after.',
    icon: 'chat',
  },
];
