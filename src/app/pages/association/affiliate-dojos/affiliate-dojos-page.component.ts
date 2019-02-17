import {ChangeDetectionStrategy, Component} from "@angular/core";
import {DOJOS} from "../dojos";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Affiliated Dojos'" [hType]="'h1'">
      <p>The Beikoku Shidokan Association has {{dojos.length}} affiliated dojos.</p>
      <iha-section [title]="'Hombu Dojo'" [hType]="'h2'" [subTitle]="'Association Headquarters'">
        <iha-dojos [type]="'hombu'" [hType]="'h3'"></iha-dojos>
      </iha-section>
      <iha-section [title]="'Shibu Dojos'" [hType]="'h2'" [subTitle]="'Branch Dojos reporting directly to Sensei Iha'">
        <iha-dojos [type]="'shibu'" [hType]="'h3'"></iha-dojos>
      </iha-section>
      <iha-section [title]="'Fukushibu Dojos'" [hType]="'h2'" [subTitle]="'Branch Dojos reporting to a Shibu Dojo'">
        <iha-dojos [type]="'fukushibu'" [hType]="'h3'"></iha-dojos>
      </iha-section>
      <iha-section [title]="'Junshibu Dojos'" [hType]="'h2'" [subTitle]="'Dojos in the process of joining the association'">
        <iha-dojos [type]="'junshibu'" [hType]="'h3'"></iha-dojos>
      </iha-section>
    </iha-section>
  `
})
export class AffiliateDojosPageComponent {

  public dojos = DOJOS;

}
