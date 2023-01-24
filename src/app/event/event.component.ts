import {ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-event",
  template: `
    <div class="card" #cardRef>
      <img *ngIf="imageUrl" class="card-img-top" src="{{imageUrl}}">
      <div class="card-body">
        <h3 class="card-title">
          {{title}}
        </h3>
        <div class="card-subtitle mb-2 text-muted" *ngIf="date">
          <ng-container *ngIf="!endDate && date !== endDate; else multipleDays">
            {{date | date:dateFormatString}}
          </ng-container>
          <ng-template #multipleDays>
            {{date | date:dateFormatString}} - {{endDate | date:endDateFormatString}}
          </ng-template>
        </div>
        <div class="card-text mb-2" [innerHtml]="content"></div>
        <a *ngIf="location !== 'none'" class="card-link">
          {{location || 'Location to be determined'}}
        </a>
        <a *ngIf="url" href="{{url}}" class="card-link">{{url}}</a>
      </div>
    </div>
  `
})
export class EventComponent implements OnChanges {

  @Input() public title: string = "";
  @Input() public date: string  = "";
  @Input() public time: string  = "";
  @Input() public location: string  = "";
  @Input() public endDate: string  = "";
  @Input() public content: string = "";
  @Input() public url: string = "";
  @Input() public imageUrl: string = "";

  @ViewChild("cardRef") cardRef?: ElementRef;

  public dateFormatString: string = "";
  public endDateFormatString: string = "";

  constructor(
    public elementRef: ElementRef,
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    const startDate = new Date(this.date);

    if (!!this.endDate) {
      const endDate = new Date(this.endDate);

      this.dateFormatString = "MMMM d";

      if (endDate.getFullYear() !== startDate.getFullYear() || endDate.getDay() === startDate.getDay()) {
        this.dateFormatString += ", y";
      }

      if (startDate.getHours() > 0) {
        this.dateFormatString += ", h:mm a";
      }

      if (startDate.getDay() === endDate.getDay() &&
          startDate.getMonth() === endDate.getMonth() &&
          startDate.getFullYear() === endDate.getFullYear()) {
        this.endDateFormatString = "h:mm a";
      } else {
        this.endDateFormatString = "MMMM d, y";
      }
    } else {
      if (startDate.getHours() > 0) {
        this.dateFormatString = "MMMM d, y, h:mm a";
      } else {
        this.dateFormatString = "MMMM d, y";
      }
    }
  }

}
