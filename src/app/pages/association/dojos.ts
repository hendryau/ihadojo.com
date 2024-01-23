export interface IhaDojo {
  type: "hombu" | "shibu" | "fukushibu" | "junshibu";
  image?: string;
  instructors: {
    name: string,
    rank: string
  }[];
  name: string;
  address?: string;
  phone?: string;
  url?: string;
  http?: string;
  email?: string;
  email2?: string;
  location?: {
    lat: number,
    lng: number
  };
}

export const DOJOS: IhaDojo[] = [
  {
    type: "hombu",
    instructors: [{name: "Seikichi Iha", rank: "Hanshi, 10th Dan"}],
    // image: "assets/ihadojo.jpg",
    name : "Original Okinawa Karate",
    address: "2018 E. Michigan Ave. Lansing, MI 48912 USA",
    // phone: "(517) 482-3217",
    url: "ihadojo.com",
    http: "https://",
    email: "mail@ihadojo.com",
    location: {
      lat: 42.733363,
      lng: -84.521598
    }
  } ,
  {
    type: "shibu",
    instructors: [{name: "Robert Menders", rank: "9th Dan"}],
    name: "Original Okinawa Karate Shidokan Detroit",
    address: "4980 Pond Circle West, West Bloomfield, MI 48323 USA",
    phone: "(248) 225-7172",
    http: "https://",
    email: "robertmenders@sbcglobal.net",
    location: {
      lat: 42.513193,
      lng: -83.225522,
    }
  },
  {
    type: "shibu",
    instructors: [
      {name: "Mason Senak", rank: "7th Dan"},
      {name: "David Senak", rank: "9th Dan"},
      {name: "Michael Senak", rank: "9th Dan"}
    ],
    name: "Maywood Academy of Okinawan Karate",
    address: "47 W. Pleasant Ave PO Box 1161 Maywood, NJ 07607 USA",
    phone: "(201) 712-1416",
    http: "https://",
    url: "maywoodkarate.com",
    email: "maywoodkarate@aol.com",
    location: {
      lat: 40.904666,
      lng: -74.062449,
    }
  },
  {
    type: "shibu",
    instructors: [
      {name: "Lawrence Schwartz", rank: "9th Dan"},
      {name: "Lisa Schwartz", rank: "9th Dan"}
    ],
    name: "Shidokan Rockland",
    phone: "(201) 341-9682",
    email: "shidokanrockland@gmail.com",
  },
  {
    type: "shibu",
    instructors: [{name: "Roberto Curtis", rank: "9th Dan"}],
    name: "Virginia Okinawan Karate Dojo",
    address: "6416 Grovedale Dr., #302-B Alexandria, VA 22310",
    http: "https://",
    url: "www.robertoshidokan.com",
    email: "robertoshidokan@gmail.com",
    location: {
      lat: 38.7773926,
      lng: -77.298465
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Paul Snader", rank: "9th Dan"}],
    name: "The Shidokan Karate Dojo",
    address: "12-68 River Rd., Fairlawn, NJ 07412 USA",
    phone: "(201) 794-1679",
    http: "https://",
    url: "fairlawndojo.com",
    email: "okki63@aol.com",
    location: {
      lat: 40.934148,
      lng: -74.133184,
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Jim Kass", rank: "9th Dan"}],
    name: "Original Okinawa Karate, Shidokan Alaska Dojo",
    address: "815 Set Net Drive, Kenai, AK 99611 USA",
    email: "jrk.kassu@ak.net",
    location: {
      lat: 60.520427,
      lng: -151.255465,
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Mark McCloud", rank: "9th Dan"}],
    name: "Original Okinawan Karate of Holt, LLC",
    address: "2002 N. Cedar Street, Holt, MI 48842 USA",
    phone: "(517) 694-5001",
    http: "http://",
    url: "holtdojo.com",
    email: "friends@holtdojo.com",
    location: {
      lat: 42.640354,
      lng: -84.515364,
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Anthony Buscemi", rank: "7th Dan"}],
    name: "Okinawa Budokan",
    address: "11 West Main St. Hicksville, NY 11801 USA",
    phone: "(516) 982-4249",
    email: "budokanli@yahoo.com",
    location: {
      lat: 40.789074,
      lng: -73.476534,
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Lou Shoha", rank: "8th Dan"}],
    name: "Bloomfield Hills Shidokan",
    address: "Bloomfield MI USA",
    email: "shoha@comcast.net",
    location: {
      lat: 42.583645,
      lng: -83.245488,
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Roy Paul", rank: "8th Dan"},
      {name: "Margaret Paul", rank: "7th Dan"}],
    name: "Shidokan Canada",
    address: "6920 Wellington Road 124, Guelph, Ontario N1H 6J4, Canada",
    phone: "(519) 362-7745",
    http: "https://",
    url: "shidokancanada.com",
    email: "shidokan@hotmail.com",
    location: {
      lat: 43.539867,
      lng: -80.245074,
    }
  },
  {
    type: "shibu",
    instructors: [
      {name: "Sharon Basinger", rank: "7th Dan"},
      {name: "Gordon Basinger", rank: "4th Dan 1940-2002"}
    ],
    name: "Karate STL Okinawan Shidokan Shorinryu",
    address: "PO Box 27663 St. Louis, MO 63146-0063 USA",
    phone: "(314) 291-1234",
    http: "https://",
    url: "karatestl.com",
    email: "teacher@karateSTL.com",
    location: {
      lat: 38.627003,
      lng: -90.199404,
    }
  },
  {
    type: "shibu",
    instructors: [
      {name: "Robert Chartier", rank: "7th Dan"},
      {name: "Laura Chartier", rank: "7th Dan"}
    ],
    name: "Okinawan Karate - Clawson Dojo",
    address: "1195 Rochester Road, Suite K, Troy, MI 48098 USA",
    phone: "(248) 852-8810",
    http: "https://",
    email: "okidorh@wowway.com",
    location: {
      lat: 42.533077,
      lng: -83.146403,
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Mitch Cooperman", rank: "7th Dan"}],
    name: "Shidokan Karate of Mahwah",
    address: "300 Ridge Road, Mahwah, NJ 07430 USA",
    phone: "(201) 818-5120",
    http: "https://",
    url: "shidokanofmahwah.com",
    location: {
      lat: 41.078643,
      lng: -74.163949,
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Yujiro Uza", rank: "7th Dan"}],
    name: "Okinawa Shorinryu Karate Chicago",
    address: "1295 N. Rand Road, Prospect Heights, IL 60070",
    phone: "(972) 351-6405",
    email: "uzadojo@yahoo.com",
    location: {
      lat: 42.044967,
      lng: -87.980938,
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Fortunato Restagno", rank: "7th Dan"}],
    name: "Grand River Karate",
    address: "211 St Ann Avenue, St. Agatha, Ontario Canada N0B 2L0",
    http: "https://",
    url: "grandriverkarate.com",
    email: "fortun@rogers.com",
    location: {
      lat: 43.462075,
      lng: -80.51714,
    }
  },
  {
    type: "shibu",
    instructors: [{name: "Jeremy Brousseau", rank: "5th Dan"}],
    name: "New England Shidokan Karate",
    address: "751 West Shore Rd.  Warwick, RI 02889",
    phone: "(401) 408-1620",
    http: "https://",
    url: "neskarate.com",
    email: "neskarateinfo@gmail.com",
    location: {
      lat: 41.723921,
      lng: -71.38279,
    }
  },
  {
    type: "fukushibu",
    instructors: [{"name": "Amit Michaeli", "rank": "7th Dan"}],
    name: "Shidokan Israel",
    address: "Dormitory 1, Ein Karem Campus The Hebrew University Jerusalem, 91120 Israel",
    phone: "+972-50-640-7061",
    http: "http://",
    url: "shidokanisrael.com",
    email: "amit@shidokanisrael.com",
    location: {
      lat: 31.764240,
      lng: 35.149502
    }
  },

  {
    type: "fukushibu",
    instructors: [{"name": "Jason Azzarone", "rank": "5th Dan"}],
    name: "Shidokan Tampa",
    address: "Tampa, Florida USA",
    phone: "(813) 789-9005",
    email: "shidokantampa@gmail.com",
    location: {
      lat: 27.950575,
      lng: -82.457178
    }
  },

  {
    type: "shibu",
    instructors: [{"name": "Ray Purugganan", "rank": "5th Dan"}],
    name: "Kenai Shidokan",
    phone: "(907) 252-7640",
    http: "https://",
    url: "facebook.com/kenaishidokandojo",
    email: "raypurugganan@gmail.com",
    location: {
      lat: 60.554444,
      lng: -151.258333
    }
  },

  {
    type: "fukushibu",
    instructors: [{"name": "J.J. Martinez", "rank": "5th Dan"}],
    name: "Shidokan Colombia",
    address: "Bogota, Colombia",
    email: "jjmartinezt@gmail.com"
  },

  {
    type: "fukushibu",
    instructors: [{"name": "Ameer Syed", "rank": "5th Dan"}],
    name: "The Arch Shidokan Karate",
    address: "12595 Marine Ave, Ste A, St. Louis, MO 63146 USA",
    phone: "(314) 201-1623",
    http: "http://",
    url: "stlshidokan.com",
    email: "teacher@stlshidokan.com"
  },

  {
    type: "fukushibu",
    instructors: [{"name": "Stephanie Faulkingham", "rank": "4th Dan"}],
    name: "Gateway Shidokan",
    address: "PO Box 2051, Maryland Hts., MO 63043",
    phone: "(314) 643-7745",
    http: "http://",
    url: "gatewayshidokan.com",
    email: "teacher@gatewayshidokan.com"
    // TODO location
  },
  {
    type: "junshibu",
    instructors: [{"name": "Dan Spatt", "rank": "4th Dan"},{"name": "Kaela Olson", "rank": "4th Dan"}],
    name: "Ichiban Karate and Fitness",
    address: "228 Robinson St. Wakefield, RI 02879",
    phone: "(401) 789-3380",
    http: "http://",
    url: "www.ichibankarateandfitness.com",
    // TODO location
  },
  {
    type: "junshibu",
    instructors: [{"name": "Jeff Marcus", "rank": "2nd Dan"}],
    name: "Bucks County Okinawan Karate",
    address: "490 Lincoln Highway Suite, Fairless Hills, PA 19030",
    phone: "(267) 685-9610",
    http: "https://",
    url: "bcokarate.com",
    email: "contact@bcokarate.com",
    // TODO location
  },
];
