import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Our Dojo Story'">
      <p>The Original Okinawa Karate dojo in Lansing was founded in 1976 by <a routerLink="/sensei-iha">Seikichi Iha, Hanshi 10th Dan</a>, Shorin Ryu Shidokan (affectionately known by his students as "Sensei") after Lansing-area karate students met him while he was teaching in Los Angeles, California. They invited Iha Sensei to come to Michigan and he did with his Okinawan karate friend, Toshiyuki Itokazu, who practiced Uechi Ryu.</p>

      <p>Iha Sensei settled into teaching in Lansing. In the years that followed, his dojo on 2018 E. Michigan Ave became
      a cornerstone of the east side Lansing neighborhood as well as the karate community – drawing in students from many
      locations around the country and world to come and study with Sensei.</p>

      <p>The dojo has always been a place of karate learning, friendship and community. In addition to classes at the
      Michigan Ave. location, dojo instructors also have led an MSU karate club, taught karate classes for 17 years for
      the MSU Department of Kinesiology and provided many educational programs and demonstrations in the greater Lansing
      area and beyond. Over the decades, thousands of students have been part of the Original Okinawa Karate Iha Dojo
      community – many old students returning to visit or connecting to share fond memories of their training years. Some
      have founded dojos of their own as life took them to new locations.</p>

      <p>In early 2024, extensive renovations became necessary on the old dojo building. A generous member temporarily
      shared their space in southwest Lansing so classes could continue, then in May 2024, the dojo moved permanently
      across the street from the old dojo to 2013 E. Michigan Ave. Although the dojo's historical training space from
      1976-2024 will always be remembered and missed, members were happy to return to training nearby in the old
      neighborhood.</p>

      <p>During 2024, Iha Sensei continued to teach his students until he passed away peacefully surrounded by family,
      students and friends on August 3, 2024 at age 92. Today, Sensei's students are continuing their promise to him of
      carrying forward his dojo and teachings. He left behind a tremendous wealth of knowledge to study and share into
      the future.</p>

      <p>To learn more about the remarkable life and accomplishments of our dojo's founder, Seikichi Iha, Hanshi, 10th Dan,
      as well as the Beikoku Shidokan Karatedo Association he also founded and the history, lineage and philosophy of the
      karate we practice, visit:</p>

      <ul>
        <li><a routerLink="/sensei-iha">Our Founder</a></li>
        <li>Iha Dojo on Facebook: <a href="https://www.facebook.com/OriginalOkinawaKarateIhaDojo" target="_blank">https://www.facebook.com/OriginalOkinawaKarateIhaDojo</a></li>
        <li>Beikoku Shidokan Karatedo Association <a href="https://www.beikokushidokan.com/" target="_blank">https://www.beikokushidokan.com/</a></li>
      </ul>
    </iha-section>
  `
})
export class OurDojoStoryPageComponent { }
