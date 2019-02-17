import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {HomePageComponent} from "./pages/home/home-page.component";
import {EventsPageComponent} from "./pages/events/events-page.component";
import {OriginalOkinawaKaratePageComponent} from "./pages/original-okinawa-karate/original-okinawa-karate-page.component";
import {NtsPageComponent} from "./pages/nts/nts-page.component";
import {DocumentsPageComponent} from "./pages/association/documents/documents-page.component";
import {SenseiIhaPageComponent} from "./pages/sensei-iha/sensei-iha-page.component";
import {AffiliateDojosPageComponent} from "./pages/association/affiliate-dojos/affiliate-dojos-page.component";
import {MembershipPageComponent} from "./pages/association/membership/membership-page.component";
import {TimelinePageComponent} from './pages/history/timeline/timeline-page.component';
import {LineagePageComponent} from './pages/history/lineage/lineage-page.component';
import {MatsumuraPageComponent} from './pages/history/biographies/matsumura-page.component';
import {ItosuPageComponent} from './pages/history/biographies/itosu-page.component';
import {GusukumaPageComponent} from './pages/history/biographies/gusukuma-page.component';
import {ChibanaPageComponent} from './pages/history/biographies/chibana-page.component';
import {MiyahiraPageComponent} from './pages/history/biographies/miyahira-page.component';
import {GlossaryPageComponent} from './pages/glossary/glossary-page.component';
import {RosterPageComponent} from './pages/association/tookachi/roster-page.component';

// TODO add legacy routes
const appRoutes = [
  {
    component: HomePageComponent,
    path: "",
  },
  {
    component: MembershipPageComponent,
    path: "association/membership",
  },
  {
    component: DocumentsPageComponent,
    path: "association/documents",
  },
  {
    component: AffiliateDojosPageComponent,
    path: "association/affiliate-dojos",
  },
  {
    component: RosterPageComponent,
    path: "association/tookachi/roster",
  },
  {
    component: TimelinePageComponent,
    path: "history/timeline",
  },
  {
    component: LineagePageComponent,
    path: "history/lineage",
  },
  {
    component: MatsumuraPageComponent,
    path: "history/matsumura-sokon",
  },
  {
    component: ItosuPageComponent,
    path: "history/itosu-anko",
  },
  {
    component: GusukumaPageComponent,
    path: "history/gusukuma-shinpan",
  },
  {
    component: ChibanaPageComponent,
    path: "history/chibana-choshin",
  },
  {
    component: MiyahiraPageComponent,
    path: "history/miyahira-katsuya",
  },
  {
    component: NtsPageComponent,
    path: "nts",
  },
  {
    component: EventsPageComponent,
    path: "events",
  },
  {
    component: GlossaryPageComponent,
    path: "glossary",
  },
  // TODO 404 page
  {
    component: OriginalOkinawaKaratePageComponent,
    path: "original-okinawa-karate",
  },
  {
    component: SenseiIhaPageComponent,
    path: "sensei-iha",
  }
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [RouterModule.forRoot(
    appRoutes
  )],
})
export class AppRoutingModule { }
