import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Events'">
      <iha-section [title]="'Beikoku Shidokan Karatedo Association Training and Events'">
        <p>The Beikoku Shidokan Karatedo Association was founded by Seikichi Iha, Hanshi, 10th Dan. Developing friendships through karate training and learning together is a core value shared by all the association dojos. The association provides regular opportunities for dojo members to train and learn together and develop friendships through regional workshops and seminars, the National Training Seminar ("NTS") and other educational events.</p>

        <p>Members of affiliated dojos can also sign up for individual memberships which provide access to e-newsletters, seminar discounts and other association benefits. (Association membership is a requirement for participating in the association's dan rank exams.)</p>

        <p>Visit the <a href="https://www.beikokushidokan.com/" target="_blank">Beikoku Shidokan Karatedo Association website</a> to learn more about upcoming seminars and events as well as our rich shared history.</p>
      </iha-section>
    </iha-section>
  `
})
export class EventsPageComponent { }
