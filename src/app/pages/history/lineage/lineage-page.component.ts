import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Lineage'">
      <p>TODO don't know where to put these articles, also standardize shorin ryu vs shorin-ryu,
        also we need the lineage tree somewhere... karate and kobudo</p>
      <iha-section
        [title]="'The History of Shorin Ryu'"
        [subTitle]="'Katsuya Miyahira, Chairman, Okinawa Shorin Ryu Karate Association'"
        [hType]="'h2'"
      >
        <p>As martial arts instructor and advisor to the last King of the Ryukyuan Dynasty,
          Master Sokun Matsumura, often called "Matsumura the Warrior", was the preeminent
          martial artist of his era. Matsumura Sensei developed and trained many disciples,
          one of whom was Anko Itosu.</p>
        <p>Anko Itosu (1830 - 1915) incorporated the closed, hidden arts of karate into the
          physical education given at schools, and worked for broader, further dissemination
          of the arts. His disciples, Gichin Funakoshi, Kenwa Mabuni, and Kanken Toyama carried
          the arts to mainland Japan while Kentsu Yabu, Chomo Hanashiro, Chotoku Kyan, Choki Motobu,
          Mouden Yabiku, Choshin Chibana, Anbun Tokuda, Choujyo Oshiro and Shinpan Shiroma
          disseminated Itosu's teachings throughout Okinawa.</p>
        <p>Choshin Chibana, to better distinguish the style from other forms of karate, and to
          preserve the tenets that had been passed down from his teacher, Anko Itosu, renamed
          the form Okinawa Shorin Ryu. While the basic kata of Okinawa Shorin Ryu is Naihanchi,
          Anko Itosu modified the traditional kata and incorporated them into the First Dan,
          devised new Second and Third Dan, and amalgamated five new patterns of kata
          collectively known as Pinan into the Fukyu kata.</p>
        <p>Shorin Ryu is a natural flow, devoid of unbalanced stances or unnatural breathing
          patterns. It has unique patterns of coiling and of relaxing power, allowing easier
          concentration of force and the attainment of speedy actions. To best develop the skills
          involved in the art of the single, deadly blow, training is targeted at tightly bound bales
          of straw. Nor is the art limited to passive modes of defense: the ability to release an
          effective counterattack in defense is a crucial element, summarized as "Offense is an
          effective form of Defense."</p>
        <p>The All Japan Karate Federation seeks to spread Karate as a sport form. Simply put, this
          divergence is vast and serious. Winners in combative sports such as boxing may be seen
          wildly rejoicing with the announcement of a win, but this is not acceptable in martial arts
          such as sumo, judo or karate. A victor restrains his joy out of consideration for the
          vanquished. Such is the difference between sport and a martial art.</p>
        <p>Today, 25 dojos are registered with the Okinawa Shorin Ryu Association. The many more outside
          Okinawa and overseas demonstrate the growing presence of Okinawa Shorin Ryu in the world.</p>
      </iha-section>
      <iha-section
        [title]="'History of Okinawa Karate & Kobudo'"
        [subTitle]="'Reprinted and Edited from the 1997 Okinawa Karate & Kobudo World Tournament Brochure'"
        [hType]="'h2'"
      >
        <p>Okinawa is composed of many small islands, each having a beautiful landscape and unique
          culture and history. In the 12th century, Okinawa was divided into many regions, each with
          its own ruler who built a gusuku (castle) and controlled the neighboring villages. Later,
          these regions unified into three main kingdoms. In 1429, King Sho Hashi united these three
          forces, creating the Ryukyu Kingdom. During the 15th and 16th centuries, known as the golden
          trading era, the Ryukyus developed into a major trading center between China and other
          neighboring countries. However, during this period there was the threat from Japanese pirates
          and, for purposes of securing one's own safety abroad, bujutsu (martial arts) was of vital
          importance. From this historical background, Okinawa's unique karate (formerly referred to as
          "te") and kobudo were originated and perfected. Today's karate and kobudo came to be as a
          result of combining the good qualities of the martial arts of China and the other Southeastern
          Asian countries with the Okinawa "te" through interchanges.</p>
        <p>During the Ryukyu Kingdom period, the Shuri "te" was developed with the Shuri Castle as
          its origin. The Naha "te" flourished in the commercial city of Naha, and the Tomari "te" was
          developed in the Tomari village area which was located between the previous two regions. Famous
          bujins (martial arts experts) originated from each region and their tradition has been passed
          on to today. As karate and kobudo were forbidden by the lords, their techniques were kept secret
          and very little literature regarding these techniques was written. Their traditions were conveyed
          either verbally or by individual instruction.</p>
        <p>After Okinawa was officially incorporated as a prefecture of Japan, new laws reduced the need
          for secrecy, and the education system of the Meiji era (1896-1912) adopted karate and kobudo as
          part of its physical education program. Since then, karate and kobudo have been performed in
          public. In the Taisho period (1912-1926) they were introduced to mainland Japan, and in the early
          Showa period (1926-1988) they spread overseas.</p>
        <p>After World War II (1945), Okinawan karate was divided into four ryuhas - Shorin-ryu, Goju-ryu,
          Uechi-ryu, and Matsubayashi-ryu. Currently, there are many ryuha and kaiha changing their styles
          and techniques, but the karate and kobudo of each ryuha and kaiha have their own kihon kata (basic
          kata) from which the attack and defense techniques are logically derived.</p>
        <p>The rigorous training cultivates physical power and a keen mind, thus contributing to the
          well-being of the society. Karate and kobudo have greatly influenced education. They can be
          enjoyed as sports or used as self-defense arts. The diverse elements and characteristics that
          made karate and kobudo popular throughout the world have instilled inspiration in the hearts
          of millions of people.</p>
      </iha-section>
    </iha-section>
  `
})
export class LineagePageComponent { }
