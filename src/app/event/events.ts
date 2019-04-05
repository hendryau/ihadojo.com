export interface IhaEvent {
  title?: string;
  date: string;
  location?: string;
  endDate?: string;
  imageUrl?: string;
  content?: string;
  url?: string;
}

export const LAST_UPDATED = "3/06/2019";

export const EVENTS: IhaEvent[] = [
  {
    title: "Sensei Iha Okinawa Visit",
    date: "12/27/2018",
    endDate: "02/14/2019",
    location: "none"
  },
  {
    title: "Midwest Pre-Test",
    date: "03/09/2019",
  },
  {
    title: "Midwest Pre-Test (voting)",
    date: "04/06/2019",
    location: "Hombu Dojo",
  },
  {
    title: "Okinawa Kenjin Kai Spring Party",
    date: "5/04/2019",
    location: "Charlotte VFW Hall"
  },
  {
    title: "Dan Test",
    date: "05/18/2019",
  },
  {
    title: "Midwest Pre-Test",
    date: "08/03/2019",
  },
  {
    title: "Midwest Pre-Test (voting)",
    date: "09/14/2019",
  },
  {
    title: "Dan Test",
    date: "10/19/2019",
  },
  {
    title: "Okinawa Trip",
    date: "8/21/2019",
    location: "Naha, Okinawa",
    endDate: "8/30/2019",
    url: "http://ihatookachi2019.com",
    imageUrl: "assets/events/tookachi_event.jpg",
    content: `
      Sensei Iha's Tookachi (88th birthday) celebration.
    `,
  },
  {
    title: "East Coast Seminar",
    location: "Maywood Karate, 49 West Pleasant Ave, Maywood NJ",
    date: "4/12/2019",
    endDate: "4/13/2019",
    content: `Hosted by Maywood Dojo, celebrating their 30th Anniversary.`,
    url: "http://maywoodkarate.com",
  },
  {
    title: "Canada Seminar",
    location: "Grand River Karate, 53 Allen St. E., Waterloo, ON, Canada",
    date: "5/31/2019",
    endDate: "6/1/2019",
    content: `Hosted by Grand River Dojo, celebrating their 25th Anniversary
      and 15 years with Beikoku Shidokan.`,
  },
];
