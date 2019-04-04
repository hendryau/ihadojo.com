import {ChangeDetectionStrategy, Component, ViewChild} from "@angular/core";
import {DojoPerson, ROSTER} from "./roster";
import {FilterComponent} from "../../../filter/filter.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSNgaCMZsGY5TnWhHIRgxeomOoknwOd4s1MyD55B10Rm612w/viewform?embedded=true"
      width="640" height="6277" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    <iha-filter
      [filterTitle]="'Tookachi Roster'"
      [array]="roster"
      [itemTemplate]="rosterTemplate"
      [nothingFoundMessage]="'No one found.'"
      [filterFunc]="filterRoster"
      [compareFunc]="comparePerson"
      [buttonTemplate]="sortButtons"
    >
      <ng-template #sortButtons>
        <button
          (click)="sortByRank = !sortByRank; filterComponent.applyFilter()"
          (keyup.enter)="sortByRank = !sortByRank; filterComponent.applyFilter()"
          class="btn btn-secondary"
          [ngClass]="sortByRank ? 'active' : ''">
          Rank
        </button>
        <button
          (click)="sortByDojo = !sortByDojo; filterComponent.applyFilter()"
          (keyup.enter)="sortByDojo = !sortByDojo; filterComponent.applyFilter()"
          class="btn btn-secondary"
          [ngClass]="sortByDojo ? 'active' : ''">
          Dojo</button>
        <button
          (click)="sortByName = !sortByName; filterComponent.applyFilter()"
          (keyup.enter)="sortByName = !sortByName; filterComponent.applyFilter()"
          class="btn btn-secondary"
          [ngClass]="sortByName ? 'active' : ''">
          Name</button>
      </ng-template>
      <ng-template #rosterTemplate let-item="item">
        <div class="card mb-3">
          <div class="card-body">
            <div class="card-text">
              <img *ngIf="item.photo" class="float-left mr-3" height="125px" src="{{'assets/tookachi/photos/' + item.photo}}">
              <div class="h5">{{item.first_name}} {{item.last_name}}</div>
              <div>{{item.dojo}}</div>
              <div *ngIf="item.country || item.city_state">{{item.city_state}} {{item.country}}</div>
              <div *ngIf="item.rank">{{item.rank}} {{item.rank_type}}</div>
            </div>
          </div>
        </div>
      </ng-template>
    </iha-filter>
  `
})
export class RosterPageComponent {

  public roster = ROSTER;

  public sortByDojo: boolean = false;
  public sortByName: boolean = true;
  public sortByRank: boolean = true;

  @ViewChild(FilterComponent)
  public filterComponent: FilterComponent<DojoPerson>;

  public filterRoster = (text: string, person: DojoPerson): boolean => {
    if (person.first_name && person.first_name.toLowerCase().indexOf(text) >= 0) {
      return true;
    } else if (person.last_name && person.last_name.toLowerCase().indexOf(text) >= 0) {
      return true;
    } else if (person.country && person.country.toLowerCase().indexOf(text) >= 0) {
      return true;
    } else if (person.rank && person.rank.toLowerCase().indexOf(text) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  public comparePerson = (p1: DojoPerson, p2: DojoPerson): number => {
    const rank = this.compareRank(p1, p2);
    const name = this.compareName(p1, p2);
    const dojo = this.compareDojo(p1, p2);

    if (this.sortByRank) {
      if (rank === 0) {
        if (this.sortByName && name !== 0) {
          return name;
        }
        if (this.sortByDojo && dojo !== 0) {
          return dojo;
        }
      }
      return rank;
    }

    if (this.sortByName) {
      if (name === 0) {
        if (this.sortByDojo && dojo !== 0) {
          return dojo;
        }
      }
      return name;
    }

    return this.sortByDojo ? dojo : 0;
  }

  private compareDojo = (p1: DojoPerson, p2: DojoPerson): number => {
    if (p1.dojo > p2.dojo) {
      return 1;
    } else if (p1.dojo < p2.dojo) {
      return -1;
    } else {
      return 0;
    }
  }

  private compareName(p1: DojoPerson, p2: DojoPerson): number {
    const p1Name = p1.last_name + p1.first_name;
    const p2Name = p2.last_name + p2.first_name;

    return p1Name > p2Name ? 1 : -1;
  }

  private compareRank(p1: DojoPerson, p2: DojoPerson): number {
    if (p1.rank_type === p2.rank_type) {
      if (p1.rank_type === "" || p1.rank === p2.rank) {
        return 0;
      }
      if (p1.rank_type === "dan") {
        return p1.rank < p2.rank ? 1 : -1; // highest dan rank first
      }
      if (p1.rank_type === "kyu") {
        return p1.rank < p2.rank ? -1 : 1; // highest kyu rank first
      }
    }
    if (p1.rank_type === "dan") {
      return -1; // p2 is either no rank or kyu
    }
    if (p2.rank_type === "dan") {
      return 1; // p1 is either no rank or kyu
    }
    if (p1.rank_type === "kyu") {
      return (<string>p2.rank_type === "dan") ? 1 : -1; // either p2 is dan or no rank
    }
    return 1; // p1 has no rank, p2 has a rank;
  }

}
