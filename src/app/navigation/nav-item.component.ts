import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-nav-item",
  template: `
    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      <a class="nav-link" [routerLink]="routerLink">
        <ng-content></ng-content>
      </a>
    </li>
  `
})
export class NavItemComponent {

  @Input() public routerLink?: string;

}
