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
    return events
      .filter(e => new Date(e.endDate || e.date) > yesterday)
      .sort(this.sortEvents);
  }

  public pastEvents(events: IhaEvent[]): IhaEvent[] {
    const yesterday = this.yesterday();
    return events
      .filter(e => new Date(e.endDate || e.date) <= yesterday)
      .sort(this.sortEvents);
  }

  public sortEvents(a: IhaEvent, b: IhaEvent): number {
    const aDate = a.endDate || a.date;
    const bDate = b.endDate || b.date;

    return new Date(aDate) > new Date(bDate) ? 1 : -1;
  }

}
