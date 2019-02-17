import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-navbar",
  // TODO set .active on active navbar item
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <a class="navbar-brand" routerLink="/">Home <!-- TODO beikoku icon --></a>

      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" [routerLink]="'original-okinawa-karate'">Lansing Dojo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="'sensei-iha'">Sensei Iha</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"
               id="navbarDropdownMenuLink"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
              Association
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" routerLink="association/affiliate-dojos">Affiliate Dojos</a>
              <a class="dropdown-item" routerLink="association/membership">Become a Member</a>
              <a class="dropdown-item" routerLink="association/documents">Documents & Forms</a>
              <div class="dropdown-divider"></div>
              <h1 class="dropdown-header">Tookachi 2019 Resources</h1>
              <a class="dropdown-item" target="_blank" href="http://ihatookachi2019.com/">Tookachi2019.com</a>
              <a class="dropdown-item" routerLink="association/tookachi/roster">Roster</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="events">Events</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"
               id="navbarDropdownMenuLink"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
              History
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" routerLink="history/timeline">Timeline</a>
              <!--<a class="dropdown-item" routerLink="history/lineage">Lineage</a>--> <!--TODO-->
              <a class="dropdown-item" routerLink="history/matsumura-sokon">Matsumura Sokon</a>
              <a class="dropdown-item" routerLink="history/itosu-anko">Itosu Anko</a>
              <a class="dropdown-item" routerLink="history/gusukuma-shinpan">Gusukuma Shinpan</a>
              <!--<a class="dropdown-item" [routerLink]="''">Tokuda Anbun</a>--> <!--TODO-->
              <!--<a class="dropdown-item" [routerLink]="''">Motobu Choki</a>--> <!--TODO-->
              <a class="dropdown-item" routerLink="history/chibana-choshin">Chibana Choshin</a>
              <a class="dropdown-item" routerLink="history/miyahira-katsuya">Miyahira Katsuya</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="glossary">Glossary</a>
          </li>
        </ul>
      </div>
    </nav>
  `
})
export class NavbarComponent { }
