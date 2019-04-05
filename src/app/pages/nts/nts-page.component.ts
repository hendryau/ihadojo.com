import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [hType]="'h1'" [title]="'National Training Seminar'">
      <p>The <i>National Training Seminar</i>, also known as NTS, is an annual event where Karate Practitioners from around
        the globe travel to Lansing, Michigan to join Sensei Iha for a tremendous learning opportunity.
        NTS is a great time to reconnect with old friends and learn together with new people within the Shidokan Karate community.</p>
      <!-- TODO get some photos in there -->
      
      <iha-section [title]="'NTS 2019'">
        Due to Sensei Iha's Tookachi, and the organization's planned trip to Okinawa this summer
        <a href="http://ihatookachi.com">(ihatookachi.com)</a>, there will be no NTS in 2019.
      </iha-section>
    </iha-section>
  `
})
export class NtsPageComponent { }
