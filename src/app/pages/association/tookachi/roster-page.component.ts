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
      [compareFunc]="comparePerson.bind(this)"
      [buttonTemplate]="sortButtons"
    >
      <ng-template #sortButtons>
        <button
          (click)="sortType = 'rank'; filterComponent.applyFilter()"
          (keyup.enter)="sortType = 'rank'; filterComponent.applyFilter()"
          class="btn sort-btn"
          [ngClass]="sortType === 'rank' ? 'active' : ''">
          Rank <i *ngIf ="sortType === 'rank'" class="fa fa-sort-desc"></i>
        </button>
        <button
          (click)="sortType = 'dojo'; filterComponent.applyFilter()"
          (keyup.enter)="sortType = 'dojo'; filterComponent.applyFilter()"
          class="btn sort-btn"
          [ngClass]="sortType === 'dojo' ? 'active' : ''">
          Dojo <i *ngIf="sortType === 'dojo'" class="fa fa-sort-desc"></i>
        </button>
        <button
          (click)="sortType = 'name'; filterComponent.applyFilter()"
          (keyup.enter)="sortType = 'name'; filterComponent.applyFilter()"
          class="btn sort-btn"
          [ngClass]="sortType === 'name' ? 'active' : ''">
          Name <i *ngIf="sortType === 'name'" class="fa fa-sort-desc"></i>
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

  public sortType: "dojo" | "name" | "rank";

  @ViewChild(FilterComponent)
  public filterComponent: FilterComponent<DojoPerson>;

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

  public comparePerson(p1: DojoPerson, p2: DojoPerson): number {
    const rank = this.compareRank(p1, p2);
    const name = this.compareName(p1, p2);
    const dojo = this.compareDojo(p1, p2);

    if (this.sortType === "rank") {
      if (rank === 0) {
        if (name !== 0) {
          return name;
        }
        if (dojo !== 0) {
          return dojo;
        }
      }
      return rank;
    } else if (this.sortType === "name") {
      if (name === 0) {
        if (rank !== 0) {
          return rank;
        }
        if (dojo !== 0) {
          return dojo;
        }
      }
      return name;
    } else if (this.sortType === "dojo") {
      if (dojo === 0) {
        if (rank !== 0) {
          return rank;
        }
        if (name !== 0) {
          return name;
        }
      }
      return dojo;
    }
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
