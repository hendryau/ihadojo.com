import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, TemplateRef} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-filter",
  templateUrl: "filter.component.html",
})
export class FilterComponent<T> implements OnChanges {

  @Input() public array: T[];
  @Input() public filterTitle: string = "Filter";
  @Input() public nothingFoundMessage = "Nothing Found";
  @Input() public itemTemplate: TemplateRef<any>;
  @Input() public buttonTemplate: TemplateRef<any>;
  @Input() public compareFunc: (item1: T, item2: T) => number;
  @Input() public filterFunc: (text: string, item: T, i?: number, arr?: T[]) => boolean;
  @Input() public arrayDivClass: string;
  @Input() public filterPlaceholderText = "Find";

  public readonly filterControl = new FormControl();
  public filteredArray: T[];

  constructor() {
    this.filterControl.valueChanges.subscribe(text => this.applyFilter(text));
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty("array")) {
      this.clear();
    }
  }

  public applyFilter(text?: string): void {
    if (text === undefined) {
      text = this.filterControl.value;
    }

    text = text.toLowerCase().trim();

    this.filteredArray = this.array.slice();

    if (this.filterFunc) {
      this.filteredArray = this.filteredArray.filter(
        (item: T, i: number, arr: T[]) => this.filterFunc(text, item, i, arr));
    }

    if (this.compareFunc) {
      this.filteredArray.sort(this.compareFunc);
    }
  }

  public clear(): void {
    this.filterControl.setValue("");
  }

}
