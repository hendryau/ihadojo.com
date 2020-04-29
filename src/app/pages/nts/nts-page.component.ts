import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [hType]="'h1'" [title]="'National Training Seminar'">
      <p>The <i>National Training Seminar</i>, also known as NTS, is an annual event where Karate Practitioners from around
        the globe travel to Lansing, Michigan to join <a [routerLink]="'/sensei-iha'">Sensei Iha</a> for a tremendous learning opportunity.
        NTS is a great time to reconnect with old friends and learn together with new people within the Shidokan Karate community.</p>
      <!-- TODO get some photos in there -->

      <iha-section [title]="'NTS 2020'">
        Regrettably, Sensei Iha has decided to cancel NTS 2020 in light of the Coronvirus Pandemic. Keep practicing and stay connected with your Karate family during this difficult time.
      </iha-section>
    </iha-section>
  `
})
export class NtsPageComponent { }
