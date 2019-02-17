export interface GlossaryTerm {
  term: string;
  kanji?: string; // todo more general term for kanji... not japanese
  content?: string;
  notes?: string;
  imgUrl?: string;
}

export const TERMS: GlossaryTerm[] = [
  {
    term: "Shidokan",
    kanji: "志道館", // TODO link to the origin of shidokan (miyahira)
    content: `<p>The place (<i>the dojo</i>) where a virtuous heart is cultivated
      through martial practice and friendship.</p>
      <p>This is the name Sensei Katsuya Miyahira gave to his school based on
      book four, chapter seven, verse six of the <i>Analects of Confucius</i>.</p>`,
  },
  {
    term: "Beikoku",
    kanji: "米国",
    content: `North America (literally <i>Rice Country</i>).`,
  },
  {
    term: "sensei",
    kanji: "先生",
    content: "teacher",
  },
  {
    term: "hombu",
    kanji: "本部",
    content: "home"
  },
  {
    term: "dojo",
    kanji: "道場",
    content: "school"
  },
  {
    term: "shibu",
    content: "branch"
  },
  {
    term: "fuku shibu",
    content: "duplicate or secondary branch"
  },
  {
    term: "jun shibu",
    content: "converting branch"
  },
  {
    term: "tsuki",
    kanji: "突き",
    content: "strike"
  },
  {
    term: "mae-geri",
    kanji: "前蹴り",
    content: "front kick",
    imgUrl: "assets/glossary/iha-mae-geri.jpg"
  },
  {
    term: "mawashi-geri",
    kanji: "廻し蹴り",
    content: "roundhouse kick",
    imgUrl: "assets/glossary/iha-mawashi-geri.jpg"
  },
  {
    term: "yoko-geri",
    kanji: "横蹴り",
    content: "side kick",
    imgUrl: "assets/glossary/iha-yoko-geri.jpg",
  },

  {
    term: "fumikomi-geri",
    kanji: "横蹴り",
    content: "stomping kick"
  },
  {
    term: "ushiro-geri",
    kanji: "後ろ蹴り",
    content: "back kick",
    imgUrl: "assets/glossary/iha-ushiro-geri.jpg",
  },
  {
    term: "kata",
    kanji: "形",
    content: "form"
  },
  {
    term: "kihon",
    kanji: "基本",
    content: `<p>Meaning <i>basic</i> or <i>fundamental</i>.</p>
      <p>Our style practices five Kihon Kata. Kihon One, Two, and Three
      were developed by Chibana Choshin. Kihon Kata Four and Five were
      developed by Gusukuma Shinpan.</p>`
  },
  {
    term: "kumite",
    kanji: "組み手",
    content: "grappling hands"
  },
  {
    term: "bunkai",
    kanji: "分解",
    content: "analysis",
  },
  {
    term: "shoshin",
    kanji: "初心",
    content: "The beginner's mindset.",
  },
  {
    term: "embusen",
    kanji: "演武線",
    content: "Describes the line of movement and the starting/ending point of a kata."
  },
  {
    term: "Chinto",
    kanji: "鎮東",
    content: `Kata developed by Matsumura Sokon, inspired by a Chinese sailor with
      a unique fighting style.`,
  },
  {
    term: "te",
    kanji: "手",
    content: "hand"
  },

  {
    term: "karate",
    kanji: "空手",
    content: "empty-hand"
  },
  {
    term: "rei",
    kanji: "礼",
    "content": `<p>respect</p><p>As Gichin Funakoshi said,
      "Karate begins and ends with respect".</p>`
  },
  // {
  //   term: "kyotsuke",
  //   kanji: "気を付け",
  //   content: "attention"
  // },
  // {
  //   term: "yoi",
  //   kanji: "用意",
  //   content: "ready",
  // },
  // {
  //   term: "yame",
  //   kanji: "止め",
  //   content: "end"
  // },
  {
    term: "hajime",
    kanji: "始め",
    content: "begin"
  },
  {
    term: "haiyaku",
    kanji: "はやく",
    content: "quickly, with speed"
  },
  {
    term: "Passai",
    kanji: "抜塞",
    content: `Our style practices two Passai kata: <i>Passai Sho</i> and <i>Passai Dai</i>.`,
  },
  {
    term: "Kusanku",
    content: `Our style practices two Kusanku kata: <i>Kusanku Sho</i> and <i>Kusanku Dai</i>.
      Named after a Chinese martial artist who trained early <i>te</i> practitioners during the
      1700s.`,
  },
  {
    term: "Pinan",
    content: `The Pinan kata were designed by Itosu Anko in the early 20th century
      to help students learn simpler concepts before learning <i>Naihanchi</i>, <i>Passai</i>
      and <i>Kusanku</i> kata. THe five Pinan kata are named Pinan Shodan, Pinan Nidan, Pinan Sandan, Pinan Yodan, and
      Pinan Godan.`,
  },
  {
    term: "Naihanchi",
    content: `Our style practices three Naihanchi kata:
      <i>Naihanchi Shodan</i>, <i>Naihanchi Nidan</i>, and <i>Naihanchi Sandan.</i>`,
  },
  {
    term: "Gojushiho",
    kanji: "五十四歩",
    content: `Literally <i>54 steps</i>. Kata developed by Matsumura Sokon.`,
  },
  {
    term: "Tesho",
    content: `Kata developed by Miyahira Katsuya.`, // TODO more info
  },
  {
    term: "Shuri-te",
    content: "Style from the Shuri region of Okinawa. Shorin-ryu is derived from Shuri-te.",
  },
  {
    term: "Tomari-te",
    content: "Style from the Tomari region of Okinawa. Uechi-ryu is derived from Tomari-te.",
  },
  {
    term: "Naha-te",
    content: "Style from the Naha region of Okinawa. Goju-ryu is derived from Naha-te.",
  },
  {
    term: "makiwara",
    content: "striking post",
  },
  {
    term: "sempai",
    kanji: "先輩",
    content: "senior student",
  },
  {
    term: "kohai",
    kanji: "後輩",
    content: "junior student"
  },
  {
    term: "kime",
    content: "focus",
  },
  {
    term: "gouri",
    content: "reason",
  },
  {
    term: "gouho",
    content: "legal or true form",
  },
  {
    term: "kiyoyei",
    content: "fellowship/friendship",
  },
  {
    term: "kiyoson",
    content: "cooperation",
  },
  {
    term: "nukite",
    content: `Meaning <i>Spear hand</i>. Nukite-tsuki means spear hand
      thrust. Nukite-uke means spear hand block.`,
  }
];

/*
kata (form)
      kihon
      pinan
      tesho
      nihanchi
      passai
      kusanku
      chinto
      gojushiho
    uke (block)
      uchi uke
      soto uke
      jodan uke
      gedan barai
    dachi (stance)
      kihon dachi
      shiko dachi
      zenkutsu dachi
      kiba dachi
      oiyo zuki dachi (chasing striking stance)
      uki ashi dachi (back stance) vs kokutsu dachi
    geri (kick)
      mae geri
      yoko geri
      fumikomi geri
      ushiro geri
      mawashi geri
      tobi geri
    other terms
      chakugan
      komai
      yoi
      rei
      yame
      kiai
      shuto
 */
