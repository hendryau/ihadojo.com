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
            <b>Friday, July 30, 2021</b> (5 pm - 7 pm, EDT)<br/>
            <b>Saturday, July 31, 2021</b> (9:30 am - 7 pm, EDT)
          </p>
        </iha-section>
        <iha-section [title]="'Registration'" [hType]="'h2'">
          <p>Link to the NTS-21 registration will be posted here as soon as it's available.</p>
        </iha-section>
        <iha-section [title]="'Keynote Instructors'" [hType]="'h2'">
          <p>Keynote sessions will feature Seikichi Iha, Hanshi, 10th Dan, Beikoku Shidokan Karatedo and other esteemed Shidokan karate teachers. Breakout training sessions will be provided by Senior Instructors from Beikoku Shidokan Association dojos.</p>
        </iha-section>
        <div class="text-center">
          <img src="assets/events/2021/square.jpeg" class="w-75">    
        </div>
      </iha-section>
    </iha-section>
  `
})
export class NtsPageComponent {

//   public registrationLink="https://www.eventbrite.com/e/beikoku-shidokan-karatedo-virtual-national-training-seminar-nts-2020-tickets-112362194348"

}
