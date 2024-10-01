import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .gra { color: grey; font-weight: bold }
    .blu { color: navy; font-weight: bold }
    .ora { color: orange; font-weight: bold }
    .red { color: #e8301e; }
    small {
      display: block;
      color: initial;
      font-size: .7em;
    }
  `],
  template: `
    <iha-section [hType]="'h1'" [title]="'National Training Seminar'">
      <!-- <img src="assets/events/2021/nts2023.png" class="w-100 mb-3"> -->
      <h1>NTS 2024</h1>
      <p>
        Register now for NTS 2024 to enjoy two days of training seminars at the Lansing Center for students of all learning levels:
        <br/>
        <a href="https://www.eventbrite.com/e/beikoku-shidokan-karatedo-national-training-seminar-nts-2024-registration-876964302837?aff=oddtdtcreator">
        https://www.eventbrite.com/e/beikoku-shidokan-karatedo-national-training-seminar-nts-2024-registration-876964302837?aff=oddtdtcreator
        </a>
      </p>
      <!-- <p>Adult sessions will run from 10am to 5pm both days.</p>
      <p>Youth session is from 1pm to 5pm on Saturday.</p>
      <h2>Register by July 26 if you plan on attending the Saturday evening Shidokan Banquet.</h2>
      <p>We will be celebrating Iha Sensei's birthday and dojo anniversaries.</p>
      <p>Follow <a target="_blank" href="https://www.facebook.com/OriginalOkinawaKarateIhaDojo">Original Okinawa Karate Iha Dojo</a> on Facebook for updates.</p> -->
    </iha-section>
  `
})
export class NtsPageComponent {

  public registrationLink="https://www.eventbrite.com/e/beikoku-shidokan-karatedo-national-training-seminar-nts-2024-registration-876964302837?aff=oddtdtcreator"

}
