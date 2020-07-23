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
        <p>This year, NTS will be hosted virtually. Iha Sensei believes now is a time when friendships are needed most. Be a part of this
            amazing <i>worldwide</i> experience.</p>
        <p>Sign up to access two days of educational karate webinars with top instructors who will take your karate passion to the next level.</p>
        <p>Students (ages 13 and up) of all ranks and experience levels are encouraged to attend. There is no cost to participate (donations are welcome).</p>
        <iha-section [title]="'Registration'" [hType]="'h2'">
          <p>You can now register for NTS 2020 <a target="_blank" [href]="registrationLink">here.</a> After registering, you will receive an email containing a complete schedule
             and Zoom Webinar details.</p>
        </iha-section>
        <iha-section [title]="'Keynote Instructors'" [hType]="'h2'">
          <p><b>Seikichi Iha</b>, 10th Dan, Beikoku Shidokan Karatedo<br>
            <b>Masatoshi Miyazato</b>, 10th Dan, Shorinryu Shidokan Argentina</p>
        </iha-section>
        <iha-section [title]="'Dates'" [hType]="'h2'">
          <p><b>Friday, July 31, 2020</b>, 6:00PM - 8:30PM EDT<br>
            <b>Saturday, August 1st, 2020</b>, 11:00AM - 5:00PM EDT</p>
        </iha-section>
      </iha-section>
    </iha-section>
  `
})
export class NtsPageComponent {

  public registrationLink="https://www.eventbrite.com/e/beikoku-shidokan-karatedo-virtual-national-training-seminar-nts-2020-tickets-112362194348"

}
