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
      <img src="assets/events/2021/nts2023.png" class="w-100 mb-3">
      <h1 class="red">Practice and grow together<small>on Friday and Saturday August 4-5, 2023</small></h1>
      <p>
        <a target="_blank" href="https://www.eventbrite.com/e/beikoku-shidokan-karatedo-national-training-seminar-nts-2023-registration-636295997457?fbclid=IwAR21z9pH-Oxci4KzO9_L0obT-pQ2k8KnStAypERnM_NmgdUht-ZTPpTwqJk">Register now</a> to be a part of this special 2-day training event held at the Lansing Center.
      </p>
      <p>Adult sessions will run from 10am to 5pm both days.</p>
      <p>Youth session is from 1pm to 5pm on Saturday.</p>
      <h2>Register by July 26 if you plan on attending the Saturday evening Shidokan Banquet.</h2>
      <p>We will be celebrating Iha Sensei's birthday and dojo anniversaries.</p>
      <p>Follow <a target="_blank" href="https://www.facebook.com/OriginalOkinawaKarateIhaDojo">Original Okinawa Karate Iha Dojo</a> on Facebook for updates.</p>
    </iha-section>
  `
})
export class NtsPageComponent {

  public registrationLink="https://www.eventbrite.com/e/beikoku-shidokan-karatedo-virtual-national-training-seminar-nts-2021-registration-153376311677?aff=erelexpmlt"
  public tShirtLink="https://www.customink.com/g/zjn0-00ce-nmbp"

}
