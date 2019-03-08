import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-dropdown-nav-item",
  template: `
    <div class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      <a class="dropdown-item" [routerLink]="routerLink">
        <ng-content></ng-content>
      </a>
    </div>
  `
})
export class DropdownNavItemComponent {

  @Input() public routerLink: string;

}
