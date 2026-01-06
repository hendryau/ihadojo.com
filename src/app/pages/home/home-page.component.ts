import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Welcome to the Original Okinawan Karate Dojo in Lansing Michigan'" [imagePosition]="'left'">
      <img slot="image" src="assets/new-photos-2026/OOK_Dojo_Shomen_SQ.jpg" alt="Original Okinawan Karate Dojo Shomen" class="img-fluid" width="300px">
      <p>The Original Okinawan Karate <a routerLink="/our-dojo-story">("Iha Dojo")</a> of Lansing, was directed from 1976-2024 by our dojo's founder, <a routerLink="/sensei-iha">Seikichi Iha, Hanshi, 10th Dan</a>. The dojo continues to provide traditional Shorin Ryu Shidokan karate <a routerLink="/original-okinawa-karate">classes</a> for ages 14 and up, taught by a dedicated team of Iha Sensei's senior instructors in a cooperative, friendly and respectful dojo learning environment.</p>
    </iha-section>

    <iha-section [title]="'Karate Training for Healthy Life'" [imagePosition]="'right'" [hideImageOnSmall]="true">
      <img slot="image" src="assets/new-photos-2026/OOK_F-C-L.jpg" alt="Karate Training" class="img-fluid" width="200px">
      <p>In addition to building self-defense skills, the regular practice of karate can also provide positive physical and mental <a routerLink="/training-benefits">benefits</a> – such as building greater physical strength, coordination, and balance while helping to reduce mental stress and improve focus.</p>
      <img src="assets/new-photos-2026/OOK_F-C-L.jpg" alt="Karate Training" class="d-md-none d-block mx-auto" width="250px">
      <section style="overflow: auto;">
        <h1>Our Location</h1>
        <img src="assets/new-photos-2026/2013_E_MI_Front Door.jpg" alt="Dojo Front Door" class="d-block mx-auto mx-md-0 mb-2 float-md-start me-md-3 full-width-on-small" style="max-width: 320px;">
        <p>We are located at 2013 East Michigan Avenue, Lansing MI 48912 on Lansing's east side between Michigan State University and the Michigan State Capitol. There are 3 CATA bus route stops near the dojo as well as street parking in front or in the city lot behind the dojo.</p>
      </section>
    </iha-section>

    <iha-section [title]="'Try a Class!'">
      <p><a routerLink="/original-okinawa-karate">Classes</a> are currently available Monday – Saturday for ages 14 and up. (Joining the dojo allows you to attend any/every class you choose.) Contact the dojo at <a href="mailto:mail@ihadojo.com">mail@ihadojo.com</a> to receive our current class schedule and rates or arrange a visit to try out a free class!</p>
    </iha-section>
    <img src="assets/new-photos-2026/grid.png" />
  `
})
export class HomePageComponent { }
