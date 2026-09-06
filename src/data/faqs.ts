export interface Faq {
  q: string;
  a: string;
}

export interface FaqCategory {
  title: string;
  items: Faq[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: 'Cost & how Stay Veno makes money',
    items: [
      {
        q: 'Is Stay Veno really free for students?',
        a: 'Yes. Students never pay Stay Veno a fee — not for the search, the shortlist, the viewings or the booking support. We are paid a commission by the accommodation provider when you move in, the same way a hotel booking site is paid by the hotel.',
      },
      {
        q: 'If providers pay you, are you really on my side?',
        a: 'We only earn anything if you move in and stay, so recommending a place that is wrong for you works against us. We show you options from many providers, tell you the downsides of each, and never charge you to walk away. If a provider ever pressures us to push their rooms, we drop them.',
      },
      {
        q: 'Will the price change between the listing and the contract?',
        a: 'No. The weekly price on every listing is the all-in figure, and we confirm exactly what it includes (bills, contents insurance, gym, etc.) in your shortlist. If a provider quotes us something different at contract stage, we go back to them — you pay what you were shown.',
      },
      {
        q: 'Do I pay a deposit, and how much?',
        a: 'Most providers ask for a holding deposit (often one to two weeks of rent) to take the room off the market, which counts towards your first payment. The security deposit, where there is one, is set by the provider and protected under local rules. We tell you the exact figures before you commit.',
      },
    ],
  },
  {
    title: 'Viewings & video tours',
    items: [
      {
        q: 'What does "see before you book" actually mean?',
        a: 'Every listing has a video tour you can watch straight away. On top of that you can request a live video-call walkthrough with someone standing in the actual room, or — if you are already in the city — an in-person viewing. You are never asked to commit money to a place you have only seen in still photos.',
      },
      {
        q: 'Are the video tours of the actual room or a show flat?',
        a: 'We ask providers for a tour of the specific room type you would get in that building, and we label it clearly when a tour shows a representative unit rather than the exact room. If only a show flat exists, we arrange a live walkthrough of your real room before you sign.',
      },
      {
        q: 'Can my parents join the viewing?',
        a: 'Absolutely, and many do. Send us everyone who should be on the call and we will schedule around timezones.',
      },
    ],
  },
  {
    title: 'Booking, contracts & guarantors',
    items: [
      {
        q: 'How long does booking take?',
        a: 'From first message to signed contract is usually two to four days, faster if you already know the city. Popular buildings for September fill from spring, so earlier is better.',
      },
      {
        q: 'I do not have a UK/EU/Canadian guarantor. Can I still book?',
        a: 'Yes. Many partner providers accept international students without a local guarantor, sometimes with a larger upfront payment or a paid guarantor service. We filter for what works for your situation and explain the cost either way.',
      },
      {
        q: 'What if my visa is refused or my course offer falls through?',
        a: 'Several providers offer a visa-refusal or no-place cancellation clause with a full or partial refund of the deposit, against evidence. We prioritise those for students still awaiting a decision and confirm the exact terms in writing before you pay.',
      },
      {
        q: 'Who signs the contract — me or Stay Veno?',
        a: 'You sign directly with the accommodation provider. Stay Veno is not a party to your tenancy; we prepare and explain the paperwork and stay available if anything goes wrong.',
      },
    ],
  },
  {
    title: 'Arrival & living there',
    items: [
      {
        q: 'Can you help before I have my university confirmation?',
        a: 'Yes. Tell us the universities you have applied to and your likely start date and we will start the search. We hold off on anything non-refundable until you know where you are going.',
      },
      {
        q: 'What if something is wrong when I arrive?',
        a: 'Message the WhatsApp line. If the room is not as shown or something promised is missing, we take it up with the provider on your behalf and push for a fix or a move.',
      },
      {
        q: 'Do you cover homestays or private landlords?',
        a: 'We focus on purpose-built student accommodation and verified professional landlords, because those are the ones we can hold accountable. We do not list informal room shares or private ads we cannot verify.',
      },
    ],
  },
  {
    title: 'About Stay Veno',
    items: [
      {
        q: 'Which countries and cities do you cover?',
        a: 'The UK, Germany, Ireland and Canada, across 15+ cities including London, Manchester, Birmingham, Coventry, Glasgow, Berlin, Munich, Frankfurt, Hamburg, Dublin, Cork, Galway, Limerick, Toronto, Vancouver, Montreal and Ottawa. We add cities as verified supply grows.',
      },
      {
        q: 'How do you verify a listing?',
        a: 'We check the provider is a registered business with a real address, confirm the specific room is available for your dates, review the tenancy terms, and require current photos plus a video tour. Only then does it go on the site.',
      },
      {
        q: 'How do I get started?',
        a: 'Use the search bar on any page, or open the chat / WhatsApp button and tell us your university and move-in date. An advisor replies within about two hours.',
      },
    ],
  },
];

/** Flat list for FAQPage schema and the homepage teaser. */
export const ALL_FAQS: Faq[] = FAQ_CATEGORIES.flatMap((c) => c.items);

export const HOME_FAQS: Faq[] = [
  ALL_FAQS[0], // free for students
  ALL_FAQS[2], // price won't change
  ALL_FAQS[4], // see before you book
  ALL_FAQS[8], // no guarantor
  ALL_FAQS[9], // visa refusal
];
