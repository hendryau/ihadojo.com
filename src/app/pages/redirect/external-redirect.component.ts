import {Component, OnInit} from "@angular/core";

@Component({
  template: `
    <iha-section [title]="'Redirecting...'">
      <p>You are being redirected to the Beikoku Shidokan Karatedo Association website...</p>
      <p>If you are not redirected automatically, please click <a href="https://www.beikokushidokan.com" target="_blank">here</a>.</p>
    </iha-section>
  `
})
export class ExternalRedirectComponent implements OnInit {
  ngOnInit(): void {
    window.location.href = 'https://www.beikokushidokan.com';
  }
}
