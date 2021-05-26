import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
          <p>Keynote sessions will feature Seikichi Iha, Hanshi, 10th Dan, Beikoku Shidokan Karatedo and other esteemed Shidokan karate teachers. Breakout training sessions will be provided by Senior Instructors from Beikoku Shidokan Association dojos.</p>
        </iha-section>
        <iha-section [title]="'Schedule'" [hType]="'h2'">
          <p>The schedule was last updated on 5/21/2021. More details will be added as the date of the event approaches.</p>
          <iha-section [title]="'Friday, July 30th'" [subTitle]="'5:00pm - 8:00pm EDT'" [hType]="'h3'">
            5:00pm (45 minutes)
            <ul>
              <li>Welcome</li>
              <li>Training Segment 1</li>
            </ul>
            6:00pm (45 minutes)
            <ul>
              <li>Training Segment 2</li>
            </ul>
            7:00pm (60 minutes)
            <ul>
              <li>Training Segment 3</li>
              <li>Closing</li>
            </ul>
          </iha-section>
          <iha-section [title]="'Saturday, July 31st'" [subTitle]="'10:00am - 6:00pm EDT'" [hType]="'h3'">
            9:30am (45 minutes)
            <ul>
              <li>Training Segment 1</li>
            </ul>
            10:30am (45 minutes)
            <ul>
              <li>Training Segment 2</li>
            </ul>
            11:30am (90 minutes)
            <ul>
              <li>Lunch Break</li>
            </ul>
            1:00pm (45 minutes)
            <ul>
              <li>Training Segment 3</li>
            </ul>
            2:00pm (45 minutes)
            <ul>
              <li>Training Segment 4</li>
            </ul>
            3:00pm (45 minutes)
            <ul>
              <li>Training Segment 5</li>
            </ul>
            4:00pm (45 minutes)
            <ul>
              <li>Training Segment Six</li>
              <li>Closing</li>
            </ul>
            5:00pm (120 minutes)
            <ul>
              <li>Dinner Break</li>
            </ul>
            7:00pm (60 minutes)
            <ul>
              <li>Freindship Celebration! (Social time with breakout rooms</li>
            </ul>
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
