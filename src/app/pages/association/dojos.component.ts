import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DOJOS, IhaDojo} from './dojos';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iha-dojos',
  template: `
    <ng-container *ngFor="let dojo of dojos">
      <div class="card mb-3">
        <img *ngIf="dojo.image" class="card-img-top" src="{{dojo.image}}">
        <div class="card-body">
          <h3 class="card-title">{{dojo.name}}</h3>
          <div class="card-subtitle mb-2 text-muted">
            <ng-container *ngFor="let instructor of dojo.instructors; let i = index">
              {{instructor.name}},
              {{instructor.rank}}<ng-container *ngIf="i + 1 !== dojo.instructors.length">,</ng-container>
            </ng-container>
          </div>
          <div *ngIf="dojo.address" class="card-text mb-2">{{dojo.address}}</div>
          <a *ngIf="dojo.url" href="{{dojo.url}}" class="card-link">{{dojo.url}}</a>
          <a *ngIf="dojo.email" href="mailto:{{dojo.email}}" class="card-link">{{dojo.email}}</a>
          <a *ngIf="dojo.email2" href="mailto:{{dojo.email2}}" class="card-link">{{dojo.email2}}</a>
          <a *ngIf="dojo.phone" href="tel:{{dojo.phone}}" class="card-link">{{dojo.phone}}</a>
        </div>
      </div>
      <ng-container *ngIf="dojos.length === 0">
        <p>No Dojos on record.</p>
      </ng-container>
    </ng-container>
  `
})
export class DojosComponent implements OnInit {

  @Input() public type: "hombu" | "shibu" | "fukushibu" | "junshibu";

  @Input() public hType: "h1" | "h2" | "h3" | "h4" = "h1";

  public dojos: IhaDojo[];

  public ngOnInit(): void {
    this.dojos = DOJOS.filter(d => d.type === this.type);
  }

}
