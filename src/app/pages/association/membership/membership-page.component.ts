import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Membership'">
      <p>The Beikoku Shidokan Association encompasses active members
        training in over 30 affiliated dojos located throughout North America,
        as well as overseas.</p>

      <p>Headquartered in Lansing, Michigan USA, the Association's president is
        Seikichi Iha, Hanshi 10th Dan. Iha Sensei's often-stated goal is the
        continuous promotion of friendship and cooperation among all students of
        Karatedo. Only through this, can one truly practice and grow.</p>

      <p>To accomplish this goal, Iha Sensei maintains an intensive travel
        schedule to stay in touch with all of his students throughout the world.
        For your convenience, his itinerary is listed on the
        <a [routerLink]="'/events'">events page</a>.</p>

      <p>In addition to regular seminars held by affiliated dojos, every summer,
        a <a [routerLink]="'/nts'">National Training Seminar</a> is sponsored by
        the Association's Hombu dojo in Lansing, Michigan. This <i>must-attend</i>
        event attracts participants from around the world.</p>

      <p>Association sponsored training events can be found on the
        <a [routerLink]="'/events'">events page</a>.</p>

      <iha-section [title]="'Benefits'" [hType]="'h2'">
        <p>Your membership in the Beikoku Shidokan Association signifies your support
          of Iha Sensei in helping promote friendship and cooperation to all students of
          karatedo throughout the world. In addition, you'll receive the following member
          only benefits:</p>
        <ul>
          <li>Included in directory of current members</li>
          <li>Black Belt certification (rank prerequisites and testing fee are
            still applicable)</li>
          <li>Discount on association sponsored events</li>
          <li>Discount on Activewear</li>
        </ul>
        <p><a href="assets/association-documents/member-application.pdf">
          Download your application today</a>.</p>
      </iha-section>
      <iha-bylaws></iha-bylaws>
    </iha-section>
  `
})
export class MembershipPageComponent { }
