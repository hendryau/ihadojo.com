import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Original Okinawa Karate'" [subTitle]="'2018 East Michigan Avenue, Lansing MI'">
      <p>Original Okinawa Karate is owned and operated by Seikichi Iha, Hanshi, 10th Dan, the
        only Okinawa-born Karate master currently living in the USA.</p>

      <p>Sensei Iha has taught out of Lansing, Michigan since the 1976. He leads an <i>annual</i> Training
        Seminar in Lansing, where Karate friends from all over the globe come to visit and learn from him.
        He frequently travels to teach and share Karate around the world.</p>

      <iha-section [title]="'Class Schedule'" [hType]="'h2'">
        <p>Classes are currently available for ages 14 and up. Joining the dojo allows you to attend any/every class you choose.</p>
        <ul>
          <li>Monday: 6-7 PM</li>
          <li>Wednesday: 6-7 PM</li>
          <li>Friday: Noon-1 PM</li>
          <li>Saturday: 10-11 AM</li>
        </ul>
        <p>A Kobudo Bo (5 to 6-foot wooden staff) class is also available (instructor approval required to attend; location may change seasonally to a local outdoor park).</p>

      </iha-section>
      <iha-section [title]="'Location'" [hType]="'h2'">
        <p>Original Okinawa Karate is located at <b>2018 East Michigan Avenue, Lansing MI 48912</b>.</p>
        <p>If this is not near you, Sensei Iha has over 30 branch dojos across
          the USA, check the list of <a routerLink="/association/affiliate-dojos">affiliate dojos</a>
          to find your closest dojo.
        </p>
        <!-- TODO MAP -->
      </iha-section>
      <iha-section [title]="'Contact Us'" [hType]="'h2'">
        <iha-section [hType]="'h3'" [title]="'Email'">
          <p>The best way to contact the dojo is via email at
            <a href="mailto:mail@ihadojo.com">mail@ihadojo.com</a>.
          </p>
        </iha-section>
        <iha-section [hType]="'h3'" [title]="'Schedule a Visit'">
        You may arrange to visit a class at the dojo by sending a request to <a href="mailto:mail@ihadojo.com">mail@ihadojo.com</a>.
        If this is your first dojo visit, feel free to just watch, or bring comfortable clothing if you want to participate in a trial class. If you are interested in taking a trial class, please arrive at least ten minutes before class begins so that we can meet you and get you situated.
        </iha-section>
      </iha-section>
    </iha-section>
  `
})
export class OriginalOkinawaKaratePageComponent {}
