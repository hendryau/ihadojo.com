import {ChangeDetectionStrategy, Component, HostListener, Input, OnInit} from "@angular/core";
import {ResponsiveService} from "../services/responsive.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-responsive-image",
  template: `
    <a *ngIf="url else imgWithoutAnchor" href="{{url}}">
      <ng-container [ngTemplateOutlet]="imgWithoutAnchor"></ng-container>
    </a>
    <ng-template #imgWithoutAnchor>
      <img width="{{currentWidth}}" alt="{{imageAlt}}" src="{{imageSrc}}">
    </ng-template>
  `
})
export class ResponsiveImageComponent implements OnInit {

  @Input() url: string = "";

  @Input() imageSrc: string = "";
  @Input() imageAlt: string = "";

  @Input() public xlWidth: number = 0;
  @Input() public lWidth: number = 0;
  @Input() public mWidth: number = 0;
  @Input() public sWidth: number = 0;
  @Input() public xsWidth: number = 0;

  public currentWidth: number = 0;

  constructor(
    private responsiveService: ResponsiveService
  ) {}

  @HostListener('window:resize', ['$event'])
  public getScreenSize(event?: any): void {
    this.setImageWidth();
  }

  public ngOnInit(): void {
    this.setImageWidth();
  }

  private setImageWidth(): void {
    switch (this.responsiveService.getScreenSize()) {
      case "xl":
        this.currentWidth = this.xlWidth || this.lWidth || this.mWidth || this.sWidth || this.xsWidth;
        break;
      case "l":
        this.currentWidth = this.lWidth || this.mWidth || this.sWidth || this.xsWidth || this.xlWidth;
        break;
      case "m":
        this.currentWidth = this.mWidth || this.sWidth || this.xsWidth || this.lWidth || this.xlWidth;
        break;
      case "s":
        this.currentWidth = this.sWidth || this.xsWidth || this.mWidth || this.lWidth || this.xlWidth;
        break;
      default:
        this.currentWidth = this.xsWidth || this.sWidth || this.mWidth || this.lWidth || this.xlWidth;
    }
  }

}
