export interface Testimonial {
  quote: string;
  name: string;
  course: string;
  university: string;
  country: string;
  from: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I was applying from Lagos and terrified of paying a deposit for a room I'd never seen. My advisor sent a video walking through the whole flat, then got on a call so I could ask about the neighbourhood. I signed knowing exactly what I was getting.",
    name: 'Chidera O.',
    course: 'MSc Data Science',
    university: 'University of Manchester',
    country: 'United Kingdom',
    from: 'from Nigeria',
  },
  {
    quote:
      'Every other site quoted me one price and then added fees at checkout. Stay Veno gave me the all-in weekly cost up front and it never changed. The room was exactly like the tour.',
    name: 'Ananya R.',
    course: 'BSc Computer Science',
    university: 'Trinity College Dublin',
    country: 'Ireland',
    from: 'from India',
  },
  {
    quote:
      "They found me a studio 9 minutes from campus in Berlin and explained the Anmeldung and deposit process step by step. As a first-time renter abroad that hand-holding was everything.",
    name: 'Mateus S.',
    course: 'MA International Relations',
    university: 'Freie Universität Berlin',
    country: 'Germany',
    from: 'from Brazil',
  },
  {
    quote:
      'Arrived in Toronto at 11pm with the keys already sorted. I messaged the WhatsApp line twice from the airport and someone answered both times. Genuinely stress-free.',
    name: 'Wei L.',
    course: 'MEng Electrical Engineering',
    university: 'University of Toronto',
    country: 'Canada',
    from: 'from China',
  },
  {
    quote:
      "I nearly wired money to a 'landlord' on Facebook Marketplace before a friend sent me here. Stay Veno only lists places they've verified with a real contract. Dread to think what would have happened otherwise.",
    name: 'Fatima A.',
    course: 'LLM Human Rights Law',
    university: 'University College London',
    country: 'United Kingdom',
    from: 'from Pakistan',
  },
  {
    quote:
      'The shortlist was four options and all four were places I would actually have lived in. No time wasted. Booked the second one after a live video viewing.',
    name: 'Sofia G.',
    course: 'MSc Renewable Energy',
    university: 'University College Cork',
    country: 'Ireland',
    from: 'from Mexico',
  },
];
