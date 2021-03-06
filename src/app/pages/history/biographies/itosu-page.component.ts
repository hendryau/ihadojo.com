import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Itosu Anko'" [subTitle]="'1831-1915'">
      <p>A foremost disciple of Bushi Matsumura, Yasutsune "Anko" Itosu
        was educated in the Chinese classics and art of calligraphy and held
        the position of Secretary for the Administrative Office of the Ryukyu
        Kingdom. His prominent students (Kentsu Yabu, Gichin Funakoshi, Chomo
        Hanashiro, Chotoku Kyan, Choshin Chibana, Anbun Tokuda, Chojo Oshiro,
        Kenwa Mabuni, Shinpan Gusukuma) would influence karate-do for many
        years to come.</p>
      <p>Within the "Ten Articles of Karate," (the letter submitted in
        1908 by Anko Itosu, to the education department of Okinawa Prefecture,
        petitioning the introduction of karate into the regular public school
        curriculum), essential characteristics of Shorin-ryu are detailed. In
        Shorin-ryu, natural and relaxed stances and breathing methods are
        taught along with a unique method of taking in power and releasing it.
        The practitioner takes in power from inside outward, making
        concentration of power easy and which, combined with the quickness of
        movement, increases the force of an attack.</p>
      <iha-section [title]="'The Articles of Karate'" [hType]="'h2'" [subTitle]="'by Anko Itosu, October, the forty-first year of Meiji'">
        <p>Karate is not of Confucian or Buddhist origin. Shorin and Shorei
          schools were originally introduced from China into Okinawa. Each of the
          two styles has its strength, thus both should be retained.</p>
        <img class="img-fluid mb-3" src="assets/biographies/itosu/ten-articles-of-karate.jpg">
        <ol>
          <li>You should not practice karate only for the purpose of
          developing your physical strength. What is essential is to serve your
          sovereign and your parents at the risk of your life in case of
          emergency. If you should involve in a fight with a robber or a rough
          neck by any chance, you should ward off a blow. You should not harm
          him.</li>
          <li> By practicing karate one can develop a strong body and his
          fists and feet can be used as weapons. Thus if boys are trained in
          their youths, they will become men of special ability. Such men of
          martial arts can make contributions to the country as soldiers if need
          be. When he defeated Napoleon at Waterloo, Wellington said, "Today's
          victory is the outcome of lad's hard training on a training ground in
          England." A well put saying.</li>
          <li>To master karate in a short time is extremely difficult. The
          proverb goes that practice makes perfect. If you practice for one or
          two hours every day, you will not only become physically strong but
          master the art of karate by the end of three or four years of training.</li>
          <li>When you do makiwara-tsuki, keep these in mind: lower your
          shoulders, chest out, keep your feet and centralize your "ki" on the
          abdomen. Do the tsuki practice in this manner for one hundred or two
          hundred times.</li>
          <li>When you assume a karate posture, bear these in mind:
          straighten your back, lower your shoulders, keep your feet, centralize
          your "ki" on the abdomen and harden the whole muscle of your body in
          such a way that the whole force is pulled toward the abdomen.</li>
          <li>Learn various moves. But study when and how certain moves are
          applied and then practice the moves. There are many secrets handed down
          by word of mouth regarding stop moves and counter moves.</li>
          <li>Study moves. Consider which move is good for building physical
          strength and which one is good for kumite.</li>
          <li>You should practice karate in the following manor: glare,
          lower your shoulders, and harden muscles as though you were actually
          engaged in a fight. Practice in this way, then you will be able to move
          naturally in case of a hand-to-hand fight.</li>
          <li>Do not put too much strain on yourself while you are
          practicing, otherwise you will get bloodshot and your face will turn
          red. These are signs of over-practice which will ruin your health in
          time.</li>
          <li>Many karate masters enjoyed longevity in the past. Through
          karate one can build muscles, promote digestion, improve the
          circulation of blood. All of these contribute to the long of life.
          Therefore karate should be introduced into course work as the basis of
          physical education at the schools. Thus a lot of karate experts will be
          produced in the future.</li>
        </ol>
      </iha-section>
    </iha-section>
  `
})
export class ItosuPageComponent { }
