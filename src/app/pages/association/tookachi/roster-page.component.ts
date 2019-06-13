import {ChangeDetectionStrategy, Component, ViewChild} from "@angular/core";
import {DojoPerson, ROSTER} from "./roster";
import {FilterComponent} from "../../../filter/filter.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    iha-filter {
      display: block;
      margin-bottom: 300px;
    }
  `],
  template: `
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
          (click)="sort('rank'); filterComponent.applyFilter()"
          (keyup.enter)="sortByRank = !sortByRank; filterComponent.applyFilter()"
          class="btn sort-btn"
          [ngClass]="sortByRank ? 'active' : ''">
          Rank <i *ngIf ="sortByRank" class="fa fa-sort-desc"></i>
        </button>
        <button
          (click)="sort('dojo'); filterComponent.applyFilter()"
          (keyup.enter)="sortByDojo = !sortByDojo; filterComponent.applyFilter()"
          class="btn sort-btn"
          [ngClass]="sortByDojo ? 'active' : ''">
          Dojo <i *ngIf="sortByDojo" class="fa fa-sort-desc"></i>
        </button>
        <button
          (click)="sort('name'); filterComponent.applyFilter()"
          (keyup.enter)="sortByName = !sortByName; filterComponent.applyFilter()"
          class="btn sort-btn"
          [ngClass]="sortByName ? 'active' : ''">
          Name <i *ngIf="sortByName" class="fa fa-sort-desc"></i>
        </button>
      </ng-template>
      <ng-template #rosterTemplate let-item="item">
        <div class="card mb-3">
          <div class="card-body">
            <div class="card-text">
              <img *ngIf="item.photo" class="float-left mr-3" height="125px" src="{{'assets/tookachi/photos/' + item.photo}}">
              <div class="h5">{{item.first_name}} {{item.last_name}}</div>
              <div *ngIf="item.rank">{{item.rank | numSuffix}} {{item.rank_type}}</div>
              <div>{{item.dojo}}</div>
              <div *ngIf="item.country || item.city_state">{{item.city_state}} {{item.country}}</div>
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

  public sort(type: "dojo" | "name" | "rank"): void {
    switch (type) {
      case "dojo":
        this.sortByDojo = !this.sortByDojo;
        break;
      case "name":
        this.sortByName = !this.sortByName;
        break;
      case "rank":
        this.sortByRank = !this.sortByRank;
        break;
    }

    // always at least sort by name
    if (!(this.sortByName || this.sortByRank || this.sortByDojo)) {
      this.sortByName = true;
    }
  }

  public filterRoster = (text: string, person: DojoPerson): boolean => {
    let filterString = "";

    if (person.first_name) {
      filterString += "|" + person.first_name.toLowerCase();
    }
    if (person.last_name) {
      filterString += "|" + person.last_name.toLowerCase();
    }
    if (person.country) {
      filterString += "|" + person.country.toLowerCase();
    }
    if (person.city_state) {
      filterString += "|" + person.city_state.toLowerCase();
    }
    if (person.rank) {
      filterString += "|" + `${person.rank} ${person.rank_type}`;
    }
    if (person.dojo) {
      filterString += "|" + person.dojo.toLowerCase();
    }

    return filterString.indexOf(text) >= 0;
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
      if (p1.rank_type === "dan" || p1.rank_type === "jr dan") {
        return Number.parseInt(p1.rank, 0) < Number.parseInt(p2.rank, 0) ? 1 : -1; // highest dan rank first
      }
      if (p1.rank_type === "kyu") {
        return Number.parseInt(p1.rank, 0) < Number.parseInt(p2.rank, 0) ? -1 : 1; // highest kyu rank first
      }
    } else {
      if (p1.rank_type === "dan") {
        return -1; // p2 is no rank kyu, or jr dan
      }
      if (p2.rank_type === "dan") {
        return 1; // p1 is no rank, kyu, or jr dan
      }
      if (p1.rank_type === "kyu") {
        return -1; // p2 is no rank or jr dan
      }
      if (p2.rank_type === "kyu") {
        return 1; // p1 is no rank or jr dan
      }
      if (p1.rank_type === "jr dan") {
        return -1; // p2 is no rank
      }
      if (p2.rank_type === "jr dan") {
        return 1; // p2 is no rank
      }
      return 0;
    }
  }

}
