import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  styles: [`
    h1.iha-title {
      font-size: 40px;
    }

    @media (min-width: 768px) {
      h1.iha-title { font-size: 50px; }
    }

    @media (min-width: 992px) {
      h1.iha-title { font-size: 55px; }
    }

    @media (min-width: 1200px) {
      h1.iha-title { font-size: 55px; }
    }

    h1.iha-title > small {
      display: block;
    }

    footer * {
      padding: 5px 15px 5px 15px;
    }
  `],
  template: `
    <div class="wrapper">
      <iha-navbar></iha-navbar>
      <main class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="iha-title">Original Okinawa Karate
              <small>Beikoku Shidokan Karatedo Association</small>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <iha-responsive-image
              [xlWidth]="200" [mWidth]="100"
              [imageSrc]="'assets/ropes.png'"
              [imageAlt]="'Beikoku Shidokan Logo'"
              [url]="'/'"
            ></iha-responsive-image>
          </div>
        </div>
        <div class="row">
          <div class="
              offset-xl-1 col-xl-10
              offset-lg-1 col-lg-10
              offset-md-2 col-md-8
              offset-sm-2 col-sm-8
          ">
            <router-outlet></router-outlet>
          </div>
        </div>
      </main>
      <footer class="bg-dark p-1">
        <div class="text-center text-white-50">
          <span class="nowrap">Beikoku Shidokan © {{currentYear}}</span>
          <a class="text-white small-br" href="mailto:mail@ihadojo.com">mail@ihadojo.com</a>
        </div>
      </footer>
    </div>
    <!--
      youth karate
      kids karate
      black belt
      okinawa karate
      martial arts
      self defense
      karate club
      lansing karate
      okemos karate
      mid-michigan karate
      michigan state karate
      east lansing karate
      msu karate
      -->
  `,
})
export class AppComponent implements OnInit {

  public currentYear = new Date().getFullYear();

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
