import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSNgaCMZsGY5TnWhHIRgxeomOoknwOd4s1MyD55B10Rm612w/viewform?embedded=true"
      width="100%" height="6277" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  `
})
export class TookachiRegistrationPageComponent {

}
