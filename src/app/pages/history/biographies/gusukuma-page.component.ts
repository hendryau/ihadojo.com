import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Gusukuma Shinpan'" [subTitle]="'1890-1954'">
      <p>One of Yasutsune "Ankoh" Itosu's students was Gusukuma Shinpan
        who was also a peer of Chibana Choshin. Gusukuma, also called Shinpan
        Shiroma by the Japanese, is virtually unknown due to the fact that he
        was a very quiet individual who was not interested in spreading the art
        that he so loved. His only concern was to teach good karate and hence
        only had a few dedicated students.</p>
      <iha-section [title]="'Shorin-ryu Training In The 1950\\'s'" [hType]="'h2'">
        <p>Although a peer of Chibana Choshin, very little is said about the
          master technician, Gusukuma Shinpan. He began teaching shortly after
          WWII and was close friends with Miyagi Chojun, Kyoda Jyuhatsu and Kyan
          Chotoku. He taught regularly at Shuri Castle and had a dojo at his home
          in Nishihara City. He was a school teacher by profession but his first
          love was Shuri-style karate.</p>
        <p>One of his former students was Iha Seikichi (who presently
          resides in East Lansing, Michigan) who often talks about his teacher.
          The following are some thoughts concerning how it was like to train in
          the l950's under Gusukuma:</p>
        <p>Training under Gusukuma-sensei was very strict and traditional.
          It was a lot of self-training where he would watch to see how hard you
          wanted to learn. All students would first become an apprentice student
          and help clean the dojo for six months to a year. They could watch
          training but could not take part in receiving instructions.</p>
        <p>When Gusukuma-sensei thought that they were ready, he would then
          tell them to join in. Sensei never actively taught but would have the
          senior students do all the teaching. Sensei would only teach the top
          two or three students and then have them pass on the knowledge. This
          was a very traditional way of teaching.</p>
        <p>During class, sensei would evaluate every student and advise them
          of their weaknesses. He would allow each student to demonstrate two
          kata for him while he watched. Sensei would then tell them that they
          needed work on their stances, or their power, etc. They would then
          train themselves based on sensei's evaluation. Sensei would sometimes
          show a student a technique and then say, "Ha, I showed you something!
          You are very lucky I did this! Now go train!!!"</p>
        <p>Gusukuma-sensei would personally teach the top two or three
          senior students and it was then their responsibility to pass on the
          methods to the rest of the students. One senior would always be there
          to teach while sensei observed or trained by himself. Sensei was about
          5'1" and weighed about 125 pounds. He was extremely strong and trained
          his fists and toes on the makiwara everyday. He believed a karate-man
          must be able to generate power equivalent to three times their own body
          weight with either fist or foot. Needless to say, the students were
          constantly repairing the makiwara punching boards.</p>
        <p>If a student did not train hard, Gusukuma-sensei would tell him
          that he should leave and come back when he was ready to train. If the
          student continued with this attitude, Gusukuma-sensei would tell him
          not to come back unless he was serious about learning and training.
          Sensei was hardest on students that did not listen. He had a good
          memory and would often tell a student to work on his punch or kick or
          kata. If the student did not do this then sensei would bring it to
          their attention and kick him out of the dojo for wasting his time by
          not listening.</p>
      </iha-section>
      <iha-section [title]="'Makiwara Training'" [hType]="'h2'">
        <p>All styles of Okinawan karate-do stress the importance of the
          makiwara board. It is said that training with the makiwara develops
          power through concentration of technique. This ability to "focus" is
          external power developed internally. Through constant training with the
          makiwara the student starts developing confidence in their technique.
          They see that it is stronger than those that have just started and find
          that through this confidence they are really able to punch and kick
          harder.</p>
        <p>This is the usual difference found in Okinawan karate as opposed
          to the others. Their focus is on power - and the power is extracted
          from the makiwara. A lot of people can look good punching the air but
          their power can be seen as lacking or in some cases, non-existent. So,
          through makiwara training, one can readily see the power generated by
          training with these ancient pieces of equipment.</p>
        <p>Gusukuma Shinpan stressed and possessed great power for a man of
          his size (approximately five feet tall). He believed in being able to
          hit the makiwara with the equivalent of three times your own body
          weight. So, if one weighed approximately one hundred pounds, Gusukuma
          felt that this individual must be able to hit with approximately three
          hundred pounds of force.</p>
        <p>Gusukuma strived to developed this kind of power with both hands
          and both feet. He kept this level of power through training with the
          makiwara board and striking it approximately 300 times per day with
          each weapon. He was a firm believer that a measure of a karate person
          was in their ability to produce this kind of power.</p>
      </iha-section>
      <iha-section [title]="'Teaching Methods'" [hType]="'h2'">
        <p>Gusukuma's teaching methods consisted of kata, kata and more
          kata. He believe that kata provided the foundation of the body and
          spirit. He said that the Japanese sword is sharp and beautiful but that
          in order to get to this end (that is, sharp and beautiful) it must be
          pounded and tempered with the sweat of one's body. So the teacher must
          do the same to the student. If the student is dedicated to the hard
          training of Okinawan karate, then he can be molded into something sharp
          and beautiful. After all, Okinawan karate-do, if done correctly, is
          "sharp and very beautiful" to watch. And like a sharp and beautiful
          Japanese sword, it is also very deadly.</p>
      </iha-section>
      <iha-section [title]="'Techniques'" [hType]="'h2'">
        <p>In the kata Kusanku Dai, in the kick and the drop down technique,
          Gusukuma stood supreme. He could kick and travel about eight feet
          before he dropped down.</p>

        <p>Gusukuma changed a number of Itosu's kata and techniques to
          coincide with his own personal "enlightenment." He stated that this is
          a common practice by all karatemen and that it is merely based on human
          nature to try and improve what one has learned. Gusukuma Shinpan had no
          fingernails because of his constant practice of the spear hand
          technique (nukite) on the bamboo bundles that he used as training aids.</p>
      </iha-section>
      <iha-section [title]="'The Bus Driver'" [hType]="'h2'">
        <p>In Okinawa, one of Gusukuma's students was a bus driver. One time
          a drunk got on board the bus and started to cause trouble with the
          passengers by trying to pick a fight. The student yelled at the drunk,
          "do you really want to fight?" The drunk was quick to take up the
          challenge and demanded to fight now. The student then said that he
          would be more than glad to show him his fighting prowess. At this the
          drunk became very angry and demanded that the driver open the door so
          that they could go at it. When the door opened the drunk stormed off
          and readied himself by taking off his coat. As the drunk got off, the
          student just simply smiled, quickly closed the door of the bus and
          drove off with the drunk in hot pursuit. After a several hundred feet
          run, the drunk fell and threw up on himself. The driver had nothing to
          prove to the drunk or to himself. All the passengers laughed and told
          the bus driver that he had used good strategy.</p>
      </iha-section>
      <iha-section [title]="'Gusukuma\\'s Family'" [hType]="'h2'">
        <p>Gusukuma Shinpan has three sons and one daughter that are still
          alive today. During WWII he received a severe concussion from the
          American bombing that continued to bothered him for the rest of his
          life. He use to have severe headaches centered around the back of his
          right ear. The first son is presently a school teacher, the second son
          is handicapped from falling three stories on his back and his last son
          is presently a fireman. None of Gusukuma's sons have equalled their
          father in his karate skill but the first and the third son are strong
          enough to teach. None do.</p>
      </iha-section>
      <iha-section [title]="'Dying'" [hType]="'h2'">
        <!-- was sensei there at gusukuma's final class? what were gusukumas other students like? -->
        <p>Gusukuma Shinpan always told his students that he would refuse to
          become bedridden or get to a point where he could not take care of
          himself. On the day of his death, he taught class and trained for two
          hours. He ate a light dinner and went to bed early. Three hours later,
          when his wife checked in on him, they found that he had died in his
          sleep. That day his students stated that Gusukuma had spoken of his own
          death. He had said, "My body is strong but everyday my will gets even
          stronger. I will pick my day and die at peace with no long illness or
          discomfort for my family. Wait and see."</p>
      </iha-section>
      <iha-section [title]="'Gusukuma The Teacher'" [hType]="'h2'">
        <p>Gusukuma Shinpan was a school teacher and very educated while
          Chibana Choshin never finished high school. He saw the practice of
          karate as a hobby and never accepted payment for lessons. It should be
          noted that the common way of paying an instructor during the 1930s,
          1940s and 1950s was to bring food for all to share after training.</p>
      </iha-section>
      <iha-section [title]="'Gusukuma\\'s Trip to Japan'" [hType]="'h2'">
        <p>Just before the war and when Gusukuma Shinpan was in his prime he
          vacationed in Japan and saw a martial arts demonstration. He watched a
          group of female yari (spear) experts who had a dojo by his home in
          Tokyo. He was so impressed by their focus that he decided to take
          lessons in the yari from the female Sensei.</p>
        <p>Gusukuma then went to her dojo and requested lessons. He also
          stated that he would only be in Japan for about three months because he
          was a high school teacher in Okinawa and that he had to return to
          teach. The teacher then gave him a wooden yari and showed him how to
          perform "nuki" (a spear thrust). He was then told to practice for about
          two or three hours.</p>
        <p>Gusukuma continued to go to the dojo every day for three months
          and the only technique he practiced was the "nuki." Just before he
          returned to Okinawa, he asked the Sensei if he was doing well and
          whether he should practice other techniques. She replied that he was
          doing well but that he needed more practice before he could learn
          another technique. He then asked her what was the average time it took
          to go on to another technique. She replied, "about three years."</p>
        <p>At the end of his stay in Japan, Gusukuma once again approached
          his Sensei to advise her he was returning to Okinawa. He thanked her
          for her time and stated that he would continue to practice and would be
          back next year.</p>
        <p>She then took a long look at the great Gusukuma and said, "I'm
          glad that you'll continue to practice. We all need to do this in order
          to learn the WAY. Thank you for your efforts and good-bye." She then
          walked away.</p>
      </iha-section>
      <iha-section [title]="'Gusukuma\\'s Considerations'" [hType]="'h2'">
        <p>Gusukuma Shinpan often spoke of the eight considerations in
          kicking and the four considerations of the punch.</p>
        <iha-section [title]="'Considerations for Kicking'" [hType]="'h3'">
          <ol>
            <li>When kicking in kata or kumite, the back must be straight and
              true so as to allow you to punch if blocked.</li>
            <li>The quickest kicks are of the snapping variety.</li>
            <li>The kata kicks are performed with the toe-tipped foot.</li>
            <li>The most important kick is that done to the chudan (middle)
              area.</li>
            <li>Consider the knee the "hinge" of the kick.</li>
            <li>The ankle must be strong in kicking as the wrist is strong in
              punching.</li>
            <li>The leg is loose and flexible while the toes are tight. Just
              like a punch, the arm is loose while the fist is tight.</li>
            <li>When kicking, kick with both legs.</li>
          </ol>
        </iha-section>
        <iha-section [title]="'Considerations for Punching'" [hType]="'h3'">
          <ol>
            <li>The large knuckle finger and the thumb squeeze the index
              finger in a good fist.</li>
            <li>In making a strong fist, the index finger is folded first.</li>
            <li>Punching is done with a loose arm and tight fist.</li>
            <li>You strike with the index knuckle first.</li>
          </ol>
        </iha-section>
      </iha-section>
      <!-- TODO where does this footnote go? -->
      <!--<p class="foot-notes">Submitted courtesy of Ernest Estrada, Okinawa-->
        <!--Shorinryu Kyoshi</p>-->
      <iha-section [title]="'Iha Sensei\\'s Training with Gusukuma'" [hType]="'h2'">
        <p>In 1950, Seikichi Iha was accepted to begin the formal study of
          karate with Shinpan Gusukuma (the kanji of his family name are also
          pronounced "Shiroma" in Japan), a student of Anko Itosu, at his dojo in
          Shuri City. Shinpan Gusukuma was well educated-working as a school
          teacher and also known for his skills as an acupuncturist. A student of
          Anko Itosu, Shinpan Gusukuma also studied under many other master
          teachers in different styles. He selected Shorin-ryu as his primary
          interest. Sensei Iha explains that in the past, Okinawan karate
          students might study with a variety of teachers. Someone would hear
          about a person who was good at a particular kata or technique and then
          go ask that person to teach him.</p>
        <p>Iha notes that due to Gusukuma's schedule as a school
          teacher-teaching a few hours every day with summers off-he was able to
          concentrate on advancing his own practice of karate. A friend of Iha's
          encouraged him to begin karate with Gusukuma who, at that time, was in
          his 60's.</p>
        <iha-section [title]="'Getting There'" [hType]="'h3'">
          <p>Twice a week after work, Iha walked two hours from his home in
            Nishihara to the Gusukuma dojo. Iha often didn't have a chance to eat
            before leaving for class. He'd attend class and walk the two hours back
            home. Whenever possible, students would bring whatever food they had to
            share. In 1953, the year before he died, Gusukuma moved the dojo to
            Naha which was an even longer walking distance for Iha - all the way to
            the west coast of the island.</p>
          <p>At this time in Okinawa, Sensei Iha explains, walking was just
            about the only way to get from place to place. Car travel was
            difficult-the roads were so narrow in places a driver would have to
            back out if someone came the other way. Even if a person had access to
            a car, gas wasn't easy to find. Any travel required a lot of planning
            so most people didn't go far from their homes-but there were many who
            dreamed about being able to travel the island in their lifetime.
            Gusukuma was one. Iha tells a story about when his teacher decided to
            walk to the northern tip of the island-a difficult task since there
            were few roads in that part of the island then. To do this, Sensei
            Gusukuma had to write out his itinerary for every day of walking,
            contact people and arrange where to send food in advance. Planning took
            a couple of years.</p>
        </iha-section>
        <iha-section [title]="'The Gusukuma Dojo'" [hType]="'h3'">
          <p>Iha remembers Sensei Gusukuma's dojo at Shuri as being a very
            small room. Only one student could demonstrate kata in front of him at
            a time. Students might often have to back up from the wall to complete
            a kata. There could be as many as 6 or 7 students in a class waiting
            for a turn to show their teacher the "homework" lessons they had been
            practicing. Gusukuma's later dojo in Naha was larger- a "three tatami"
            room (approx. 9' x 9').</p>
        </iha-section>
        <iha-section [title]="'Strong Mind, Strong Body'" [hType]="'h3'">
          <p>Gusukuma practiced Zen concentration and could maintain intense
            focus of his thoughts for long periods of time. He would often be
            completely absorbed in a game of Go (Chinese chess) when Iha arrived
            for class. Not wanting to disturb his teacher, Sensei Iha remembers
            practicing karate and leaving without Gusukuma breaking concentration
            on his game. His teacher asked him at the next class, "Why didn't you
            come to class last time?"</p>
          <p>Iha describes Gusukuma as being extremely agile ("like an Olympic
            gymnast - he could do three spins from a bar hanging from his arms") and
            able to focus his punches so that 100 pounds of body weight could exert
            300 pounds of power. This power was achieved through daily training of
            hands and feet using the makiwara punching board. He would often say
            that if you see someone you think is skilled and want to be as good as
            them, watch how they practice. If they practice something 10 times, you
            must practice it 100 times. Iha recalls that Gusukuma's constant
            practice of spear hand technique (nukite) by striking bundles of bamboo
            had caused the nails to drop off all his fingers.</p>
        </iha-section>
        <iha-section [title]="'Traditional Learning - One Step At a Time'" [hType]="'h3'">
          <p>After each class, Sensei Iha recalls that he would go home and
            work on his karate homework for a couple days or more-returning to
            class only when he felt he could successfully demonstrate the lesson
            his teacher had given him. Sensei Gusukuma expected his students to
            intensively study and learn one thing at a time. Learning new material
            progressed slowly and methodically and required students to really
            learn and practice each new concept in great depth, then demonstrate
            their knowledge before moving on to the next lesson. One class might be
            only half of one pinan kata with the next class or more working on the
            same thing over and over again. (At this time in the Okinawan dojos,
            first year students might typically only learn Kihon Kata 1-3 and
            Naihanchi.)</p>
          <p>The following story was related to Sensei Iha by Shinpan Gusukuma
            and Iha has retold it to his bo students to point out the importance of
            patience and practice. Shinpan Gusukuma went to Japan on his summer
            school teaching break. While there he wished to train in the naginata.
            He met with a teacher and explained what he wanted to learn. She showed
            him how to do the nuki (spear thrust) and told him to practice this
            technique 2 to 3 hours a day. Every day when he came to the teacher's
            dojo, she told him to practice the nuki technique, then she left. He
            practiced like this for his entire vacation. When it was time to return
            home, he asked his teacher how long it would take for the average
            student to learn the nuki and be able to go on to the next technique.
            She replied, "Oh, usually three years."</p>
        </iha-section>
      </iha-section>
    </iha-section>
  `
})
export class GusukumaPageComponent { }
