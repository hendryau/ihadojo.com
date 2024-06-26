import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Sensei Seikichi Iha'" [subTitle]="'Hanshi, 10th Dan'">
      <p> <img src="assets/biographies/iha/iha-kip2.JPG" class="float-left mr-3 w-50">
      A <i>teacher of teachers</i>, Sensei Seikichi Iha began his karate
      training in Okinawa more than 60 years ago, studying under the renowned
      masters, Sensei Shinpan Gusukuma, and Sensei Katsuya Miyahira.</p>
      <!-- TODO change these to Sensei Iha -->
      <p>Before coming to Michigan, Iha Sensei trained students in
      Okinawa, Japan, the Philippines, Guam, and Los Angeles, California. His
      Lansing dojo is now the headquarters for more than 30 North American
      schools and is frequently visited by karate practitioners from around
      the globe.</p>
      <p>Iha Sensei is respected worldwide for his tremendous practical
      knowledge of karate technique as well as for his warm, engaging and
      expert teaching style. As he explains it, for Iha Sensei, teaching
      karate-do is much more than teaching self-defense. It is a way to learn
      about people through mutual cooperation and a way to form lifelong
      friendships. Iha Sensei believes that encouraging the development of
      cooperation, respect, friendship and healthy living through karate is
      of great importance. This philosophy is at the core of his instruction
      and daily interactions with his students.</p>
      <p>Iha Sensei hopes that with the help of their training in
      karate-do, his students can learn to cope with any situation, be
      persistent, face problems with courage, take care of themselves, to
      realize their optimum potential and to feel good about themselves. He
      frequently tells his students that "Friendship and cooperation are the
      most important part of karate."</p>
      <iha-section [title]="'The Iha Dojo'" [hType]="'h2'">
        <!-- TODO get a photo here -->
        <p>Sensei Iha's dojo is located at 2013 East Michigan Ave., in Lansing,
        Michigan USA. Sensei has taught at the Lansing location since
        1975. Class schedules and information can be found
        <a routerLink="/original-okinawa-karate">here</a>.</p>
      </iha-section>
      <iha-section [title]="'About'" [hType]="'h2'">
        <p>Sensei Iha is the senior most practitioner of Okinawa Shorin-ryu
        residing in the United States and is ranked a Hanshi 10th Dan by the
        Okinawa Shorin-ryu Karate-do Association of Naha, Okinawa. He teaches
        Chibana-style shorin-ryu and refers to his method as Okinawa Shorin-ryu
        Shidokan Karatedo. On May 19th 2020, the Okinawa Prefecture Government
        designated him as an Intangible Cultural Asset Holder in the category of
        <i>Okinawa Karate and Kobujutsu</i>, a designation granted to only 20
        karateka ever.</p>
        <p>Iha Seikichi was born in Nishihara City, Okinawa Prefecture on
        July 9, 1932. He presently runs his own dojo, the Original Okinawa
        Karate Dojo, in Lansing, Michigan. He was promoted to Hanshi 10th Dan
        by his teacher, Miyahira Katsuya on March 25, 2001. He is the U.S.
        Branch Chief for the Okinawa Shorin-ryu Karate-do Association.</p>
        <p><img src="assets/biographies/iha/iha-miyahira.png" class="float-left mr-3 w-50">
        Iha began his karate training under his uncle but in 1950 he was
        accepted as a formal student of Gusukuma Shinpan. Gusukuma was a
        student of the famous Itosu Ankoh and was a well respected authority of
        Shuri-te. Since Gusukuma was an educator and a noted acupuncturist, he
        was very particular as to who he would take as a student. He was also
        very strict and scientific in his training and application of
        karate-do.</p>
        <p>Although Gusukuma was physically small in size, he was very
        powerful in his techniques believing that a karate-man worth his salt
        could hit with force equal to three times his own body weight. Gusukuma
        was a stickler on conditioning the body through body contact and
        through the practice of the makiwara punching board. This concept is
        passed on to all of Iha's students.</p>
        <p><img src="assets/biographies/iha/iha-kusanku-dai.jpg" class="float-right ml-3 w-25">
        Iha trained with Gusukuma for four years. After Gusukuma's death
        in 1954, Iha was introduced to his next teacher by his good friend,
        Miyazato Shoei. Iha met Miyahira Katsuya in 1954 and was accepted as a
        student shortly thereafter. Miyahira was very much like Gusukuma in
        that he was a school teacher with a very strict and scientific method
        of teaching karate-do.</p>
        <p>Iha progressed in karate-do at a steady pace so that by 1963 he
        had been promoted to the rank of 5-Dan Shihan in Okinawa Shorin-ryu. At
        that time, Miyahira Katsuya received a request from the Philippine
        Islands asking for a Shorin-ryu instructor. Iha was chosen and spent
        approximately 11 months teaching Shorin-ryu at the dojo of Latino
        Gonzales in Manila.</p>
        <p>Iha returned to Okinawa during the latter part of 1964 and began
        teaching the U.S. Marines stationed at Futenma, Okinawa. At that time
        he was promoted to 6-Dan and opened up his own dojo in his home town of
        Nishihara.</p>
        <p><img src="assets/biographies/iha/iha-1982.jpg" width="33%" class="float-right ml-3">
        In 1967 Iha was promoted to the rank of Kyoshi 7-Dan and sent to
        teach in Los Angeles, CA. Iha initially began his karate teaching at
        the American-Okinawan Club located in Los Angeles. He is recognized as
        the first Okinawan Master Instructor of Shorin-ryu to teach in Southern
        California since 1927 when Yabu Kentsu taught for the same club.</p>
        <p>After teaching shorin-ryu at the American-Okinawan Club for five
        months, he and two other 7-Dans opened up the Shureikan Dojo on Olympic
        Blvd. A year later, Iha went off on his own and opened his Shidokan
        Karate Dojo on West Pico Blvd.</p>
        <p>Iha moved to the Lansing area in April of 1975 and began teaching
        at the Original Okinawa Karate Dojo. In September of 1978 he was
        promoted to Kyoshi 8-Dan. On March 12, 1989 he received his Hanshi
        9th-Dan certification. And on March 25, 2001, Iha was promoted to
        Hanshi 10-Dan by Miyahira Katsuya, making him the highest ranking
        Okinawan residing in the United States. His rank is certified by the
        Okinawa Shorin-ryu Karate-do Association.</p>
      </iha-section>
      <iha-section [title]="'Essential Teachings of Shidokan Karatedo'" [subTitle]="'By Sensei Iha'">
        <img src="assets/biographies/iha/iha-essential-teachings.jpg" class="mx-auto img-fluid d-block mb-3 w-75">
        <!-- TODO get literal translation -->
        <ol>
          <li>Do not show your ability or intention. Be modest in behavior and natural in movement.</li>
          <li>No excessive motion, just natural motion.</li>
          <li>Natural movement has no tension.</li>
          <li>Cooperating during practice (with a partner) leads to natural movement that, although small
          and unseen, yields great martial benefits. It creates an elegance in movement.</li>
        </ol>
      </iha-section>
      <!-- Iha's career list (similar to miyahiras) -->
      <iha-section [title]="'An Interview with Sensei Iha, 1992'" [subTitle]="'by Ernest Estrada'" [hType]="'h2'">
        <p><i><b>Interviewer:</b></i> Sensei, it appears that you favor using the
        makiwara punching post. Can you tell me a little about its use?</p>

        <p><img src="assets/biographies/iha/iha.jpg" class="float-right ml-3 w-25">
        <i><b>Iha:</b></i> There are two kinds of makiwara. One is called a
        Shuri-makiwara and it stands to the height of the instructor's breast
        bone. The other is called a Naha-makiwara. The Naha-makiwara was mainly
        used by goju-ryu practitioners. It stood as high as the instructor's
        solar plexus (the bottom of the breast bone).</p>

        <p>The shorin-ryu practitioner would stand up in the kihon dachi
        (basic short stance) and throw the punch at the board. The goju-ryu
        practitioner would punch from a shikko dachi (square stance).</p>

        <p>The dojo usually had two kinds of makiwara. One was a soft/pliant
        makiwara and the other one was usually a stiff/hard makiwara. The soft
        one was used to develop speed and form while the stiff one was used to
        develop power. Both had to be used. If they were not, then you would
        develop problems with the shoulder. Nowadays, most Okinawan
        practitioners use only the Shuri-style makiwara because the
        Naha-makiwara is too difficult and hard to use.</p>

        <p>The soft makiwara is off center about five inches. The
        measurement is from the tip of the thumb to the tip of the forefinger.
        By punching the soft makiwara, you end up with the board in an upright
        position -- this way you make sure that you are using the correct
        knuckles.</p>

        <p><i><b>Interviewer:</b></i> Can you give me some training pointers in
          the practice of shorin-ryu?</p>

        <p><i><b>Iha:</b></i> There are many. Those that come to mind are... well,
        the punching fist must be horizontal to the ground. The elbow strike is
        also horizontal to the ground. The knife hand block begins like a
        windshield wiper and does NOT come back to the shoulder. All shorin-ryu
        kicks are done with the toes. Sometimes the second toe wraps itself
        around the big toe to reinforce it for kicking.</p>

        <p>The nukite (spear hand) can be done to any part of the body but
        preferably to a soft section. It is a quick motion and you can hit from
        different directions. The idea is that you strike with the fingertips.
        In the knife hand block the hand is not bent but kept straight. Some
        other styles like to bend the block at the wrist. This is much too weak
        and can damage your hand if you really block hard.</p>

        <p>Okinawan karate must have focus in order to be called Okinawan
        karate. Without focus you are doing nothing but sport.</p>

        <p><i><b>Interviewer:</b></i> Sensei, can you say something about your
        Gojushiho kata?</p>

        <!-- TODO add annotation for nakama, nakazato, tokuda-->
        <p><i><b>Iha:</b></i> Nakama's gojushiho and Nakazato's gojushiho are the
        same. They both use the wedge type block. The Tokuda gojushiho is a
        block punch - this is the style that Miyahira-sensei teaches. This
        makes much more sense.</p>

        <p><i><b>Interviewer:</b></i> Are there "secrets" in the teachings of
        shorin-ryu?</p>

        <p><i><b>Iha:</b></i> One of the secrets of shorin-ryu is called the "tan
        gokui." This means the "secret of the lower abdomen." Shorin-ryu
        focuses on natural breathing and not forced or fast breathing. The
        inhalation is slow so as not to show your opponent the rhythm of your
        breathing. You never fully exhale your breath but hold a reserve of air
        in the lower part of your abdomen. Shorin-ryu teaches one to focus on
        one's breathing and to learn to control it.</p>

        <p><i><b>Interviewer:</b></i> Sensei, can you tell me about
        Chibana-sensei. I see that you received your Shihan Menkyo (Teaching
        License) from Chibana-sensei.</p>

        <p><i><b>Iha:</b></i> Yes, Chibana-sensei. Well, Chibana-sensei always
        trained hard. Even when he reached eighty years of age he like to do
        things strongly. Only after the cancer began eating him away did he
        slow down. He was strong as an old man and could still kick and do
        things with power. He was amazing.</p>

        <p>One of Chibana-sensei's favorite sayings was that a "martial
        artist must also be a man of letters." This means that a martial artist
        must also study the writing arts. An example would be calligraphy,
        writing books, the fine arts, painting, etc. Chibana-sensei would
        always stress the body and the mind. The martial artist must also
        exercise the mind through education, research and writing.</p>

        <p>You celebrate the death of Chibana-sensei through a "Taisai"
        every year. You have a party. The master's picture is placed on a table
        and you burn incense. You have a party with food and drink. The
        master's spirit comes to each remembrance wherever it may be held. The
        most important Taisais are the 1st, 2nd and 3rd year. Then the 10th,
        13th, 20th, 23rd, 30th and 33rd. If the individual is remembered on the
        33rd anniversary then the spirit can enter the "gate." The spirit can
        then rest from its wanderings.</p>

        <p><i><b>Interviewer:</b></i> Your first teacher was Gusukuma Shinpan. Not
        much has been said about him in books. Can you tell me something about
        Gusukuma-sensei?</p>

        <p>
          <i><b>Iha:</b></i> Gusukuma Shinpan-sensei was known for his great
          speed in foot movements. He took short steps with great speed -- very
          much like a kendo practitioner. Gusukuma-sensei was known to have run
          side-ways on a wall for five meters without falling. He practiced this
          technique in order to force the feet to move faster. It worked.
        </p>

        <p>Even though Gusukuma-sensei died in 1954, all the old people of
          Shuri and Nishihara remember him well. He had three sons and one
          daughter and had his original dojo in Shuri City. He later moved to
          Naha in 1953 - the year before he died. He had a three tatami dojo
          (sanjo) and did acupuncture on the side to make ends meet.</p>

        <p>You could go to his dojo at any time of the day or night. If he
          was there, he would give you instruction. If he was not there then you
          were expected to train by yourself. He taught the old style of
          shorin-ryu -- sui-te in the Shuri hogen language. He never corrected
          your kata until after you had done it. He had a very good memory and
          would point out all of your mistakes. He always had you do the kata by
          the "no count method." In this way you were made aware of the "rhythm"
          of each kata.</p>

        <p>
          <i><b>Interviewer:</b></i> Please tell me something about your present
          teacher, Miyahira Katsuya-sensei.
        </p>

        <p>
          <i><b>Iha:</b></i> The Shorin-ryu Shidokan Miyahira Dojo was founded by
          Miyahira Katsuya-sensei in 1951. The fortieth year anniversary was held
          in Naha, Okinawa, in March of 1990. Miyahira-sensei started with
          Chibana-sensei in 1933. He was originally a school teacher and was sent
          to Manchuko (Manchuria) during World War 2.
        </p>

        <p>Upon the death of Chibana, Miyahira-sensei received the hanko
          (seals) and presidency of the Okinawa Shorin-ryu Karate-do Kyokai. He
          is still the president and holds annual Taisai celebrations (at the
          time of Chibana's death).</p>

        <p>Miyahira Katsuya-sensei taught differently but just as strictly.
          Miyahira corrected each movement just like Chibana. He was always very
          scientific and always had you do the kata "by the count."</p>

        <p>
          <i><b>Interviewer:</b></i> I understand that Gusukuma-sensei taught the
          pinan kata first as oppose to Chibana-sensei who taught the naihanchin
          kata first.
        </p>

        <p>
          <b><i>Iha:</i></b> It is always a lot easier to teach the pinan kata
          before the naihanchi kata. The naihanchi forms need dedication and
          students find them hard to do initially. Under Gusukuma-sensei the kata
          order was as follows: the kihon 1 & 2; pinan 1-2-3-4-5; pasai-sho and
          kusanku-sho; pasai-dai and kusanku-dai; chinto; gojushiho; followed by
          the naihanchi series. <!-- TODO ask sensei about naihanchi last -->
        </p>

        <p>
          <b><i>Interviewer:</i></b> Sensei, I see that you really stress kicking
          as part of your training. Can you explain some of your ideas about
          kicking? Also, I see that your round house kick is done with the toes
          as oppose to the ball of the foot. Which way is better?
        </p>

        <p>
          <b><i>Iha:</i></b> Kicking is very interesting to me. Americans like to
          kick and Gusukuma Sensei had a fondness for kicking. That is who I
          picked the ideas of kicking from. Now the round house kick, this is
          also done with the toes. The foot is in a straight line with the bones
          of the feet and it is not bent. It is not at a 90 degree angle like a
          heel kick and it is not fully extended as a front toe kick. It is in
          the middle.
        </p>

        <p>The front kick is an excellent kick but it must hinge out to the
          target. The kick is always chambered next to the supporting leg before
          it snaps out. The kick is then retracted to the knee area of the
          supporting leg before it is brought back to the ground.</p>

        <p>In the "old days," the kick was never extended past the extended
          punch. You always kicked within the extended fist. It is too difficult
          to do nowadays and students just ignore this concept.</p>

        <p>Nowadays, the students often seek the easier way and extend their
          kicks way past their fist. This is a sport kick but it is okay for
          those that do not really understand kicking.</p>

        <p>Remember that in kicking, the foot itself must be tight with the
          leg loose. You then "hinged" the kick out. The kick must be chambered
          -- then kick -- and then re-chambered before the foot is set down. All
          the kicks in shorin-ryu are done with the toes. I think that 85% of all
          the kicks are done mid-body. We then do have a thrusting front kick
          made to the head but only about 15% of the time.</p>

        <p>
          <b><i>Interviewer:</i></b> Can you explain something about punching and
          the back fist techniques?
        <p>
          <b><i>Iha:</i></b> The punching is done straight forward with the arm
          being horizontal to the ground. The hand is held "softly" at the side
          -- that is, without tension. The hand goes out with speed and only
          focuses at the end of the punch. Shorin-ryu punching is based on speed
          first and power second. The elbow is at the side and it rests on the
          soft portion of the body between the hip bone and the floating ribs.
          The shoulder is down. The hand fully rotates at the end of the punch.
        </p>

        <p>Remember, it is important, that the fist is tight but the
          shoulder is loose. This is very important.</p>

        <p>The backfist is only found in the naihanchi forms. All the rest
          that look like backfist are different. They are extended and you have a
          tendency to hit with the forearm before you go into the face.</p>

        <p>
          <b><i>Interviewer:</i></b> Can you explain something about blocking?
        </p>

        <p>
          <b><i>Iha:</i></b> Yes, the shoulder. First, the wrist is even with the
          shoulder at the middle block level. In naihanchi shodan, Chibana-sensei
          initially had the back knuckle strike come from the inside. In 1964-65
          he changed it to the outside. This was because of the bunkai. If you
          practice the bunkai with the kata you must do the technique to the
          outside. If you don't practice the bunkai then there is no need to do
          it to the outside.
        </p>

        <p>Blocking takes skill. Initially, while you are young, you
          concentrate on developing the power of the block. As you become older
          and more mature in your technique, you develop soft power. This soft
          power may be a mixture of timing and knowing when and where to block.</p>

        <p>Chibana-sensei was an expert in soft blocking. He would always
          want you to strike at him strongly but his blocking was so smooth and
          correct that you would often lose your balance when he blocked. He
          often stated that breaking the attacker's balance is often more
          important than just merely blocking.</p>

        <p>
          <b><i>Interviewer:</i></b> Can you tell me something about these
          training devices you have here in your dojo? I saw them everywhere in
          Okinawa but very few Americans know anything about them.
        </p>

        <!-- TODO Annotation for chi-ishi -->
        <p>
          <b><i>Iha:</i></b> The most common training device in Okinawa is the
          chi-ishi. Everyone just "knows" how to use it. There are about eight
          different exercises that were taught in the Chibana dojo. They were
          specifically used to develop wrist and arm strength. You would do one
          exercise until you got tired and then switch hands. You would continue
          with the chi-ishi exercises for about 15 to 20 minutes.
        </p>

        <p>The Japanese were always amazed at how well muscled the Okinawans
          were. They did not know about the chi-ishi and the nigiri-game training
          devices. They quickly adopted these methods.</p>

        <p>The chi-ishi comes from China but is practiced by all Okinawan
          styles. It is not practiced in the United States because there are not
          that many who actually trained in Okinawa. The chi-ishi and the
          nigiri-game develop real karate-spirit. It is hard training.</p>

        <img src="assets/biographies/iha/iha-taba.jpg" class="float-left mr-3 w-50">
        <p>The nigiri-game is also a strength building tool and it is used
          to develop the grip. There are about three or four exercises and it is
          also an ancient training device used by all Okinawan practitioners.
          Look at the old karate pictures and you'll see them in the dojo.</p>

        <p>One of the chi-ishi exercises that is not used in shorin-ryu is
          the double arm movement that looks like you're punching with a bo. This
          exercises forces a student to stutter when he moves and this type of
          movement develops bad habits. The goju-ryu practitioners use this
          movement a lot but it is not done by shorin-ryu practitioners.</p>

        <p>The common weight is about 3-5 pounds for a beginner and 7-10
          pounds for an advanced student. If you want to develop more power then
          you can use 22-25 pounds. You must always remember that it is never the
          weight but it is always the quality of the movement. Learn to do it
          correctly and learn to concentrate (focus) on what you do.</p>
      </iha-section>
    </iha-section>
  `
})
export class SenseiIhaPageComponent {}

// TODO sensei's adopted uncle maeshiro (okinawan name)
