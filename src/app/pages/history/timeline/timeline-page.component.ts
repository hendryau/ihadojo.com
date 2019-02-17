import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, HostListener,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';
import {IhaEvent} from '../../../event/events';
import {TIMELINE_EVENTS} from './timeline-events';
import {ResponsiveService} from '../../../services/responsive.service';
import {EventComponent} from '../../../event/event.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .timeline {
      background: linear-gradient(
        to right,
        transparent 0%,
        transparent calc(50% - 0.81px),
        black calc(50% - 0.8px),
        black calc(50% + 0.8px),
        transparent calc(50% + 0.81px),
        transparent 80%
      );
    }
  `],
  template: `
    <iha-section [title]="'Beikoku Shidokan Timeline'"> <!-- TODO subtitle -->
      <p>Okinawa is the birthplace of karatedo, a cultural treasure and oral tradition that has
        spread throughout the world and is practiced by millions. The Beikoku Shidokan story is only
        one of the many threads within the diverse and rich living tapestry of traditions encompassed
        by Okinawan karatedo. The following history chronicles some of the teachers and events that
        played key roles in the development of the Shidokan branch of Okinawan Shorin-ryu.</p>
      <ng-container *ngFor="let evt of events; let i = index">
        <div class="timeline">
          <iha-event
            [title]="getTitle(evt)"
            [content]="evt.content"
            [location]="'none'"
            [imageUrl]="evt.imageUrl"
            [ngClass]="getClass(i)"
          ></iha-event>
        </div>
      </ng-container>
      <iha-section [title]="'Sources'" [hType]="'h2'">
        <ol>
          <li>"Okinawa Karate Kobudo Graph," Okinawa Prefecture Board of Education, 1995</li>
          <li>Article by Morinobu Maeshiro commemorating Katsuya Miyahira's receipt of the
            1989 Award for Distinguished Services from the Japan Martial Arts Council.
            Published in 1990 Masters Demonstration Program, "3rd Karate-do Bugeisai"</li>
          <li>Okinawa Karatedo History article by Seikichi Iha, published in the "20th
            Anniversary Beikoku Shidokan Shorin-ryu Celebration Program," 1996</li>
          <li>"Okinawan Karate," by Mark Bishop, Tuttle Publishing, 1999</li>
          <li>Katsuya Miyahira article, 1972</li>
          <li>Interviews and research by Ernest Estrada, 1985-1992</li>
          <li>"Karate-do History and Philosophy" by Takao Nakaya, 1986</li>
          <li>40th Anniversary Shido-kan Dojo, Okinawa Shorin-ryu Demonstration Program, 1992</li>
          <li>"All Okinawa Karate Federation," website: http://206.191.29.157/zokr/timeline.htm
            (link no longer exists), To-de Communications, 1997</li>
          <li>"The Techniques of Okinawa, Shorin-ryu Karate," by Latino H. Gonzales, 1965</li>
          <li>"Kuden no Waza ni Semare," Gekkan Karatedo, June 2000, Tokyo: Fukushodo, pp. 3-7, 20-37</li>
          <li>"The First Appearance of Karate in Okinawa's School System," Michihara S. and Yen Y.,
            originally presented at the International Seminar of Physical Education and Sports History,
            26-30 September, 1978 in Tokyo</li>
          <li>"Tales of Okinawa's Great Masters," by Shoshin Nagamine, Tuttle Publishing, 2000</li>
          <li>Interviews with Seikichi Iha by Mark McCloud and Marian Reiter, October 2000 to May 2001</li>
          <li>"Koden Ryukyu Karatejutsu," by Iwai T., 1992, Tokyo: Airyudo. *Published on Iha Dojo
            Web site: ihadojo.com</li>
        </ol>
      </iha-section>
    </iha-section>
  `
})
export class TimelinePageComponent implements AfterViewInit {

  constructor(
    private cdr: ChangeDetectorRef,
    private responsiveService: ResponsiveService,
    private renderer: Renderer2,
  ) { }

  public events: IhaEvent[] = TIMELINE_EVENTS;

  @ViewChildren(EventComponent)
  private eventRefs: QueryList<EventComponent>;

  public ngAfterViewInit(): void {
    this.cdr.markForCheck();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event): void {
    this.cdr.markForCheck();
  }

  public getTitle(event: IhaEvent): string {
    if (!!event.endDate) {
      return `${event.date} - ${event.endDate}`;
    } else {
      return event.date;
    }
  }

  public getClass(i: number): string {
    if (this.responsiveService.isMedium() ||
        this.responsiveService.isSmall() ||
        this.responsiveService.isXtraSmall()) {
      this.setCardMargins(i, true);

      return "col-sm-12 timeline";
    }

    this.setCardMargins(i);

    return i % 2 === 0 ? "col-md-5 timeline" : "offset-md-7 col-md-5 timeline";
  }

  public setCardMargins(i: number, clear = false): void {
    if (this.eventRefs) {
      const previousEventComponent = this.eventRefs.find((x, i2) => i2 === i - 1);

      const currEventComponent = this.eventRefs.find((x, i2) => i2 === i);

      if (!!previousEventComponent) {
        const margin = previousEventComponent.elementRef.nativeElement.offsetHeight  * .34;

        const marginString = clear ? "0px" : `-${margin}px`;

        this.renderer.setStyle(
          currEventComponent.cardRef.nativeElement, "marginTop", marginString
        );
      }
    }
  }

}
