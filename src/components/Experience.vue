<template>
  <div class="experience-page" id="experience">
    
    <h1 class="experience-page__title">выставка «опыт настоящего»</h1>

    <div class="experience-page__wrapper first">
      <div class="experience-page__download-wrapper">
        <!-- <resize-sensor @resize="resize" width="1141px" height="800px"><img src="@/assets/image/experience/foto-archive/1exp.png" alt="foto-board"></resize-sensor> -->
        <!-- <div v-resize @resize="onResize"><img src="@/assets/image/experience/foto-archive/1exp.png" alt="foto-board"></div> -->
        <img src="@/assets/image/experience/foto-archive/1exp.png" alt="foto-board">


        <a href="require('../assets/image/experience/foto-archive.7z')" download class="experience-page__download-btn">скачать полный архив</a>
      </div>
        
      <div class="experience-page__text first">
        <p>
          Материалом для выставки послужили изображения, сохранившиеся на пленках фотоархива Василия Стахевича Мариничева (1926 г., д. Подрезово Семеновского уезда
          Нижегородской губернии — 2002 г. Петербург), многие годы работавшего в одном<br />из институтов Ленинграда заведующим фотолабораторией. Из 5000 изображений<br />мы
          выбрали для проекта чуть менее двухсот, относящихся к 1950-1960м годам. Предметом визуального исследования был досуг: время, предоставленное самому себе и тем людям,
          которые с тобой его разделяют. 
        </p>
        <p>
          Фотографии из архива В. С. Мариничева, старые снимки 1950-х — начала 1960-х гг. Текст — Светлана Адоньева, куратор проекта.
        </p>
      </div>
      
    </div>
  
    <img src="@/assets/image/experience/foto-archive/main_exp.png" alt="main-foto" class="experience-page__big-foto">
 
    <div class="experience-page__foto-block">
      <!-- <img src="@/assets/image/experience/foto-archive/2exp.png" alt="MARINICHEV-foto">
      <img src="@/assets/image/experience/foto-archive/3exp.png" alt="MARINICHEV-foto">
      <img src="@/assets/image/experience/foto-archive/4exp.png" alt="MARINICHEV-foto"> -->

      <Gallery />
    </div>

    <div class="experience-page__quote">
      <div class="experience-page__line-up">
        <img src="@/assets/image/experience/quotesUp.png" alt="" class="quotes">
        <div class="experience-page__line"></div>
      </div>

      <div class="experience-page__quote-text">
        Качество свободного времени, как нам кажется,
        обеспечено величинами иного масштаба,
        нежели эпоха и социальная страта. Этот проект
        – попытка их делать различимыми
      </div>
      <div class="experience-page__line-down">
        <div class="experience-page__line"></div>
        <img src="@/assets/image/experience/quotesDown.png" alt="" class="quotes">
      </div>
    </div>
   
    <div class="experience-page__wrapper second">

      <div class="experience-page__text second">
        <p>
          Среди множества фотографий из семейных архивов, которые я попросила у своих друзей и коллег для работы над темой свадьбы,
          меня зацепили несколько из фотоархива семьи Мариничевых. Они не имели отношения к теме моего исследования, просто попались
          среди прочих отсканированных фотографий. Тридцать девять изображений. Что-то в них было захватывающее, на них хотелось смотреть.
          Разглядывание их приводило в дивное состояние-настроение.
        </p>
        <p>
          Этим состоянием-настроением хотелось делиться с другими: я показывала их на занятиях со студентами Школы документального кино и театра
          Марины Разбежкиной и Михаила Угарова. Время от времени я выкладывала некоторые из них на своей странице в фейсбуке: я возвращалась к этим
          фотографиям, когда мне хотелось перевести дыхание. В них не было ничего особенного.
        </p>
      </div>
      
      <img src="@/assets/image/experience/foto-archive/5exp.png" alt="foto-board">

    </div>

    <div class="experience-page__foto">
      <div class="experience-page__foto-block small">
        <img src="@/assets/image/experience/foto-archive/6exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/7exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/8exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block small">
        <img src="@/assets/image/experience/foto-archive/9exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/10exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/11exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block small">
        <img src="@/assets/image/experience/foto-archive/12exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/13exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/14exp.png" alt="MARINICHEV-foto">
      </div>
    </div>
    
    <img src="@/assets/image/experience/foto-archive/15exp.png" alt="MARINICHEV-foto" class="experience-page__big-foto">
    
    <div class="experience-page__wrapper third">

      <img src="@/assets/image/experience/foto-archive/16exp.png" alt="foto-board">

      <div class="experience-page__text third">
        <p>
          Мальчик с кроликом и щенком сидит на диване и улыбается. Сначала ты видишь мальчика, потом щенка и лишь после этого обнаруживаешь, что на руках у мальчика кролик.
          Молодые мужчины дурачатся перед фотоаппаратом: залезли на камень посреди лужи вместе с двумя мальчишками и принимают позы. Полуголый малыш несет ягодины на блюдце,
          девочка постарше присела на корточки и смотрит куда-то сквозь него, а на заднем плане на них обоих смотрит женщина, остановившись с ведром в руках. Мальчишки идут
          по железнодорожным рельсам, раскинув руки для равновесия: двое в тюбетейках, один в фуражке. На залитой солнцем деревенской улице две женщины и о чем-то разговаривают,
          одну из них перекрывает фигура проходящего мимо них бородатого мужика.
        </p>
        <p>
          Три загорающие на одеялах женщины смотрят на что-то, чего мы не видим, а стоящий над ними мальчик смотрит на одну из них. Собака смотрит туда же, куда и мальчик.
          Собака на цепи, которая обмотана вокруг его голого торса. Два подростка в светлых рубашках, застегнутых на все пуговицы, позируют фотографу на фоне деревенского дома.
        </p>
      </div>
      
    </div>

    <div class="experience-page__quote">
      <div class="experience-page__line-up">
        <img src="@/assets/image/experience/quotesUp.png" alt="" class="quotes">
        <div class="experience-page__line"></div>
      </div>

      <div class="experience-page__quote-text">
          Рассматривая фотографию одну за другой,<br />
          я описываю мир, в котором все как-то очень<br />
          ладно и хорошо устроено. Люди в этом мире<br />
          как дома, в которых живут: в них свет и тепло
      </div>
      <div class="experience-page__line-down">
        <div class="experience-page__line"></div>
        <img src="@/assets/image/experience/quotesDown.png" alt="" class="quotes">
      </div>
    </div>

    <div class="experience-page__foto">
      <div class="experience-page__foto-block small">
        <img src="@/assets/image/experience/foto-archive/17exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/18exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/19exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block small">
        <img src="@/assets/image/experience/foto-archive/20exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/21exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/22exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block small">
        <img src="@/assets/image/experience/foto-archive/23exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/24exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/25exp.png" alt="MARINICHEV-foto">
      </div>
    </div>

    <div class="experience-page__wrapper fourth">

      <div class="experience-page__text fourth">
        <p>
          В них что-то совершается — размеренное и&nbsp;самодостаточное. А еще люди-дома основательно и уверенно размещены в&nbsp;пространстве.
          Оно им дается без труда, где бы они не находились, оно их надежно подхватывает.
        </p>
        <p>
          И не менее надежно они охвачены связью друг с другом, у них есть какие-то общие дела и общие основания жизни. И я понимаю, что качество жизненного мира,
          который открывается мне в этих фотографиях, невероятно высоко. И это не качество эпохи: о них иногда даже трудно судить (1950е) или места (Ленинград,
          поселок Токсово, деревня под Горьким). Качество открывающегося мира обеспечено взглядом фотографа: от него мир не прячется, не сжимается и не представляется.
          Под его взглядом он живет своей жизнью.
        </p>
      </div>
      
      <img src="@/assets/image/experience/foto-archive/26exp.png" alt="foto-board">

    </div>

    <div class="experience-page__foto-block-third">
      <div class="experience-page__foto-block-third big">
        <img src="@/assets/image/experience/foto-archive/27exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block-third small">
        <img src="@/assets/image/experience/foto-archive/28exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/29exp.png" alt="MARINICHEV-foto">
      </div>
    </div>

    <img src="@/assets/image/experience/foto-archive/30exp.png" alt="MARINICHEV-foto" class="experience-page__big-foto">
    
    <div class="experience-page__wrapper fifth">

      <div class="experience-page__text fifth">
        <p>
          Я знала, что автор этих фотографий Василий Стахевич Мариничев, воевал, служил в армии, занимался аэрофотосъемкой, что он родом из-под Горького, откуда еще до войны его
          отец и братья перебрались в Ленинград. Прошло пять лет, и нам удалось познакомиться со всеми фотопленками В. С. Мариничева, которые сохранились. Около тысячи изображений.
        </p>
        <p>
          Скрытое в них послание не дает его объявить: оно тут же превращается во что-то очень банальное, но послание в этих фотографиях точно есть. Может быть так: качество мира,
          его равновесность, самодостаточность и красота обеспечиваются усилием человека, который в нем обитает и его поддерживает.
        </p>
        <p>
          Дар удерживать мир в равновесии и полноте чем-то обеспечен: ты позволяешь миру быть ровно настолько, насколько ты позволяешь быть самому себе. Почувствуем разницу:
          быть или быть кем-то — мужчиной, девушкой, инженером, красавицей, врачом, ветераном войны. Любая номинация после «ты есть» или «я есть» выдергивает мир из настоящего,
          из пребывания в нем, и превращает в параметризованное пространство значений и положений.
        </p>
        <p>
          В узнавании всегда участвует что-то, что было в прошлом: мы опознаем только то, что различаем. А различаем мы только то, что научились различать: наш опыт не свободен.
          Он был как-то и кем-то задан: высказываниями и действиями других людей, которые совершали какие-то операции и тем самым обнаруживали вещи в их связях и отношениях.
          Я опознаю наблюдаемое мною лицо незнакомого человека как лицо ветерана войны, колхозника, пенсионера или мудреца, и, опознав, тут же оказываюсь в безвременье: теперь
          мы можем действовать только по ролям. Как колхозник и горожанин, мудрец и ищущий мудрости, ветеран и тот, кто уважает ветерана за его подвиг.
        </p>
      </div>
      
      <div class="experience-page__foto fifth">
        <img src="@/assets/image/experience/foto-archive/31exp.png" alt="foto-board">
        <img src="@/assets/image/experience/foto-archive/32exp.png" alt="foto-board">
      </div>
      
    </div>
   

    <div class="experience-page__quote">
      <div class="experience-page__line-up">
        <img src="@/assets/image/experience/quotesUp.png" alt="foto-quotes" class="quotes">
        <div class="experience-page__line"></div>
      </div>

      <div class="experience-page__quote-text">
        Но для того, чтобы этот опыт был включен в твой<br />
        мир и стал его фундаментом, нужны другие,<br />
        которые случившийся с тобой мир разделят,<br />
        другие, которые живут на тех же основаниях.
      </div>
      <div class="experience-page__line-down">
        <div class="experience-page__line"></div>
        <img src="@/assets/image/experience/quotesDown.png" alt="foto-quotes" class="quotes">
      </div>
    </div>

    <img class="experience-page__foto-big-alone" src="@/assets/image/experience/foto-archive/33exp.png" alt="MARINICHEV-foto">

    <div class="experience-page__foto">
      <div class="experience-page__foto-block middle">
        <img src="@/assets/image/experience/foto-archive/34exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/35exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/36exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block middle">
        <img src="@/assets/image/experience/foto-archive/37exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/38exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/39exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block middle">
        <img src="@/assets/image/experience/foto-archive/40exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/41exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/42exp.png" alt="MARINICHEV-foto">
      </div>
    </div>
    
    <div class="experience-page__wrapper sixth">

      <img src="@/assets/image/experience/foto-archive/43exp.png" alt="foto-board">

      <div class="experience-page__text sixth">
        <p>
          Откуда берется сила, позволяющая признать себя и других пребывающими в «здесь и сейчас»? Обнаружить себя и других не «ветеранами войны», «колхозниками»
          или же «школьницами», «начинающими клерками», «женщинами не первой молодости», не ролями, а людьми, разделяющими со мной настоящее. Я полагаю, что дар
          просто быть и признавать за миром и людьми право просто быть обеспечен знанием о краях жизни. Такое знание у многих из нас случается как опыт в ситуации
          близкой смерти или понесенной утраты, этот опыт застает тебя врасплох, в одиночестве, не готовым. 
        </p>
        <p>
          Советские родители редко оказывались теми людьми, которые подхватывали своих детей в этом опыте, чаще всего они сами не смогли его ни с кем разделить.
          За миром Василия Стахевича Мариничева, скрывается другой опыт и другое знание, разделенное и согласованное.
        </p>
        <p>
          Ты увидел нечто, понял, что это край, а кто-то старший встал рядом и сказал: «Да, то, что ты видишь — край. Теперь и ты знаешь, что у жизни есть края».
          Разделенное с другими знание о том, что у жизни есть край, дает силу смотреть в настоящее и видеть в нем другого в его полноте.
        </p>
      </div>
      
    </div>

    <div class="experience-page__foto">
      <div class="experience-page__foto-block middle">
        <img src="@/assets/image/experience/foto-archive/44exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/45exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/46exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block middle">
        <img src="@/assets/image/experience/foto-archive/47exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/48exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/49exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block middle">
        <img src="@/assets/image/experience/foto-archive/50exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/51exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/52exp.png" alt="MARINICHEV-foto">
      </div>
    </div>

    <div class="experience-page__big-foto mobile-wrapper">
        <img src="@/assets/image/experience/foto-archive/53exp.png" alt="MARINICHEV-foto"  class="experience-page__big-foto mobile">
    </div>

    <div class="experience-page__wrapper seventh">

      <div class="experience-page__text fifth">
        <p>
          Василий Стахеевич Мариничев, фотограф (1926 — 2002) родился в староверческом селе Подрезово Нижегородской губернии,
          в крестьянской семье, воевал, занимался аэрофотосъемкой, всю жизнь проработал на закрытом предприятии.
        </p>
        <p>
          Он был сыном Стахея Клементовича Мариничева (1906 — 1982). Стахей Клементович стал в 1922 году директором валяльной фабрики, которая до этого принадлежала
          их семье, его отец Клемент умер в 1917, наследником стал Стахей. В 1927 году он отписал свое имение младшему брату Афанасию и переселился в Ленинград.
          Жена его осталась в деревне, с детьми, позже он устроил их учиться и работать в Ленинграде, также как и Афанасия, который был «раскулачен» в начале 1930х годов.
          Стахей служил в армии, был старшим лейтенантом, имел награды и грамоты от органов советской власти.
        </p>
        <p>
          Но среди его документов есть один, который говорит о нем очень многое. Это рукописный помянник, где указаны «годины» и «помины» всего его рода — дядьев и бабушек,
          брата, умершего в блокаду, и матери. Эта бумага была у него под рукой, каждый день он знал, о ком и как молиться. Вряд ли о его молитвенном за всех предстоянии знали
          все его дети. Возможно и вообще никто об этом не знал. Но Василию Стахеевичу было откуда взять силу удерживать и различать глубину мира и собственную глубину.
        </p>
      </div>
    
      <div class="experience-page__foto seventh">
        <img src="@/assets/image/experience/foto-archive/54exp.png" alt="foto-board">
        <img src="@/assets/image/experience/foto-archive/Marinichev-Stahey.png" alt="Marinichev-Stahey">
      </div>
    
    </div>

    <img src="@/assets/image/experience/foto-archive/55exp.png" alt="MARINICHEV-foto" class="experience-page__big-foto">

    <div class="experience-page__foto-block-third margin-top">
      <div class="experience-page__foto-block-third big">
        <img src="@/assets/image/experience/foto-archive/card-Marinevich-family.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block-third middle">
        <img src="@/assets/image/experience/foto-archive/56exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/57exp.png" alt="MARINICHEV-foto">
      </div>
    </div>

    <div class="experience-page__foto">
      <div class="experience-page__foto-block middle">
        <img src="@/assets/image/experience/foto-archive/58exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/59exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/60exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block middle">
        <img src="@/assets/image/experience/foto-archive/61exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/62exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/63exp.png" alt="MARINICHEV-foto">
      </div>
      <div class="experience-page__foto-block middle">
        <img src="@/assets/image/experience/foto-archive/64exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/65exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/66exp.png" alt="MARINICHEV-foto">
      </div>
    </div>

    <img src="@/assets/image/experience/foto-archive/67exp.png" alt="MARINICHEV-foto" class="experience-page__big-foto">


    <div class="experience-page__wrapper video">
      <div class="experience-page__title-video">Записи выступлений</div>
    
      <div class="experience-page__video">
        
        <div class="experience-page__video-block">
          <div class="experience-page__video-block-text">
            Выступление фольклориста и культурного антрополога Светланы Адоньевой и дизайнера Антона Лепашова на презентации  книги  "Свободное время.
            Из фотоархива В. С. Мариничева" в Санкт-Петербурге в Отель Indigo St. Petersburg на Чайковского:
          </div>

          <!-- <img src="@/assets/image/experience/time.png" alt="" class="experience-page__video-container"> -->
          <iframe src="https://www.youtube.com/embed/hlJgM7pnXJw"
           frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>
            <!-- srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a https://www.youtube.com/embed/hlJgM7pnXJw?autoplay=1><img src=https://img.youtube.com/vi/hlJgM7pnXJw/hqdefault.jpg><span>▶</span></a>" -->

        </div>
        <div class="experience-page__video-block">
          <div class="experience-page__video-block-text">
              Память и тело в семейных фотографиях ХХ века (C. Адоньева)
          </div>
          <!-- <img src="@/assets/image/experience/logo-mono.png" alt="" class="experience-page__video-container"> -->
          <iframe src="https://www.youtube.com/embed/3fg8yXjz6mo" modestbranding="1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      
      </div>
    </div>
    <!-- <AgileGal /> -->
    <!-- <Gallery /> -->
    <div class="experience-page__subscription-tablet">
      <Subscription v-show="subscriptionState == 'none'" 
       v-on:subscriptionresult="subscriptionResult"
       />
      <ModalSuccess v-show="subscriptionState == 'success'" @close="closeModal"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/experience';
  @import '../assets/scss/main';

</style>

<script>
import Gallery from './Gallery.vue'
//import Swiper from './Swiper.vue'
//import AgileGal from './AgileGal.vue'
//import ResizeSensor from "vue-resize-sensor";

import Subscription from './Subscription.vue'
import ModalSuccess from './ModalSuccess.vue'

export default {
  name: 'Experience',
  components: {
    Gallery, 
    //AgileGal,
    // ResizeSensor
    Subscription,
    ModalSuccess
  },
  data () {
    return {
      subscriptionState: 'none',
    };
  },
  methods: {
    subscriptionResult ()
    {
      console.log('subscribed');
      this.subscriptionState = 'success';        
    },
    closeModal() {
      this.subscriptionState = 'none'; 
    }
  }
}

</script>
