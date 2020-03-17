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

      <div class="alert alert-warning">
        The Dojo is temporarily closed in compliance with the
        <a href="https://www.michigan.gov/coronavirus/0,9753,7-406-98158-521763--,00.html" target="_blank">March 16th Executive Order</a>
        issued by Governor Gretchen Whitmer.</div>

      <iha-section [title]="'Schedule'" [hType]="'h2'">
        <table class="table table-striped table-bordered table-responsive">
          <thead class="thead-light">
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
          </thead>
          <tbody>
          <tr class="thead-light">
            <th>Youth Class</th>
            <td></td>
            <td>4:30 - 5:30PM</td>
            <td></td>
            <td>4:30 - 5:30PM</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="thead-light">
            <th>Adult Noon Class</th>
            <td>12:00 - 1:00PM</td>
            <td></td>
            <td>12:00 - 1:00PM</td>
            <td></td>
            <td>12:00 - 1:00PM</td>
            <td></td>
            <td></td>
          </tr>
          <tr class="thead-light">
            <th>Adult Evening Class</th>
            <td>5:30 - 6:30PM</td>
            <td>5:30 - 6:30PM</td>
            <td>5:30 - 6:30PM</td>
            <td>5:30 - 6:30PM</td>
            <td>5:30 - 6:30PM</td>
            <td></td>
            <td></td>
          </tr>
          <tr class="thead-light">
            <th>Adult Morning Class</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>9:00 - 10:30AM</td>
            <td></td>
          </tr>
          <tr class="thead-light">
            <th>Kobudo Class</th>
            <td></td>
            <td>6:30 - 7:30PM</td>
            <td></td>
            <td>6:30 - 7:30PM</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
        <iha-section [hType]="'h3'" [title]="'Adult Classes'">
          <p>9 classes are held per week, Monday to Saturday. Joining the dojo allows
            you to attend any/every class you choose.</p>
        </iha-section>
        <iha-section [hType]="'h3'" [title]="'Youth Classes'">
          <p>Youth classes are held Tuesdays and Thursday from 4:30-5:30 pm. The recommended age range is 8-13, but exceptions
          can be made for younger, eager students.</p>
        </iha-section>
        <iha-section [hType]="'h3'" [title]="'Kobudo (Weapons) Classes'">
          <p>Kobudo classes are held Tuesday and Thursday evening immediately following the regular class.
            Weapons practiced include Bo and Sai.</p>
        </iha-section>
      </iha-section>
      <iha-section [title]="'Location'" [hType]="'h2'">
        <p>Original Okinawa Karate is located at</p>
        <p><b>2018 East Michigan Avenue, Lansing MI 48912</b>.</p>
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
        <iha-section [hType]="'h3'" [title]="'Telephone'">
          <p>You can also call the dojo during class hours at
            <a href="tel:5174823217">(517) 482-3217</a>.
          </p>
        </iha-section>
        <iha-section [hType]="'h3'" [title]="'Meet us in Person'">
          <p>Visitors are always welcome to stop in during class hours and observe and
            talk to an instructor, no appointment necessary. Please use the front door.</p>
          <p>If this is your first time to the dojo, feel free to just watch, or bring comfortable clothing
            if you want to participate in a <b>trial class</b>. If you are interested in taking a trial class,
            please arrive at least ten minutes before class begins so that we can meet you and get you situated.</p>
        </iha-section>
      </iha-section>
    </iha-section>
  `
})
export class OriginalOkinawaKaratePageComponent {}
