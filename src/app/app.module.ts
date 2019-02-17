import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { EventComponent } from "./event/event.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SectionComponent } from "./section/section.component";
import { EventsComponent } from "./event/events.component";
import { ResponsiveImageComponent } from "./responsive-image/responsive-image.component";

import { ResponsiveService } from "./services/responsive.service";

import { EventsPageComponent } from "./pages/events/events-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { NtsPageComponent } from "./pages/nts/nts-page.component";
import { OriginalOkinawaKaratePageComponent } from "./pages/original-okinawa-karate/original-okinawa-karate-page.component";
import {DocumentsPageComponent} from "./pages/association/documents/documents-page.component";
import {SenseiIhaPageComponent} from "./pages/sensei-iha/sensei-iha-page.component";
import {DojosComponent} from "./pages/association/dojos.component";
import {AffiliateDojosPageComponent} from "./pages/association/affiliate-dojos/affiliate-dojos-page.component";
import {BylawsSectionComponent} from "./pages/association/bylaws-section.component";
import {MembershipPageComponent} from "./pages/association/membership/membership-page.component";
import {TimelinePageComponent} from "./pages/history/timeline/timeline-page.component";
import {LineagePageComponent} from './pages/history/lineage/lineage-page.component';
import {MatsumuraPageComponent} from './pages/history/biographies/matsumura-page.component';
import {ItosuPageComponent} from './pages/history/biographies/itosu-page.component';
import {GusukumaPageComponent} from './pages/history/biographies/gusukuma-page.component';
import {ChibanaPageComponent} from './pages/history/biographies/chibana-page.component';
import {MiyahiraPageComponent} from './pages/history/biographies/miyahira-page.component';
import {GlossaryPageComponent} from './pages/glossary/glossary-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RosterPageComponent} from './pages/association/tookachi/roster-page.component';
import {FilterComponent} from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AffiliateDojosPageComponent,
    BylawsSectionComponent,
    FilterComponent,
    SectionComponent,
    EventComponent,
    EventsComponent,
    NavbarComponent,
    ResponsiveImageComponent,
    HomePageComponent,
    EventsPageComponent,
    DojosComponent,
    OriginalOkinawaKaratePageComponent,
    NtsPageComponent,
    LineagePageComponent,
    TimelinePageComponent,
    MatsumuraPageComponent,
    MiyahiraPageComponent,
    ItosuPageComponent,
    GusukumaPageComponent,
    ChibanaPageComponent,
    MembershipPageComponent,
    DocumentsPageComponent,
    SenseiIhaPageComponent,
    GlossaryPageComponent,
    RosterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ResponsiveService,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
