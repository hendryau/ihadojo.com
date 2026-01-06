import {ChangeDetectionStrategy, Component, Input, TemplateRef} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-section",
  styles: [`
    .image-container-left {
      margin-bottom: 1rem;
    }
    .image-container-right {
      margin-bottom: 1rem;
    }
    @media (min-width: 992px) {
      .image-container-left {
        margin-right: 1.5rem;
        margin-bottom: 0;
      }
      .image-container-right {
        margin-left: 1.5rem;
        margin-bottom: 0;
      }
    }
  `],
  template: `
    <section>
      <ng-template #headerContent>
        <span *ngIf="title" [innerHTML]="title"></span>
        <ng-container *ngIf="titleTemplate" [ngTemplateOutlet]="titleTemplate"></ng-container>
        <ng-container *ngIf="subTitle || subTitleTemplate">
          <br>
          <small *ngIf="subTitle || subTitleTemplate" class="text-black-50">
            <span *ngIf="subTitle" [innerHTML]="subTitle"></span>
            <ng-container *ngIf="subTitleTemplate" [ngTemplateOutlet]="subTitleTemplate"></ng-container>
          </small>
        </ng-container>
      </ng-template>

      <div [ngClass]="imagePosition ? 'd-flex flex-column flex-lg-row align-items-lg-start' : ''" [class.flex-lg-row-reverse]="imagePosition === 'right'">
        <div *ngIf="imagePosition" class="flex-shrink-0 text-center text-lg-start order-2 order-lg-0" [ngClass]="{'image-container-left': imagePosition === 'left', 'image-container-right': imagePosition === 'right', 'd-none d-lg-block': hideImageOnSmall}">
          <ng-content select="[slot=image]"></ng-content>
        </div>
        <div [ngClass]="imagePosition ? 'flex-grow-1 order-0 order-lg-0' : ''">
          <ng-container [ngSwitch]="hType">
            <h1 *ngSwitchCase="'h1'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h1>
            <h2 *ngSwitchCase="'h2'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h2>
            <h3 *ngSwitchCase="'h3'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h3>
            <h4 *ngSwitchCase="'h4'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h4>
            <h5 *ngSwitchCase="'h5'"><ng-container [ngTemplateOutlet]="headerContent"></ng-container></h5>
          </ng-container>
          <ng-content></ng-content>
        </div>
      </div>
    </section>
  `
})
export class SectionComponent {

  @Input() public title: string = "";

  @Input() public titleTemplate?: TemplateRef<any>;

  @Input() public subTitle: string = "";

  @Input() public subTitleTemplate?: TemplateRef<any>;

  @Input() public hType: "h1" | "h2" | "h3" | "h4" | "h5" = "h1";

  @Input() public imagePosition?: "left" | "right";

  @Input() public hideImageOnSmall: boolean = false;

}
