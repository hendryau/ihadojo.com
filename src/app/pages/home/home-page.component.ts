import {ChangeDetectionStrategy, Component} from "@angular/core";
import {EVENTS, IhaEvent} from "../../event/events";
import {DateService} from "../../services/date.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="alert alert-warning mt-2">
      The Dojo is temporarily closed in compliance with the
      <a href="https://www.michigan.gov/coronavirus/0,9753,7-406-98158-521763--,00.html" target="_blank">March 16th Executive Order</a>
      issued by Governor Gretchen Whitmer.</div>
    <iha-section [title]="'Welcome'">
      <img src="assets/iha-shuri-castle.jpg" width="100%" class="mb-3">
      <p>Visitors are always welcome at Original Okinawa Karate (located at 2018 East Michigan Avenue),
        whether you are a prospective new student, traveling Shidokan student, pre-dan test student,
        or just interested in observing. Visitors are always welcome to participate in a Karate class. The dojo
        weekly schedule is <a routerLink="original-okinawa-karate">available here</a>.</p>
    </iha-section>
    <iha-section [title]="'About'">
      <p><img src="assets/iha-miyahira.jpg" width="40%" class="float-left mr-3">
        This is the official website of Seikichi Iha, Hanshi 10th Dan. Sensei Iha has operated his
        dojo in mid-michigan since the late 70s. Born in Okinawa, Sensei Iha has taught traditional
        Okinawan Karatedo for more than 60 years all around the world (including Okinawa, Guam, the Philippines,
        and across the United States). He leads an organization of over 30 dojos from around the world.</p>
      <iha-section [title]="'Original Okinawa Karate'" [subTitle]="'Sensei Iha\\'s Dojo'" [hType]="'h3'">
        <p>Original Okinawa Karate, Sensei Iha's base of operations and the home dojo of the
          North America Shidokan Association, is located in Lansing, Michigan.</p>
      </iha-section>
      <iha-section [title]="'Beikoku Shidokan'" [subTitle]="'North America Shidokan'" [hType]="'h3'">
        <p>Sensei Iha has over 30 dojos that report to him from around the world. Check the list of
          <a routerLink="association/affiliate-dojos">affiliate dojos</a> here to find the one
          nearest you. Is your dojo looking to be apart of a great organization? Beikoku Shidokan
          is open to welcoming new dojos into the organization. If your dojo is interested,
          <a href="mailto:mail@ihadojo.com">Let us know.</a>
        </p>
      </iha-section>
    </iha-section>
    <iha-section [title]="'Upcoming Events'">
      <iha-events [events]="events"></iha-events>
      <p>Events for the entire year can be <a routerLink="events">found here</a>.</p>
    </iha-section>
  `
})
export class HomePageComponent {

  public readonly events: IhaEvent[];

  public readonly eventCount: number = 3;

  constructor(dateService: DateService) {
    this.events = dateService
      .upcomingEvents(EVENTS)
      .slice(0, this.eventCount);
  }

}
