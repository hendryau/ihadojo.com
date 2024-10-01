import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Association Documents'">
      <p>Documents for {{currYear}} are available below.</p>
      <iha-section [title]="'Membership Application'" [hType]="'h2'">
        <p>
          <a href="/assets/association-documents/member-application.pdf">Download (pdf)</a><br>
          <a href="/assets/association-documents/member-application.docx">Download (docx)</a>
        </p>
      </iha-section>
      <iha-section [title]="'Dan Testing Forms'" [hType]="'h2'">
        <p>
          <a href="/assets/association-documents/dan-application.pdf">Download (pdf)</a><br>
          <a href="/assets/association-documents/dan-application.docx">Download (docx)</a>
        </p>
      </iha-section>
      <iha-section [title]="'Kyu Testing Forms'" [hType]="'h2'">
        <p>
          <a href="/assets/association-documents/kyu-application.pdf">Download (pdf)</a><br>
          <a href="/assets/association-documents/kyu-application.docx">Download (docx)</a>
        </p>
      </iha-section>
      <!-- <iha-bylaws></iha-bylaws> -->
    </iha-section>
  `
})
export class DocumentsPageComponent {

  public currYear: number = new Date().getFullYear();

}
