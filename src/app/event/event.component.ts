import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from "@angular/core";

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
            {{date | date:'MMMM d, y'}}
          </ng-container>
          <ng-template #multipleDays>
            {{date | date: 'MMMM d'}} - {{endDate | date: 'MMMM d, y'}}
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
export class EventComponent {

  @Input() public title: string;
  @Input() public date: string;
  @Input() public location: string;
  @Input() public endDate: string;
  @Input() public content: string;
  @Input() public url: string;
  @Input() public imageUrl: string;

  @ViewChild("cardRef") cardRef: ElementRef;

  constructor(
    public elementRef: ElementRef,
  ) { }

}
