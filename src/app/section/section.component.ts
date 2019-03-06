import {ChangeDetectionStrategy, Component, Input, TemplateRef} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-section",
  template: `
    <section [ngSwitch]="hType">
      <ng-template #headerContent>
        <ng-container *ngIf="title">{{title}}</ng-container>
        <ng-container [ngTemplateOutlet]="titleTemplate"></ng-container>
        <ng-container *ngIf="subTitle || subTitleTemplate">
          <br>
          <small *ngIf="subTitle || subTitleTemplate" class="text-black-50">
            <ng-container *ngIf="subTitle">{{subTitle}}</ng-container>
            <ng-container [ngTemplateOutlet]="subTitleTemplate"></ng-container>
          </small>
        </ng-container>
      </ng-template>
      <h1 *ngSwitchCase="'h1'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h1>
      <h2 *ngSwitchCase="'h2'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h2>
      <h3 *ngSwitchCase="'h3'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h3>
      <h4 *ngSwitchCase="'h4'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h4>
      <h5 *ngSwitchCase="'h5'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h5>
      <ng-content></ng-content>
    </section>
  `
})
export class SectionComponent {

  @Input() public title: string;

  @Input() public titleTemplate: TemplateRef<any>;

  @Input() public subTitle: string;

  @Input() public subTitleTemplate: TemplateRef<any>;

  @Input() public hType: "h1" | "h2" | "h3" | "h4" = "h1";

}
