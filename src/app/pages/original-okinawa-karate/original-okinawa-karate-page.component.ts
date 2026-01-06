import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Classes & Instructors'">

      <iha-section [title]="'Our Classes'" [hType]="'h2'">

        <iha-section [title]="'What should I do the first time I visit the dojo?'" [hType]="'h3'">
          <p>If this is your first dojo visit, you are welcome to just watch class, or if you'd like to participate in a free trial class, bring comfortable clothing. Please arrive at least ten minutes before class is scheduled to begin so that we can meet you and help get you situated. The instructor will show you what to do during class and answer any questions you might have.</p>
        </iha-section>

        <iha-section [title]="'What is a typical class like?'" [hType]="'h3'">
          <p>Classes at the dojo include students of all learning levels working together in a friendly, cooperative and respectful environment. The senior instructor organizes each class based on the curriculum developed by our founder, Iha Sensei, taking into account the learning needs of every student.</p>

          <p>Class begins with the instructor signaling everyone to line up by "obi" (belt) level then the class respectfully bows towards the dojo's "shomen" (wall where images of the historical teachers from our lineage are displayed.) Bowing shows respect for our teachers – past and present -- and to each other. It also helps quiet our minds in preparation for learning.</p>

          <p>Next are basic warmup exercises followed by group "kata" practice (historical forms containing foundational movements and techniques of the Shorin Ryu Shidokan karate.) The kata are practiced in order from beginning to advanced. When students have done all the kata for their obi level with the larger group, they step to the side and wait for the instructor to assign a senior to work with them.</p>

          <p>Following kata practice, the instructor guides students through partnered training appropriate for their learning level — such as basic kicking, punching and blocking drills, 2-person "kumite" (pre-arranged sparring drills) or multi-person "bunkai" (the analysis of kata applications).</p>

          <p>Class ends as it began with the instructor asking students to line up and then all bow out together. This is a good time for each student to silently reflect on what was learned in class — what you did well and what you could work on so you can do better next time. ("Homework" to practice on your own.)<br>
          After class formally ends, everyone in the dojo jumps in and participates in "soji" (cleaning) to take care of our training space.</p>

          <p>There's a great feeling generated when everyone in the dojo has been working hard and doing their best while training together during class! We look forward to what the next class may bring – opportunities to learn or refine our skills; sharing classes with new, old or visiting dojo members; building friendships through our karate practice. As our founder, Iha Sensei would often say, the feeling that "every day is a good day!"</p>
        </iha-section>

      </iha-section>

      <iha-section [title]="'Our Instructor Team'" [hType]="'h2'">
        <p>The dojo's instructor team is a dedicated group of long term senior students of our dojo's founder, Seikichi Iha, Hanshi, 10th Dan. Each senior instructor offers unique insights from their decades of training experience with Iha Sensei and time assisting in running dojo classes under his guidance. All dojo instructors volunteer their time and expertise to collectively support the dojo's mission of carrying forward the teachings of our founder, Iha Sensei.</p>

        <p><a href="https://www.beikokushidokan.com/kip-bio" target="_blank">Kip Barker, Hanshi 10th Dan</a>, Iha Sensei's most senior student, who taught with him at the dojo for decades, now serves as the senior advisor to the <a href="https://www.beikokushidokan.com" target="_blank">Beikoku Shidokan Karatedo Association</a>. "Sensei Kip" continues to be a valued source of knowledge and inspiration to all our instructors.</p>
      </iha-section>

    </iha-section>
  `
})
export class OriginalOkinawaKaratePageComponent {}
