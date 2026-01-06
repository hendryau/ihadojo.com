import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Training Benefits'">
      <p>Besides learning effective techniques for self-defense, the study of karate can have long term health benefits.
      Karate is a highly focused in-person full contact activity that many students feel has helped them cope with and
      reduce the stresses of daily life. Through the use of natural movements of the Shorin Ryu Shidokan style, over time,
      students have noted greater strength, coordination, stamina, balance, agility and general feelings of well-being.
      Many of the dojo's members have enjoyed training through their 60's and beyond!</p>

      <iha-section [title]="'Friendship, Cooperation, Learning'" [hType]="'h3'">
        <p>For our dojo's founder, <a routerLink="/sensei-iha">Seikichi Iha, Hanshi 10th Dan</a>, teaching karate do was much more than teaching self-defense. He viewed it as a way to learn about people through mutual cooperation and a way to form lifelong friendships. Iha Sensei believed that encouraging the development of cooperation, respect, friendship and healthy living through karate is of great importance.</p>

        <p>Iha Sensei expressed his hope that with the help of their training in karate do, students could learn to cope
        with any situation, be persistent, face problems with courage, take care of themselves, realize their optimum
        potential and to feel good about themselves. He frequently told his students that "Friendship and cooperation are
        the most important part of karate." This philosophy will forever be a core dojo value.</p>
      </iha-section>
    </iha-section>
  `
})
export class TrainingBenefitsPageComponent { }
