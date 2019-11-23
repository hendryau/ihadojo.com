import {ChangeDetectionStrategy, Component} from "@angular/core";
import {EVENTS, IhaEvent, LAST_UPDATED} from "../../event/events";
import {DateService} from "../../services/date.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Events'">
      <p>There is always a seminar, trip, or dan test around the corner. This is the most up-to-date
      place to check on association events. Whether you're looking for the time, location, or cost of an event,
      you're in the right place.</p>
      <p>If you're planning on travelling far to visit Sensei Iha, make sure to check below to ensure he isn't travelling abroad.</p>
      <p>If you have any questions regarding an upcoming event, or you are hosting an event and would like it added to the list,
      <a href="mailto:mail@ihadojo.com">let us know</a>.</p>
      <iha-section [hType]="'h2'" [title]="'Upcoming Events'">
        <p>Events were last updated on {{lastUpdated | date:'MMMM d, y'}}.</p>
        <iha-events
          [events]="upcomingEvents"
          [noEventMessage]="'There are no scheduled upcoming events'"
        ></iha-events>
      </iha-section>
      <iha-section [title]="'Past Events'" [hType]="'h2'">
        <iha-events
          [events]="pastEvents"
          [noEventMessage]="'There are no past events on record'"
        ></iha-events>
      </iha-section>
    </iha-section>
  `
})
export class EventsPageComponent {

  public readonly upcomingEvents: IhaEvent[];
  public readonly pastEvents: IhaEvent[];
  public readonly lastUpdated = LAST_UPDATED;

  constructor(
    dateService: DateService,
  ) {
    this.upcomingEvents = dateService.upcomingEvents(EVENTS);
    this.pastEvents = dateService.pastEvents(EVENTS);
  }

}
