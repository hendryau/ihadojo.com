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

    footer {
      font-size: 14px;
    }

    footer > div > div {
      padding: 5px 10px;
    }

    @media (max-width: 576px) {
      footer {
        font-size: 12px;
      }

      footer > div > div {
        padding: 3px 5px;
      }

      footer a {
        word-break: break-word;
      }
    }

    @media (min-width: 577px) {
      footer {
        font-size: 14px;
      }
    }
  `],
  template: `
    <div class="wrapper">
      <iha-navbar></iha-navbar>
      <main class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="iha-title">ORIGINAL OKINAWAN KARATE</h1>
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
      <footer class="bg-dark p-3">
        <div class="text-center text-white-50">
          <div>Original Okinawan Karate, LLC<br/>1013 E. Michigan Ave.<br>Lansing, MI 48912</div>
          <div>
            Email: <a class="text-white" href="mailto:mail@ihadojo.com">mail@ihadojo.com</a>
          </div>
          <div>
            Facebook: <a class="text-white" href="https://www.facebook.com/OriginalOkinawaKarateIhaDojo" target="_blank">facebook.com/OrignalOkinawaKarateIhaDojo</a>
          </div>
          <div>
            <a href="https://www.beikokushidokan.com" target="_blank">
              <img src="assets/ropes.png" alt="Beikoku Shidokan" style="height: 130px;">
            </a>
          </div>
          <div>© {{currentYear}} Original Okinawan Karate, LLC</div>
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
