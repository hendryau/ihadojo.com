import {Injectable} from "@angular/core";
import {IhaEvent} from "../event/events";

@Injectable()
export class DateService {

  public yesterday(): any {
    const yesterday = new Date();
    return yesterday.setDate(yesterday.getDate() - 1);
  }

  public upcomingEvents(events: IhaEvent[]): IhaEvent[] {
    const yesterday = this.yesterday();
    return events.filter(e => new Date(e.endDate || e.date) > yesterday);
  }

  public pastEvents(events: IhaEvent[]): IhaEvent[] {
    const yesterday = this.yesterday();
    return events.filter(e => new Date(e.endDate || e.date) <= yesterday);
  }

}
