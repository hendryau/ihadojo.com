export interface IhaEvent {
  title?: string;
  date: string;
  location?: string;
  endDate?: string;
  imageUrl?: string;
  content?: string;
  url?: string;
}

export const LAST_UPDATED = "1/20/2019";

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
    url: "http://ihatookhachi2019.com",
    imageUrl: "assets/events/shuri-castle.jpg",
    content: `
      Sensei Iha's Tookhachi (88th birthday) celebration.
      Visit <a href="http://ihatookhachi2019.com">ihatookhachi2019.com</a> for more info.
    `
  },
];
