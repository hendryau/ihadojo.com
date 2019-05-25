import {IhaEvent} from "../../../event/events";


// TODO significant NTSs
// TODO significant awards... governors award, sensei iha day
// TODO what were sensei's job(s) growing up on okinawa
// TODO note that cho => village
export const TIMELINE_EVENTS: IhaEvent[] = [
  {
    date: "1429",
    // TODO move to article, kanji, okinawa language
    // "Sui-tee" (also called "Shuri-te" or "Sui-di"
    // from Shuri, the capitol); "Nafa-tee" (also called "Naha-te"
    // or "Nafa-di" - from Naha City); "Tumaii-tee" (also called
    // "Tomari-te" or "Tumai-di" - from Tomari Village)
    // "Te" (also referred to as "ti," "to-di," and "to-ti")
    content: `<p>Three states of Okinawa unify into the Ryukyu
      Kingdom under King Sho Hashi of Chuzan. Three styles
      develop which, much later in the 1900s, became known
      as <i>Shuri-te</i> (from Shuri, the capitol), <i>Naha-te</i>
      (from Naha City), and <i>Tomari-te</i> (from Tomari Village).</p>
      <p>The 14th to 16th centuries are often referred to as the "Golden Age
      of Trade" with much commerce between Okinawa and China. Okinawan
      <i>te</i> practitioners learned and incorporated techniques from
      Chinese, and other South East Asian fighting arts. <sup>1, 3, 5</sup></p>`,
    imageUrl: "assets/timeline/trade2.jpg",
  },
  {
    date: "1477",
    content: `King Sho Shin made the wearing of swords and
      possession of large quantities of weapons illegal
      throughout the Ryukyu Kingdom.`,
    imageUrl: "assets/timeline/king-sho-shin.jpg",
  },
  {
    date: "1609",
    content: `Okinawa invaded by the Satsuma Clan of Kyushu,
      Japan. In years following the invasion, the previous
      ban on import, possession and use of weapons became reinforced.
      <i>Kobudo</i> became a secret taught to members of the
      ruling class for 250 years. <sup>1, 3</sup>`, // TODO reword this last sentence
  },
  {
    date: "1809",
    content: `Sokon Matsumura born in Yamagawa Village, Shuri. During his
      lifetime, Matsumura worked as a martial arts instructor for the kingdom
      and bodyguard to the last three Ryukyuan kings. <sup>1, 4</sup>`,
  },
  {
    date: "1831",
    content: `Anko Itosu born in Gibo Village, Shuri. Learned Shuri-te
      from Matsumura while a clerk of the royal family. Studied under
      two Chinese attachés. <sup>1, 4</sup>`,
  },
  {
    date: "1879",
    content: "Ryukyu Kingdom was dissolved and Okinawa annexed as a prefecture of Japan. <sup>1</sup>",
  },
  {
    date: "June 5th, 1885",
    content: "Choshin Chibana born in Torihori Village, Shuri. <sup>1, 3, 4, 13</sup>",
    // TODO Torihori or Tottori?
  },
  {
    date: "1890",
    content: "Military Draft system imposed on Okinawa. <sup>13</sup>",
  },
  {
    date: "1890",
    content: "Shinpan Gusukuma born, Taira Village, Shuri. <sup>1, 13</sup>",
  },
  {
    date: "1896",
    content: "Beginning of Meiji era.",
  },
  {
    date: "1899",
    content: "Death of Sokon Matsumura. <sup>1</sup>",
  },
  {
    date: "1900",
    content: "Choshin Chibana studied under Anko Itosu. <sup>3, 4</sup>",
  },
  {
    date: "1901",
    content: `Anko Itosu taught karate at the Shuri Jinjo Elementary
      school as an extra-curricular activity. <sup>4, 7, 13</sup>`,
  },
  {
    date: "1903",
    content: `Shinpan Gusukuma began training under Anko Itosu in
      Kubagawa. He studied Sanchin kata at Kanryo Higaonna's dojo
      and also studied with many other masters under all of the major
      styles. He selected Shorin-ryu as his main concentration. <sup>4, 14</sup>`,
  },
  {
    date: "1905",
    content: `<p>Anko Itosu taught karate at the Okinawa Prefectural Middle
      School (later called the Okinawa Prefecture Dai-ichi Middle School)
      where Chomo Hanashiro was the chief instructor.</p><p>Itosu also taught
      at the Okinawa Prefectural Men's Teacher's Training College where
      Kentsu Yabu was the chief instructor.</p><p>During this time, Itosu
      developed the five <i>pinan kata</i> to teach fundamentals. <sup>4, 11,
      12, 13</sup></p>`,
  },
  {
    date: "1905",
    content: `The characters translating to "empty hand" (Karate) were
      first used to describe the Okinawan martial art. <sup>1</sup>`,
  },
  {
    date: "1908",
    // TODO link to the ten articles
    content: `Anko Itosu petitioned to introduce karate into public school
      curriculum. The "10 articles" ("ten lessons of to-te") document was
      written to report on the results of his teaching in the schools and to
      petition for its dissemination in more schools. <sup>4, 11, 13</sup>`,
  },
  {
    date: "1908",
    content: `<p>Shinpan Gusukuma was drafted into the Japanese army. After
      service, he continued training under Anko Itosu.</p><p>Later, Gusukuma became
      a school teacher at Dai Ichi Elementary School in Shuri and taught karate.
      He opened a dojo at Taira Village, Shuri. <sup>4</sup></p>`,
  },
  {
    date: "1912",
    content: "Beginning of the Taisho era. Karate demonstrated in mainland Japan. <sup>1</sup>",
  },
  {
    date: "March 26th, 1915",
    content: "Anko Itosu passed away in Yamakawa Village. <sup>1, 13</sup>",
  },
  {
    date: "1918",
    content: `"Karate Preservation Association" founded. <sup>2</sup>`,
  },
  {
    date: "August 8th, 1918",
    content: "Katsuya Miyahira born in Kaneku Village, Nishihara. <sup>2</sup>",
  },
  {
    date: "1920", // TODO double check tottori-bori
    content: `Choshin Chibana began teaching at Tottori-bori.
      Later opened 2nd dojo in Kumoji Village, Naha. <sup>4, 5</sup>`,
  },
  {
    date: "1922",
    content: "Gichin Funakoshi demonstrated at a Japanese Sports Show in Tokyo. <sup>7</sup>",
  },
  {
    date: "1926",
    content: `Beginning of the Showa era. "Okinawa Karate Club" founded.
      Karate and Kobudo spread overseas. <sup>1, 4, 7, 9</sup>`, // TODO should we capitalize kobudo and karate everywhere?
  },
  {
    date: "1930", // TODO elaborate on these names, note nakijin is okinawan for castle, jo is japanese for castle
    content: `Choshin Chibana taught at a dojo located in Gibo Village, Shuri, at
      Nakijin Goten, of Yoshitsuga Teishi, (also called "Nakijin Gima" by local
      residents at that time); the courtyard of Baron Nakijin and a famous location
      of past karate practitioners. <sup>4, 8, 14</sup>`,
  },
  {
    date: "July 9th, 1932",
    content: "Seikichi Iha born, Tanahara Village, Nishihara.",
  },
  {
    date: "1933",
    content: `Okinawa Athletic Association officially recognized by the Dai
      Nippon Butoku Kai. Katsuya Miyahira began study in April with Choshin
      Chibana at Okinawa Prefecture Number 1 School (now Shuri High School).
      On the same day, Choshin Chibana changed the kanji for <i>Shorei-ryu</i>
      (his style) to <i>Shorin-ryu</i> to try to avoid confusion with the Chinese
      shaolin name and to give the style an Okinawan name. <sup>4</sup>`,
  },
  {
    date: "1933",
    content: `Miyahira studied with Anbun Tokuda (another student of
      Itosu) in September. <sup>7, 14</sup>`,
  },
  {
    date: "1937",
    content: `Okinawa Prefectural Karate-do Promotion Society founded. Shinpan
      Gusukuma was instructor at the Shuri City Dai Ichi Elementary School. <sup>1</sup>`,
  },
  {
    date: "1937",
    content: "Katsuya Miyahira studied with Choki Motobu in January. <sup>2, 4</sup>",
  },
  {
    date: "1937", // TODO ask sensei about this
    content: `Tension prior to World War 2: Karate activity suspended.
      Katsuya Miyahira worked as a school teacher in Manchuria and taught
      self-defense. <sup>4</sup>`,
  },
  {
    date: "April 1st",
    endDate: "August 15th, 1945",
    content: `The Battle of Okinawa. Many important members in the karate society
      lost their lives along with hundreds of thousands of Okinawans. Shuri city
      destroyed. Choshin Chibana narrowly escaped to Chinen Village. <sup>4</sup>`,
  },
  {
    date: "1945",
    endDate: "1948",
    content: `Choshin Chibana taught karate from 1945 to 1948 on
      the Chinen Peninsula, later opening several dojos in Naha
      and Shuri. <sup>4</sup>`,
  },
  {
    date: "Late 1940s",
    content: `Karate has divided into four main ryuhas: <i>Shorin-ryu</i>,
      <i>Goju-ryu</i>, <i>Uechi-ryu</i> and <i>Matsubayashi-ryu</i>. <sup>4</sup>`
  },
  {
    date: "1948",
    content: `Katsuya Miyahira received Shihan Certificate from
      Choshin Chibana. In October, opened a dojo in Kanehisa,
      Nishihara. Miyahira names his dojo <i>Shidokan</i>. <sup>2, 6</sup>`,
  },
  {
    date: "1950",
    content: `Seikichi Iha began training with Shinpan Gusukuma in
      Gibo Village, Shuri. <sup>14</sup>`,
  },
  {
    date: "1952", // TODO what is gu
    content: `Shinpan Gusukuma moved dojo to Naminoue-gu, Naha.
      Seikichi Iha continues his training with Gusukuma there. <sup>14</sup>`,
  },
  {
    date: "September 1952",
    content: "Katsuya Miyahira moved to Naha City.",
  },
  {
    date: "October 1953",
    content: "Katsuya Miyahira became karate teacher at Ryukyu University. <sup>2, 4</sup>",
  },
  {
    date: "1954", // TODO do we have the actual day?
    content: "Shinpan Gusukuma passed away. <sup>1</sup>",
  },
  {
    date: "1954",
    endDate: "1958",
    content: `Chosin Chibana served as Karate Advisor and
      Senior Instructor for the Shuri City Police Precinct. <sup>4</sup>`,
  },
  {
    date: "1954",
    content: `Seikichi Iha began training with Katsuya Miyahira in Naha
      after being introduced by Shoei Miyazato. <sup>3, 8, 14</sup>`,
  },
  {
    date: "May, 1956",
    content: `Choshin Chibana was appointed first president of the newly
      formed Okinawa Karate-do League. <sup>2, 6</sup>`,
  },
  {
    // TODO get photo of shidokan dojo
    date: "1956",
    content: "Katsuya Miyahira built the Shidokan Dojo behind his house at Tsuboya. <sup>4</sup>",
  },
  {
    date: "April, 1958",
    content: "Katsuya Miyahira received Kyoshi title from Dainippon Butokukai. <sup>2, 6</sup>",
  },
  {
    date: "1960", // TODO can we find this newspaper?
    content: `Dan/kyu rank system introduced by the Okinawan Karate-do League.
      Choshin Chibana received 1st Award for Distinguished Public Service in
      Physical Education by the Okinawa Times newspaper. <sup>4</sup>`,
  },
  {
    date: "April 15th, 1960",
    content: "Choshin Chibana formed the Okinawa Shorin-ryu Karate-do Association. <sup>7</sup>",
  },
  {
    date: "1963",
    imageUrl: "assets/timeline/iha-shihan.jpg",
    content: "Seikichi Iha promoted to 5th Dan, Shihan. <sup>6</sup>",
  },
  {
    date: "August 30th, 1964", // TODO This memorial has since be relocated to {?}
    content: `<p>Choshin Chibana erected a monument for Anko Itosu
      beside the master's gravesite in the forest of Furushima in
      Mawashi to commemorate the 50th anniversary of Itosu's death. <sup>6, 8, 13</sup></p>`,
    imageUrl: "assets/timeline/itosu-grave.jpg",
  },
  {
    date: "1964",
    content: `A memorial celebration features 4 students (Iko Oshiro, a student of Higa;
      Katsuyuki Shimabukuro, a student of Chibana; Takeshi Miyagi, a student of Miyahira;
      Seikichi Iha, a student of Miyahira) who were selected to perform a kata demonstration
      in Itosu's memory. <sup>14</sup>`,
  },
  {
    date: "1964",
    content: "Choshin Chibana diagnosed with terminal throat cancer. <sup>6</sup>",
  },
  {
    date: "1965",
    imageUrl: "assets/timeline/gonzales-iha.jpg",
    content: `<p>Seikichi Iha served as adviser to Latino Gonzales dojo in Manila,
      Philippines for 11 months. (Ferdinand Marcos became president of the
      Philippines during that time). <sup>14</sup></p><p>Iha returned to Okinawa and
      taught karate to Marines in Futenma. Promoted to 6th Dan. Opened dojo in
      hometown of Nishihara. <sup>6</sup></p>`,
    // TODO ask sensei... is this akiyoshi shiromas same dojo?
  },
  {
    date: "1966",
    content: `Katsuya Miyahira visited and taught karate in Manila, the Philippines. <sup>10</sup>`,
  },
  {
    date: "February 1967",
    content: "Katsuya Miyahira received 9th Dan (Kudan) Hanshi (Master) title. <sup>2</sup>",
  },
  {
    date: "1967",
    content: `Seikichi Iha was promoted to 7th Dan, Kyoshi, and sent to Los Angeles
      with Seizun ("Santos") Kina and Kensai Taba. Taught at the American Okinawan Club
      for 5 months then opened the Shureikan dojo. <sup>6</sup>`,
  },
  {
    date: "1968",
    content: `Choshin Chibana awarded 4th Degree of Merit Zuiho.
      Decorated by Emperor of Japan. <sup>3, 4</sup>`,
  },
  {
    date : "April, 1968",
    content: `Interview with Seikichi Iha, Seizun Kina and Kensai Taba published in
      April issue of <i>Black Belt</i> magazine.`,
    imageUrl: "assets/timeline/black-belt-magazine-1968.jpg"
  },
  {
    date: "February 26th, 1968",
    content: `Choshin Chibana passed away. Katsuya Miyahria became President
      of the Okinawa Shorin-ryu Karate-do Association. <sup>2, 8</sup>`,
  },
  {
    date: "1968",
    content: "Seikichi Iha visited Guam with Seigi Shiroma. Shiroma opened a dojo in Guam. <sup>14</sup>",
  },
  {
    // TODO any photos?
    date: "1968",
    content: "Seikichi Iha opened a Shidokan dojo in Los Angeles. <sup>6</sup>",
  },
  {
    date: "June, 1970", // TODO reword second sentence
    content: `Seikichi Iha featured in the June issue of "Karate Illustrated" magazine.
      While instructing in the Los Angeles dojos, met and was invited to come
      to Lansing, Michigan by visiting senior students of Tadashi Yamashita.`,
  },
  {
    date: "1974",
    // TODO get photo from dojo of Miyahira
    content: `Katsuya Miyahira participated in 1st Karate World
     Championship and received Distinguished Service Award. <sup>2</sup>`,
  },
  {
    date: "1974",
    imageUrl: "assets/timeline/demo.jpg",
    content: `In the fall, Seikichi Iha moved to Lansing,
    Michigan with Toshiyuki Itokazu (Uechi-ryu). Harold Armour,
    a senior student in Tadashi Yamashita's Lansing branch dojo
    and founder of the Michigan State University Shorin-ryu Karate club,
    invited Iha to lead the East Lansing dojo. Iha renamed the dojo
    "Original Okinawa Karate" to include the two styles (Shorin-ryu and Uechi-ryu)
    of the senior instructors. <sup>14</sup>`,
  },
  {
    date: "1976",
    imageUrl: "assets/timeline/70s-Dojo-Front.jpg",
    content: `Seikichi Iha moved dojo to current Lansing location and
      formed the Beikoku Shidokan Association. The association was formally recognized by Katsuya
      Miyahira in July of 1996. <sup>14</sup>`,
  },
  {
    date: "1978",
    content: `Katsuya Miyahira received title of 10th Dan, Hanshi on
      September 2 from the Shorin-ryu Kyokai. Seikichi Iha
      promoted to 8th Dan, Kyoshi in September. <sup>14</sup>`,
  },
  {
    date: "1982",
    content: "Katsuya Miyahira became Counselor of the Japan Karate Federation. <sup>2</sup>",
  },
  {
    date: "1986",
    content: `Katsuya Miyahira took office as President of
    the Okinawa Prefecture Karate Federation. <sup>2</sup>`,
  },
  {
    date: "1989",
    content: `Beginning of the Heisei Era. Katsuya Miyahira given
      the Martial Arts Distinguished Service Award (the highest honor of
      its kind in the world of Japanese martial arts) by Shigeyoshi, president
      of the Japan Martial Arts Council in recognition of his long years of
      distinguished service in the advancement and expansion of Karate-do. <sup>2, 3</sup>`,
  },
  {
    date: "March 12th, 1989",
    content: `Seikichi Iha received title of 9th Dan,
      Hanshi (master) from Katsuya Miyahira and the
      Okinawa Prefecture Karate Federation. <sup>6, 14</sup>`,
  },
  {
    date: "1992",
    content: `Katsuya Miyahira celebrated 40th Dojo Anniversary,
      Okinawa Shorin-ryu Shidokan Demonstration, Naha. <sup>8</sup>`,
  },
  {
    imageUrl: "assets/timeline/miyahira-20th.jpg",
    date: "March, 1996",
    content: `Beikoku Shidokan Karate-do 20th Anniversary Celebration
      in East Lansing, Michigan. Katsuya Miyahira visited Michigan to
      participate.`,
  },
  {
    date: "March 25th, 2001",
    content: `Seikichi Iha received title of 10th Dan,
      Hanshi, March 25, from Katsuya Miyahira, President
      of the Okinawa Shorin-ryu Karate-do Association.`,
  },
  {
    date: "July, 2001",
    content: "Beikoku Shidokan Karate-do 25th Anniversary Celebration, East Lansing, Michigan.",
  },
  {
    date: "November 28th, 2010",
    content: "Katsuya Miyahira passed away.",
  },
  {
    date: "July, 2016",
    content: "Beikoku Shidokan Karate-do 40th Anniversary Celebration, Lansing, Michigan."
  },
  // TODO kip barker promoted to 9th dan
  {
    date: "August, 2019",
    imageUrl: "assets/timeline/tookachi_logo.png",
    content: "Seikichi Iha celebrated his Tookachi (87th birthday).",
  }
];
