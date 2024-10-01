import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {HomePageComponent} from "./pages/home/home-page.component";
import {EventsPageComponent} from "./pages/events/events-page.component";
import {OriginalOkinawaKaratePageComponent} from "./pages/original-okinawa-karate/original-okinawa-karate-page.component";
import {NtsPageComponent} from "./pages/nts/nts-page.2024.component";
import {DocumentsPageComponent} from "./pages/association/documents/documents-page.component";
import {SenseiIhaPageComponent} from "./pages/sensei-iha/sensei-iha-page.component";
import {AffiliateDojosPageComponent} from "./pages/association/affiliate-dojos/affiliate-dojos-page.component";
import {MembershipPageComponent} from "./pages/association/membership/membership-page.component";
import {TimelinePageComponent} from "./pages/history/timeline/timeline-page.component";
import {LineagePageComponent} from "./pages/history/lineage/lineage-page.component";
import {MatsumuraPageComponent} from "./pages/history/biographies/matsumura-page.component";
import {ItosuPageComponent} from "./pages/history/biographies/itosu-page.component";
import {GusukumaPageComponent} from "./pages/history/biographies/gusukuma-page.component";
import {ChibanaPageComponent} from "./pages/history/biographies/chibana-page.component";
import {MiyahiraPageComponent} from "./pages/history/biographies/miyahira-page.component";
import {GlossaryPageComponent} from "./pages/glossary/glossary-page.component";
import {RosterPageComponent} from "./pages/association/tookachi/roster-page.component";
import { MasterDanRankPageComponent } from "./pages/association/master-dan-rank/master-dan-rank.component";

const appRoutes = [
  // home
  // {
  //   path: "index.html", // legacy route
  //   redirectTo: "",
  //   pathMatch: "full"
  // },
  // {
  //   path: "index", // legacy route
  //   redirectTo: "",
  //   pathMatch: "full"
  // },
  // {
  //   path: "sitemap.html", // legacy route
  //   redirectTo: "",
  //   pathMatch: "full"
  // },
  // {
  //   path: "sitemap", // legacy route
  //   redirectTo: "",
  //   pathMatch: "full"
  // },
  {
    component: HomePageComponent,
    path: "",
  },

  // // association
  // {
  //   path: "association.html", // legacy route
  //   redirectTo: "association/membership",
  //   pathMatch: "full"
  // },
  {
    path: "master-dan-rank",
    component: MasterDanRankPageComponent,
  },
  // {
  //   path: "association", // legacy route
  //   redirectTo: "association/membership",
  //   pathMatch: "full"
  // },
  {
    component: MembershipPageComponent,
    path: "association/membership",
  },
  // {
  //   path: "association/documents.html", // legacy route
  //   redirectTo: "association/documents",
  //   pathMatch: "full"
  // },
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

  // // history
  // {
  //   path: "history.html", // legacy route
  //   redirectTo: "history/timeline",
  //   pathMatch: "full"
  // },
  // {
  //   path: "history", // legacy route
  //   redirectTo: "history/timeline",
  //   pathMatch: "full"
  // },
  {
    component: TimelinePageComponent,
    path: "history/timeline",
  },
  {
    component: LineagePageComponent,
    path: "history/lineage",
  },

  // // matsumura
  // {
  //   path: "biographies/matsumura", // legacy route
  //   redirectTo: "history/matsumura-sokon",
  //   pathMatch: "full"
  // },
  // {
  //   path: "biographies/matsumura.html", // legacy route
  //   redirectTo: "history/matsumura-sokon",
  //   pathMatch: "full"
  // },
  {
    component: MatsumuraPageComponent,
    path: "history/matsumura-sokon",
  },

  // // itosu
  // {
  //   path: "biographies/itosu", // legacy route
  //   redirectTo: "history/itosu-anko",
  //   pathMatch: "full"
  // },
  // {
  //   path: "biographies/itosu.html", // legacy route
  //   redirectTo: "history/itosu-anko",
  //   pathMatch: "full"
  // },
  {
    component: ItosuPageComponent,
    path: "history/itosu-anko",
  },

  // // gusukuma
  // {
  //   path: "biographies/gusukuma", // legacy route
  //   redirectTo: "history/gusukuma-shinpan",
  //   pathMatch: "full"
  // },
  // {
  //   path: "biographies/gusukuma.html", // legacy route
  //   redirectTo: "history/gusukuma-shinpan",
  //   pathMatch: "full"
  // },
  {
    component: GusukumaPageComponent,
    path: "history/gusukuma-shinpan",
  },

  // // chibana
  // {
  //   path: "biographies/chibana", // legacy route
  //   redirectTo: "history/chibana-choshin",
  //   pathMatch: "full"
  // },
  // {
  //   path: "biographies/chibana.html", // legacy route
  //   redirectTo: "history/chibana-choshin",
  //   pathMatch: "full"
  // },
  {
    component: ChibanaPageComponent,
    path: "history/chibana-choshin",
  },

  // // miyahira
  // {
  //   path: "biographies/miyahira", // legacy route
  //   redirectTo: "history/miyahira-katsuya",
  //   pathMatch: "full"
  // },
  // {
  //   path: "biographies/miyahira.html", // legacy route
  //   redirectTo: "history/miyahira-katsuya",
  //   pathMatch: "full"
  // },
  {
    component: MiyahiraPageComponent,
    path: "history/miyahira-katsuya",
  },

  // // nts
  // {
  //   path: "nts.html", // legacy route
  //   redirectTo: "nts",
  //   pathMatch: "full"
  // },
  {
    component: NtsPageComponent,
    path: "nts",
  },

  // // events
  // {
  //   path: "events.html",
  //   redirectTo: "events",
  //   pathMatch: "full"
  // },
  {
    component: EventsPageComponent,
    path: "events",
  },

  // // glossary
  // {
  //   path: "glossary.html",
  //   redirectTo: "glossary",
  //   pathMatch: "full"
  // },
  {
    component: GlossaryPageComponent,
    path: "glossary",
  },

  // // original okinawa karate
  // {
  //   path: "hombu", // legacy route
  //   redirectTo: "original-okinawa-karate",
  //   pathMatch: "full"
  // },
  // {
  //   path: "hombu.html", // legacy route
  //   redirectTo: "original-okinawa-karate",
  //   pathMatch: "full"
  // },
  {
    component: OriginalOkinawaKaratePageComponent,
    path: "original-okinawa-karate",
  },

  // {
  //   path: "biographies/sensei.html", // legacy route
  //   redirectTo: "sensei-iha",
  //   pathMatch: "full"
  // },
  // {
  //   path: "biographies/sensei", // legacy route
  //   redirectTo: "sensei-iha",
  //   pathMatch: "full"
  // },
  {
    component: SenseiIhaPageComponent,
    path: "sensei-iha",
  }
  // TODO 404 page
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
