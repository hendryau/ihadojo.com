import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {IhaEvent} from "./events";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-events",
  template: `
    <iha-event *ngFor="let evt of events"
       class="mb-3"
       [title]="evt.title!"
       [date]="evt.date"
       [location]="evt.location!"
       [url]="evt.url!"
       [endDate]="evt.endDate!"
       [imageUrl]="evt.imageUrl!"
       [content]="evt.content!">
    </iha-event>
    <p *ngIf="events?.length === 0">{{noEventMessage}}</p>
  `
})
export class EventsComponent {

  @Input() public events: IhaEvent[] = [];
  @Input() public noEventMessage: string = "No Events";

}
