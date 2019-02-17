import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-bylaws",
  template: `
    <iha-section [title]="'Association Bylaws'" [hType]="'h2'">
      <p>Restated November 1st, 2018.</p>
      <p>
        <a href="assets/association-documents/association-bylaws.pdf">
          Association Bylaws (PDF)</a><br>
        <a href="assets/association-documents/evaluation-guidelines-for-dan-candidates.pdf">
          Evaluation Guidelines for Dan Candidates (PDF)</a>
      </p>
    </iha-section>
  `
})
export class BylawsSectionComponent { }
