import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .list { 
        text-align: center;
        background-image: url('/assets/beikoku-shidokan-vertical.png');
        background-repeat: no-repeat;
        background-size: 150px;
        background-position: center 60px;
      }
      .rank-kanji {
        margin-top: 20px;
      }
      .rank { 
        margin-top: 0px;
        margin-bottom: -10px;
        font-size: 19px;
        color: gray;
        font-weight: bold;
      }
      .disclaimer {
        margin-top: 50px;
      }
      hr {
        border-top: 1px solid red;
        max-width: 200px;
        margin-bottom: 5px;
      }
      p {
        max-width: 600px;
        margin: 0 auto;
        margin-bottom: 5px;
      }
      .pres {
        font-size: 20px;
        font-weight: bold;
      }
      .pres.sub {
        font-weight: initial;
      }
      .masterful-design {
        font-weight: 500;
        font-size: 16px;
        max-width: 600px;
        margin: 0 auto;
        margin-bottom: 5px;
      }
      .flex {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 750px;
      }
      @media screen and (max-width: 1000px) {
        .flex {
          height: auto;
        }
      }
      .group>* {
        flex: 1 1 80px;
      }
    `
  ],
  template: `
  <div class="list">
    <p>The following students have been promoted to Master Ranking by</p>
    <div class="pres">President, Hanshi 10th Dan, Seikichi Iha</div>
    <div class="pres sub">Beikoku Shidokan Karatedo Association</div>
    <div class="masterful-design">Holder of Okinawa Prefectural Intangible Cultural Asset in Karatedo Designated by Okinawa Prefecture</div>
    <p>These individuals are recognized for their many years of dedication, training, and promoting Iha Sensei's
    guiding principles of Friendship, Cooperation, and Learning.</p>
    <a href="/assets/association-documents/master-dan-rank-chart.pdf">Download (pdf)</a><br>
    
    <div class="flex">
      <div class="group">
        <div class="rank-kanji">範士 10 段</div>
        <div class="rank">HANSHI, 10<sup>th</sup> DAN</div>
        <hr/>
        <div>Kip Barker</div>
      </div>

      <div class="group">
        <div class="rank-kanji">範士  9 段</div>
        <div class="rank">HANSHI, 9<sup>th</sup> DAN</div>
        <hr/>
        <div>David Senak</div>
        <div>Michael Senak</div>
        <div>Jim Kass</div>
        <div>Joseph Kalikow</div>
        <div>Steve Thompson</div>
        <div>Robert Curtis</div>
        <div>Lisa Schwartz</div>
        <div>Gus Kouklis</div>
        <div>Lawrence Schwartz</div>
        <div>Robert Menders</div>
        <div>Paul Snader</div>
        <div>Mark McCloud</div>
        <div>Allen Mayne</div>
      </div>

      <div class="group">
        <div class="rank-kanji">教士 8 段</div>
        <div class="rank">KYOSHI, 8<sup>th</sup> DAN</div>
        <hr/>
        <div>Aldo Martinez</div>
        <div>Alwin Henderson</div>
        <div>Kirt Butler</div>
        <div>Roy Paul</div>
        <div>Frank Samples</div>
        <div>Pauline Lee</div>
        <div>Louis Shoha</div>
        <div>Michael Dantuma</div>
        <div>Matthew Hubinger</div>
      </div>

      <div class="group">
        <div class="rank-kanji">教士 7 段</div>
        <div class="rank">KYOSHI, 7<sup>th</sup> DAN</div>
        <hr/>
        <div>Sharon Basinger</div>
        <div>Harold Armour Jr.</div>
        <div>Ken Carpenter</div>
        <div>Marian Reiter</div>
        <div>Thomas Pavlik</div>
        <div>Daniel Kasischke</div>
        <div>Mitchel Cooperman</div>
        <div>Margaret Paul</div>
        <div>Caryl Akamichi</div>
        <div>Anthony Buscemi</div>
        <div>Fortunato Restagno</div>
        <div>Yujiro Uza</div>
        <div>Vicent Bolognini</div>
        <div>Laura Chartier</div>
        <div>Robert Chartier</div>
        <div>Scott Morey</div>
        <div>Mark Talbot</div>
        <div>Amit Michaeli</div>
        <div>Mason Senak</div>
        <div>Michael Powers</div>
      </div>

      <div class="group">
        <div class="rank-kanji">師範 6 段</div>
        <div class="rank">SHIHAN, 6<sup>th</sup> DAN</div>
        <hr/>
        <div>Michael Jankovich</div>
        <div>Tetua Ioane</div>
        <div>Michael Nugent</div>
        <div>Randall Hall</div>
        <div>David Wolf</div>
        <div>Alan Sevrey</div>
        <div>Abby Schwartz</div>
        <div>Stuart McCracken</div>
        <div>Lonnie Schwartz</div>
        <div>Alex Agbay</div>
        <div>David McCreight</div>
        <div>Sucheta Shoha</div>
        <div>Lawrence Cowlan</div>
        <div>John Bono</div>
        <div>Donald Smith</div>
        <div>Thomas Fitzpatrick</div>
        <div>AnnMarie Snader</div>
        <div>Andre Cabaero</div>
        <div>Gary Newton</div>
        <div>Matthew Senak</div>
      </div>
    </div>
    <div class="disclaimer">Students are listed by rank and then age.</div>
  </div>
  `
})
export class MasterDanRankPageComponent {

}
