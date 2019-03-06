import {ChangeDetectionStrategy, Component} from "@angular/core";
import {EVENTS} from "../../event/events";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Welcome'">
      <p>Visitors are always welcome at Original Okinawa Karate (located at 2018 East Michigan Avenue),
        whether you are a prospective new student, traveling Shidokan student, pre-dan test student,
        or just interested in observing. Visitors are always welcome to participate in a Karate class. The dojo
        weekly schedule is <a routerLink="original-okinawa-karate">available here</a>.</p>
    </iha-section>
    <iha-section [title]="'About'">
      <p>This is the official website of Seikichi Iha, Hanshi 10th Dan. Sensei Iha has operated his
        dojo in mid-michigan since the late 70s. Born in Okinawa, Sensei Iha has taught traditional
        Okinawan Karatedo for more than 60 years all around the world (including Okinawa, Guam, the Phillipines,
        and across the United States). He currently leads an organization (Beikoku Shidokan) of over 30 dojos across the world.</p>
      <iha-section [title]="'Original Okinawa Karate'" [subTitle]="'Sensei Iha\\'s Dojo'" [hType]="'h3'">
        <p>Original Okinawa Karate, Sensei Iha's base of operations and the home dojo of the
          North America Shidokan Association, is located in Lansing, Michigan.</p>
      </iha-section>
      <iha-section [title]="'Beikoku Shidokan'" [subTitle]="'North America Shidokan'" [hType]="'h3'">
        <p>Sensei Iha has over 30 dojos that report to him from around the world. Check our list of
          <a routerLink="association/affiliate-dojos">affiliate dojos</a> here to find the one
          nearest you. Is your dojo looking to be apart of a great organization? Beikoku Shidokan
          is open to welcoming new dojos into the orgnaziation. If your dojo is interested,
          <a href="mailto:mail@ihadojo.com">Let us know.</a>
        </p>
      </iha-section>
    </iha-section>
    <!--<iha-section [title]="'News'">-->
      <!--<p>Beikoku Shidokan is celebrating Sensei Iha's 88th Birthday (Tookhachi)-->
        <!--in Okinawa August 21st - August 29th, 2019.</p>-->
    <!--</iha-section>-->
    <iha-section [title]="'Upcoming Events'">
      <p>The next three association events are...</p>
      <iha-events [events]="events"></iha-events>
      <p>Events for the entire year can be <a routerLink="events">found here</a>.</p>
    </iha-section>
  `
})
export class HomePageComponent {

  public events = EVENTS.slice(0, 3);

}
