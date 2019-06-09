import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "iha-navbar",
  // TODO set .active on active navbar item
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="navbar-brand" routerLink="/">Home <!-- TODO beikoku icon --></a>
      </div>
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
          <iha-nav-item [routerLink]="'original-okinawa-karate'">Lansing Dojo</iha-nav-item>
          <iha-nav-item [routerLink]="'sensei-iha'">Sensei Iha</iha-nav-item>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"
               id="navbarDropdownMenuLink"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
              Association
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <iha-dropdown-nav-item [routerLink]="'association/affiliate-dojos'">Affiliate Dojos</iha-dropdown-nav-item>
              <iha-dropdown-nav-item [routerLink]="'association/membership'">Become a Member</iha-dropdown-nav-item>
              <iha-dropdown-nav-item [routerLink]="'association/documents'">Documents & Forms</iha-dropdown-nav-item>
              <div class="dropdown-divider"></div>
              <h1 class="dropdown-header">Tookachi 2019 Resources</h1>
              <a class="dropdown-item" target="_blank" href="http://ihatookachi2019.com/">Tookachi2019.com</a>
              <iha-dropdown-nav-item [routerLink]="'association/tookachi/roster'">Roster</iha-dropdown-nav-item>
              <h1 class="dropdown-divider"></h1>
              <h1 class="dropdown-header">National Training Seminar</h1>
              <iha-dropdown-nav-item [routerLink]="'association/nts'">About</iha-dropdown-nav-item>
            </div>
          </li>
          <iha-nav-item [routerLink]="'events'">Events</iha-nav-item>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"
               id="navbarDropdownMenuLink"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
              History
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <iha-dropdown-nav-item [routerLink]="'history/timeline'">Timeline</iha-dropdown-nav-item>
              <!--<a class="dropdown-item" routerLink="history/lineage">Lineage</a>--> <!--TODO-->
              <iha-dropdown-nav-item [routerLink]="'history/matsumura-sokon'">Matsumura Sokon</iha-dropdown-nav-item>
              <iha-dropdown-nav-item [routerLink]="'history/itosu-anko'">Itosu Anko</iha-dropdown-nav-item>
              <iha-dropdown-nav-item [routerLink]="'history/gusukuma-shinpan'">Gusukuma Shinpan</iha-dropdown-nav-item>
              <!--<a class="dropdown-item" [routerLink]="''">Tokuda Anbun</a>--> <!--TODO-->
              <!--<a class="dropdown-item" [routerLink]="''">Motobu Choki</a>--> <!--TODO-->
              <iha-dropdown-nav-item [routerLink]="'history/chibana-choshin'">Chibana Choshin</iha-dropdown-nav-item>
              <iha-dropdown-nav-item [routerLink]="'history/miyahira-katsuya'">Miyahira Katsuya</iha-dropdown-nav-item>
            </div>
          </li>
          <iha-nav-item [routerLink]="'glossary'">Glossary</iha-nav-item>
        </ul>
      </div>
    </nav>
  `
})
export class NavbarComponent { }
