import {ChangeDetectionStrategy, Component} from "@angular/core";
import {DOJOS} from "../dojos";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Dojos'" [hType]="'h1'">
      <iha-dojos></iha-dojos>
    </iha-section>
  `
})
export class AffiliateDojosPageComponent {

  public dojos = DOJOS;

}
