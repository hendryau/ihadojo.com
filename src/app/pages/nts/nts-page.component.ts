import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .gra { color: grey; font-weight: bold }
    .blu { color: navy; font-weight: bold }
    .ora { color: orange; font-weight: bold }
  `],
  template: `
    <iha-section [hType]="'h1'" [title]="'National Training Seminar'">
      <img src="assets/events/2021/wide.jpg" class="w-100 mb-3">
      <p>The National Training Seminar, also known as NTS, is an annual event where beginning to advanced karate practitioners from around the globe can join Sensei Iha and other outstanding teachers for an exceptional learning opportunity.</p>
      <iha-section [title]="'NTS 2021: Celebrate Together!'">
        <p>At this year’s virtual NTS 2021 event, Beikoku Shidokan Karatedo members and friends will celebrate the Association’s 45th Anniversary together!</p>
        <p>Register to access two days of educational karate webinars with top instructors who will take your karate passion to the next level! Students (ages 13 and up) of all ranks and experience levels are encouraged to attend.</p>
        <p>Be a part of this amazing worldwide online training weekend!</p>
        <iha-section [title]="'Dates'" [hType]="'h2'">
          <p>
            <b>Friday, July 30, 2021</b> (5:00pm - 7:00pm, EDT)<br/>
            <b>Saturday, July 31, 2021</b> (9:30 am - 7:00pm, EDT)
          </p>
        </iha-section>
        <iha-section [title]="'Registration'" [hType]="'h2'">
          <p>Registration is now open! Discounted early registration is available until <b>June 30.</b></p>
          <p><a target="_blank" href="{{registrationLink}}">{{registrationLink}}</a>
        </iha-section>
        <iha-section [title]="'T-Shirts'" [hType]="'h2'">
        <p>Order an NTS 2021 T-shirt and celebrate Beikoku Shidokan's 45th anniversary in style!</p>

        <p><b>ORDERING DEADLINE: JUNE 10</b></p>

        <p><b>US &amp; International Orders</b>: Order from our Custom Ink group site (<a href="{{tShirtLink}}" target="_blank">{{tShirtLink}}</a>) by the <b>June 10th deadline</b>. Your order will be shipped directly to the address you specify. All Custom Ink shirts will be shipped the same time; est. 2 week delivery in US and 4-5 weeks for International. Orders shipped outside of the US will have additional shipping and customs costs.</p>
        
        <p><b>Canadian Orders:</b> Contact Sensei Fortunato Restagno (<a href="mailto:fortun@rogers.com">fortun@rogers.com</a>) from the Grand River Karate dojo to find out about purchasing shirts with reduced shipping and no customs fees for Canada.</p>
        </iha-section>
        <iha-section [title]="'Keynote Instructors'" [hType]="'h2'">
        <div><b>Seikichi Iha, 10th Dan</b>, Beikoku Shidokan Karatedo</div>
        <div><b>Masatoshi Miyazato, 10th Dan</b>, Karatedo Miyazato Okinawa Shorinryu Shidokan Argentina</div>
        <div><b>Joachim Laupp, 9th Dan</b>, Okinawa Shorinryu Shidokan Karatedo Germany</div>
        <div><b>Marcelo Yonamine, 7th Dan</b>, Shidokan Brasil</div>
        <div><b>Mark McCloud, 8th Dan</b>, Beikoku Shidokan Karatedo</div>
        <div><b>Paul Snader, 8th Dan</b>, Beikoku Shidokan Karatedo</div>
        <br/>
        </iha-section>
        <iha-section [title]="'Schedule'" [hType]="'h2'">
          <p>The schedule was last updated on 7/27/2021.</p>
          <iha-section [title]="'Friday, July 30th'" [subTitle]="'5:00pm - 8:30pm EDT'" [hType]="'h3'">
            <table class="table">
              <tbody>
                <tr>
                  <td>5:00pm (30 minutes)</td>
                  <td class="ora">Welcome / Opening message</td>
                </tr>
                <tr>
                  <td>5:30pm (50 minutes)</td>
                  <td class="blu">Sensei Iha</td>
                </tr>
                <tr>
                  <td>6:30pm (50 minutes)</td>
                  <td class="blu">Sensei Snader</td>
                </tr>
                <tr>
                  <td>7:30pm (50 minutes)</td>
                  <td class="blu">Sensei Yonamine (Brazil)</td>
                </tr>
                <tr>
                  <td>8:20pm (10 minutes)</td>
                  <td class="ora">Closing message</td>
                </tr>
              </tbody>
            </table>
          </iha-section>
          <iha-section [title]="'Saturday, July 31st'" [subTitle]="'9:00am - 8:00pm EDT'" [hType]="'h3'">
          <table class="table">
              <tbody>
                <tr>
                  <td>9:00am (30 minutes)</td>
                  <td class="ora">Weclome</td>
                </tr>
                <tr>
                  <td>9:30am (50 minutes)</td>
                  <td class="blu">Sensei Iha</td>
                </tr>
                <tr>
                  <td>10:30am (50 minutes)</td>
                  <td class="blu">Sensei McCloud</td>
                </tr>
                <tr>
                  <td>11:30am (90 minutes)</td>
                  <td class="gra">Lunch break</td>
                </tr>
                <tr>
                  <td>1:00pm (50 minutes)</td>
                  <td class="blu">Sensei Laupp (Germany)</td>
                </tr>
                <tr>
                  <td>2:00pm (50 minutes)</td>
                  <td class="blu">Sensei Miyazato (Argentina)</td>
                </tr>
                <tr>
                  <td>3:00pm (50 minutes)</td>
                  <td class="blu">Sensei Iha</td>
                </tr>
                <tr>
                  <td>4:00pm (60 minutes)</td>
                  <td class="ora">Sensei Iha Celebration</td>
                </tr>
                <tr>
                  <td>5:00pm (120 minutes)</td>
                  <td class="gra">Dinner break</td>
                </tr>
                <tr>
                  <td>7:00pm (60 minutes)</td>
                  <td class="ora">Friendship Celebration</td>
                </tr>
              </tbody>
            </table>
          </iha-section>
        </iha-section>
        <div class="text-center">
          <img src="assets/events/2021/square.jpeg" class="w-75">    
        </div>
      </iha-section>
    </iha-section>
  `
})
export class NtsPageComponent {

  public registrationLink="https://www.eventbrite.com/e/beikoku-shidokan-karatedo-virtual-national-training-seminar-nts-2021-registration-153376311677?aff=erelexpmlt"
  public tShirtLink="https://www.customink.com/g/zjn0-00ce-nmbp"

}
