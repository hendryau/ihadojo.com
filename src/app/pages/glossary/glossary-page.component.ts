import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TERMS, GlossaryTerm} from './terms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-filter
      [filterTitle]="'Glossary'"
      [nothingFoundMessage]="'No terms found.'"
      [array]="terms"
      [arrayDivClass]="'card-columns'"
      [filterFunc]="filterTerms"
      [compareFunc]="compareTerms"
      [itemTemplate]="itemTemplate"
    >
      <ng-template #itemTemplate let-t="item">
        <div class="card">
          <img *ngIf="t.imgUrl" class="card-img-top" src="{{t.imgUrl}}" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title h5">{{t.term}} <span class="text-muted text-nowrap">{{t.kanji}}</span></h2>
            <div class="card-text" [innerHtml]="t.content"></div>
          </div>
        </div>
      </ng-template>
    </iha-filter>
  `
})
export class GlossaryPageComponent {

  public terms: GlossaryTerm[] = TERMS;


  public compareTerms = (t1: GlossaryTerm, t2: GlossaryTerm): number => {
    return t1.term.toLowerCase() > t2.term.toLowerCase() ? 1 : -1;
  }

  public filterTerms = (text: string, term: GlossaryTerm) => {
    if (term.term && term.term.toLowerCase().indexOf(text) >= 0) {
      return true;
    } else if (term.kanji && term.kanji.toLowerCase().indexOf(text) >= 0) {
      return true;
    } else if (term.content && term.content.toLowerCase().indexOf(text) >= 0) {
      return true;
    } else {
      return false;
    }
  }

}
