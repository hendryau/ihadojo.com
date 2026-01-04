import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Welcome to the Original Okinawan Karate Dojo in Lansing Michigan'">
      <p>The Original Okinawan Karate <a routerLink="/our-dojo-story">("Iha Dojo")</a> of Lansing, was directed from 1976-2024 by our dojo's founder, <a routerLink="/sensei-iha">Seikichi Iha, Hanshi, 10th Dan</a>. The dojo continues to provide traditional Shorin Ryu Shidokan karate <a routerLink="/original-okinawa-karate">classes</a> for ages 14 and up, taught by a dedicated team of Iha Sensei's senior instructors in a cooperative, friendly and respectful dojo learning environment.</p>
    </iha-section>

    <iha-section [title]="'Karate Training for Healthy Life'">
      <p>In addition to building self-defense skills, the regular practice of karate can also provide positive physical and mental <a routerLink="/training-benefits">benefits</a> – such as building greater physical strength, coordination, and balance while helping to reduce mental stress and improve focus.</p>
    </iha-section>

    <iha-section [title]="'Our Location'">
      <p>We are located at 2013 East Michigan Avenue, Lansing MI 48912 on Lansing's east side between Michigan State University and the Michigan State Capitol. There are 3 CATA bus route stops near the dojo as well as street parking in front or in the city lot behind the dojo.</p>
    </iha-section>

    <iha-section [title]="'Try a Class!'">
      <p><a routerLink="/original-okinawa-karate">Classes</a> are currently available Monday – Saturday for ages 14 and up. (Joining the dojo allows you to attend any/every class you choose.) Contact the dojo at <a href="mailto:mail@ihadojo.com">mail@ihadojo.com</a> to receive our current class schedule and rates or arrange a visit to try out a free class!</p>
    </iha-section>
  `
})
export class HomePageComponent { }
