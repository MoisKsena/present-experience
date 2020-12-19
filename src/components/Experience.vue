<template>
  <div class="experience-page" id="experience">
    
    <h1 class="experience-page__title">выставка «опыт настоящего»</h1>

    <div class="experience-page__wrapper first">
      <div class="experience-page__download-wrapper">
        
        <!-- <img src="@/assets/image/experience/foto-archive/1exp.png" alt="foto-board"> GalleryBig1 -->
        <Gallery1 />
        <!-- <a href="/archive/foto-archive.7z" download class="experience-page__download-btn">скачать полный архив</a> -->
      </div>
        
      <div class="experience-page__text first">
        <p v-html="'Материалом для выставки послужили изображения, сохранившиеся на пленках фотоархива Василия Стахевича Мариничева (1926 г., д.&nbsp;Подрезово&nbsp;Семеновского уезда Нижегородской губернии — 2002 г. Петербург), многие годы работавшего в одном из&nbsp;институтов&nbsp;Ленинграда заведующим фотолабораторией. Из&nbsp;5000 изображений мы&nbsp;выбрали&nbsp;для&nbsp;проекта чуть менее двухсот, относящихся к&nbsp;1950-1960м годам. Предметом визуального исследования был досуг: время, предоставленное самому себе и тем людям, которые с тобой его разделяют.'"></p>
        <p v-html="'Фотографии из архива В.&nbsp;С.&nbsp;Мариничева, старые снимки 1950-х — начала 1960-х гг. Текст&nbsp;—&nbsp;Светлана Адоньева, куратор проекта.'"></p>
      </div>
      
    </div>

    <GalleryBig />
    <!-- <img src="@/assets/image/experience/foto-archive/main_exp.png" alt="main-foto" class="experience-page__big-foto"> -->
 
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

      <div class="experience-page__quote-text" v-html="'Качество свободного времени, как нам кажется, обеспечено величинами иного масштаба, нежели&nbsp;эпоха и социальная страта. Этот проект&nbsp;–&nbsp;попытка их делать различимыми'">
        
      </div>
      <div class="experience-page__line-down">
        <div class="experience-page__line"></div>
        <img src="@/assets/image/experience/quotesDown.png" alt="" class="quotes">
      </div>
    </div>
   
    <div class="experience-page__wrapper second">

      <div class="experience-page__text second">
        <p v-html="' Среди множества фотографий из семейных архивов, которые я&nbsp;попросила у своих друзей и&nbsp;коллег для работы над темой свадьбы, меня зацепили несколько из&nbsp;фотоархива семьи Мариничевых. Они не имели отношения к теме моего исследования, просто попались среди прочих отсканированных фотографий. Тридцать девять изображений. Что-то&nbsp;в&nbsp;них было захватывающее, на них хотелось смотреть. Разглядывание их&nbsp;приводило в дивное состояние&ndash;настроение.'">
        </p>
        <p v-html="'Этим состоянием-настроением хотелось делиться с другими: я&nbsp;показывала их&nbsp;на&nbsp;занятиях со&nbsp;студентами Школы документального кино и театра Марины Разбежкиной и Михаила Угарова. Время от&nbsp;времени я&nbsp;выкладывала некоторые из&nbsp;них&nbsp;на&nbsp;своей странице в&nbsp;фейсбуке: я&nbsp;возвращалась к&nbsp;этим фотографиям, когда мне хотелось перевести дыхание. В&nbsp;них не было ничего особенного.'">
        </p>
      </div>
      
      <Gallery2 />
      <!-- <img src="@/assets/image/experience/foto-archive/5exp.png" alt="foto-board"> -->

    </div>

    <div class="experience-page__foto">
      <div class="experience-page__foto-block small">
        <Gallery3 />
        <!-- <img src="@/assets/image/experience/foto-archive/6exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/7exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/8exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block small">
        <Gallery4 />
        <!-- <img src="@/assets/image/experience/foto-archive/9exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/10exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/11exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block small">
        <Gallery5 />
        <!-- <img src="@/assets/image/experience/foto-archive/12exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/13exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/14exp.png" alt="MARINICHEV-foto"> -->
      </div>
    </div>
    
    <GalleryBig2 />
    <!-- <img src="@/assets/image/experience/foto-archive/15exp.png" alt="MARINICHEV-foto" class="experience-page__big-foto"> -->
    
    <div class="experience-page__wrapper third">
      <Gallery6 />
      <!-- <img src="@/assets/image/experience/foto-archive/16exp.png" alt="foto-board"> -->

      <div class="experience-page__text third">
        <p v-html="'Мальчик с кроликом и щенком сидит на диване и улыбается. Сначала ты видишь мальчика, потом щенка и лишь после этого обнаруживаешь, что на руках у&nbsp;мальчика кролик. Молодые мужчины дурачатся перед фотоаппаратом: залезли на&nbsp;камень посреди лужи вместе с двумя мальчишками и&nbsp;принимают позы. Полуголый малыш несет ягодины на блюдце, девочка постарше присела на корточки и смотрит куда-то сквозь него, а на заднем плане на них обоих смотрит женщина, остановившись с&nbsp;ведром в руках. Мальчишки идут по железнодорожным рельсам, раскинув руки для равновесия: двое в тюбетейках, один в&nbsp;фуражке. На залитой солнцем деревенской улице две женщины и о чем-то разговаривают, одну из&nbsp;них перекрывает фигура проходящего мимо них бородатого мужика.'">
        </p>
        <p v-html="'Три загорающие на одеялах женщины смотрят на что-то, чего мы не видим, а стоящий над ними мальчик смотрит на одну из них. Собака смотрит туда же, куда и&nbsp;мальчик. Собака на цепи, которая обмотана вокруг его&nbsp;голого торса. Два подростка в светлых рубашках, застегнутых на&nbsp;все пуговицы, позируют фотографу на фоне деревенского дома.'">
        </p>
      </div>
      
    </div>

    <div class="experience-page__quote">
      <div class="experience-page__line-up">
        <img src="@/assets/image/experience/quotesUp.png" alt="" class="quotes">
        <div class="experience-page__line"></div>
      </div>

      <div class="experience-page__quote-text" v-html="'Рассматривая фотографию одну за&nbspдругой, я&nbsp;описываю мир, в котором все&nbsp;как&nbsp;-&nbsp;то очень ладно и&nbspхорошо устроено. Люди в этом мире<br />как дома, в которых живут: в них свет&nbspи&nbspтепло'">
          
      </div>
      <div class="experience-page__line-down">
        <div class="experience-page__line"></div>
        <img src="@/assets/image/experience/quotesDown.png" alt="" class="quotes">
      </div>
    </div>

    <div class="experience-page__foto m-margin">
      <div class="experience-page__foto-block small">
        <Gallery7 />
        <!-- <img src="@/assets/image/experience/foto-archive/17exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/18exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/19exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block small">
        <Gallery8 />
        <!-- <img src="@/assets/image/experience/foto-archive/20exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/21exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/22exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block small">
        <Gallery9 />
        <!-- <img src="@/assets/image/experience/foto-archive/23exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/24exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/25exp.png" alt="MARINICHEV-foto"> -->
      </div>
    </div>

    <div class="experience-page__wrapper fourth">

      <div class="experience-page__text fourth">
        <p v-html="'В них что-то совершается — размеренное и&nbsp;самодостаточное. А еще люди-дома основательно и&nbsp;уверенно размещены в&nbsp;пространстве. Оно им дается без труда, где&nbsp;бы они не находились, оно их надежно подхватывает.'">
        </p>
        <p v-html="'И не менее надежно они охвачены связью друг с другом, у&nbsp;них есть какие-то общие дела и&nbsp;общие основания жизни. И&nbsp;я&nbsp;понимаю, что&nbsp;качество жизненного мира, который открывается мне в этих фотографиях, невероятно высоко. И это не качество эпохи: о&nbsp;них иногда даже трудно судить (1950е) или места (Ленинград, поселок Токсово, деревня под Горьким). Качество открывающегося мира обеспечено взглядом фотографа: от него мир не прячется, не сжимается и&nbsp;не&nbsp;представляется. Под его взглядом он&nbsp;живет своей жизнью.'">
        </p>
      </div>
      
      <Gallery10 />
      <!-- <img src="@/assets/image/experience/foto-archive/26exp.png" alt="foto-board"> -->

    </div>

    <div class="experience-page__foto-block-third">
      <div class="experience-page__foto-block-third big">
        <Gallery11 />
        <!-- <img src="@/assets/image/experience/foto-archive/27exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block-third small m-margin">
        <Gallery12 />
        <!-- <img src="@/assets/image/experience/foto-archive/28exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/29exp.png" alt="MARINICHEV-foto"> -->
      </div>
    </div>

    <GalleryBig3 />
    <!-- <img src="@/assets/image/experience/foto-archive/30exp.png" alt="MARINICHEV-foto" class="experience-page__big-foto"> -->
    
    <div class="experience-page__wrapper fifth">

      <div class="experience-page__text fifth">
        <p v-html="'Я знала, что автор этих фотографий Василий Стахевич Мариничев, воевал, служил в&nbsp;армии, занимался аэрофотосъемкой, что он родом из&nbsp;-&nbsp;под Горького, откуда еще до&nbsp;войны его отец и братья перебрались в Ленинград. Прошло пять лет, и нам удалось познакомиться со всеми фотопленками В. С. Мариничева, которые сохранились. Около тысячи изображений.'">
        </p>
        <p v-html="'Скрытое в них послание не&nbsp;дает его объявить: оно тут же превращается во что-то очень банальное, но послание в этих фотографиях точно есть. Может быть так: качество мира, его&nbsp;равновесность, самодостаточность и красота обеспечиваются усилием человека, который в нем обитает и его поддерживает.'">
          
        </p>
        <p v-html="'Дар удерживать мир в&nbsp;равновесии и полноте чем-то обеспечен: ты&nbsp;позволяешь миру быть ровно настолько, насколько ты позволяешь быть самому себе. Почувствуем разницу: быть или&nbsp;быть кем-то — мужчиной, девушкой, инженером, красавицей, врачом, ветераном войны. Любая номинация после «ты есть» или&nbsp;«я&nbsp;есть»&nbsp;выдергивает мир из&nbsp;настоящего, из пребывания в&nbsp;нем, и превращает в&nbsp;параметризованное пространство значений и&nbsp;положений.'">
          
        </p>
        <p v-html="'В узнавании всегда участвует что&nbsp;-&nbsp;то, что было в прошлом: мы&nbsp;опознаем только то, что&nbsp;различаем. А различаем мы только то, что научились различать:&nbsp;наш&nbsp;опыт&nbsp;не&nbsp;свободен. Он был как-то и кем-то задан: высказываниями и действиями других&nbsp;людей,&nbsp;которые&nbsp;совершали какие-то операции и тем самым обнаруживали вещи в их связях и&nbsp;отношениях. Я опознаю наблюдаемое мною лицо незнакомого человека как лицо ветерана войны, колхозника, пенсионера или мудреца, и,&nbsp;опознав, тут же оказываюсь в&nbsp;безвременье: теперь мы&nbsp;можем действовать только по ролям. Как колхозник и&nbsp;горожанин, мудрец и&nbsp;ищущий мудрости, ветеран и тот, кто уважает ветерана за его подвиг.'">
          
        </p>
      </div>
      
      <div class="experience-page__foto fifth">
        <Gallery13 />
        <!-- <img src="@/assets/image/experience/foto-archive/31exp.png" alt="foto-board">
        <img src="@/assets/image/experience/foto-archive/32exp.png" alt="foto-board"> -->
      </div>
      
    </div>
   

    <div class="experience-page__quote">
      <div class="experience-page__line-up">
        <img src="@/assets/image/experience/quotesUp.png" alt="foto-quotes" class="quotes">
        <div class="experience-page__line"></div>
      </div>

      <div class="experience-page__quote-text" v-html="'Но для того, чтобы этот опыт&nbsp;был&nbsp;включен&nbsp;в&nbsp;твой мир и стал его фундаментом, нужны другие, которые случившийся с тобой мир разделят, другие, которые&nbsp;живут&nbsp;на&nbsp;тех&nbsp;же основаниях.'">
       
      </div>
      <div class="experience-page__line-down">
        <div class="experience-page__line"></div>
        <img src="@/assets/image/experience/quotesDown.png" alt="foto-quotes" class="quotes">
      </div>
    </div>

    <GalleryBig4 />
    <!-- <img class="experience-page__foto-big-alone" src="@/assets/image/experience/foto-archive/33exp.png" alt="MARINICHEV-foto"> -->

    <div class="experience-page__foto">
      <div class="experience-page__foto-block middle m-margin">
        <Gallery14 />
        <!-- <img src="@/assets/image/experience/foto-archive/34exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/35exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/36exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block middle m-margin">
        <Gallery15 />
        <!-- <img src="@/assets/image/experience/foto-archive/37exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/38exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/39exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block middle m-margin">
        <Gallery16 />
        <!-- <img src="@/assets/image/experience/foto-archive/40exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/41exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/42exp.png" alt="MARINICHEV-foto"> -->
      </div>
    </div>
    
    <div class="experience-page__wrapper sixth">

      <Gallery17 />
      <!-- <img src="@/assets/image/experience/foto-archive/43exp.png" alt="foto-board"> -->

      <div class="experience-page__text sixth">
        <p v-html="'Откуда берется сила, позволяющая признать себя и&nbsp;других&nbsp;пребывающими в&nbsp;«здесь и&nbsp;сейчас»? Обнаружить себя и&nbsp;других не&nbsp;«ветеранами войны», «колхозниками» или&nbsp;же&nbsp;«школьницами», «начинающими клерками», «женщинами не первой молодости», не ролями, а&nbsp;людьми, разделяющими со&nbsp;мной настоящее. Я полагаю, что&nbsp;дар&nbsp;просто&nbsp;быть&nbsp;и&nbsp;признавать за&nbsp;миром и&nbsp;людьми право просто быть обеспечен знанием о краях жизни. Такое знание у многих из&nbsp;нас случается как опыт в&nbsp;ситуации близкой смерти или понесенной утраты, этот опыт застает тебя врасплох, в&nbsp;одиночестве, не&nbsp;готовым. '">
          
        </p>
        <p v-html="'Советские родители редко оказывались теми людьми, которые подхватывали своих детей в&nbsp;этом опыте, чаще всего они сами не смогли его ни с кем разделить. За&nbsp;миром Василия Стахевича Мариничева, скрывается другой опыт и&nbsp;другое знание, разделенное и&nbsp;согласованное.'">
          
        </p>
        <p v-html="'Ты увидел нечто, понял, что это край, а&nbsp;кто&nbsp;-&nbsp;то старший встал рядом и сказал: «Да, то, что ты видишь — край. Теперь и&nbsp;ты знаешь, что у жизни есть края». Разделенное с другими знание о&nbsp;том, что у жизни есть край, дает силу смотреть в&nbsp;настоящее и&nbsp;видеть в нем другого в&nbsp;его&nbsp;полноте.'">
          
        </p>
      </div>
      
    </div>

    <div class="experience-page__foto">
      <div class="experience-page__foto-block middle">
        <Gallery18 />
        <!-- <img src="@/assets/image/experience/foto-archive/44exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/45exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/46exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block middle">
        <Gallery19 />
        <!-- <img src="@/assets/image/experience/foto-archive/47exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/48exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/49exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block middle">
        <Gallery20 />
        <!-- <img src="@/assets/image/experience/foto-archive/50exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/51exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/52exp.png" alt="MARINICHEV-foto"> -->
      </div>
    </div>

    
    <div class="experience-page__big-foto mobile-wrapper">
      <GalleryBig5 />
      <!-- <img src="@/assets/image/experience/foto-archive/53exp.png" alt="MARINICHEV-foto"  class="experience-page__big-foto mobile"> -->
    </div>

    <div class="experience-page__wrapper seventh">

      <div class="experience-page__text fifth">
        <p v-html="'Василий&nbsp;Стахеевич&nbsp;Мариничев, фотограф (1926 — 2002) родился в&nbsp;староверческом селе&nbsp;Подрезово Нижегородской губернии, в&nbsp;крестьянской семье, воевал, занимался&nbsp;аэрофотосъемкой, всю&nbsp;жизнь проработал на&nbsp;закрытом предприятии.'">
          
        </p>
        <p v-html="'Он был сыном Стахея Клементовича Мариничева (1906&nbsp;—&nbsp;1982). Стахей Клементович стал в 1922 году директором валяльной фабрики, которая до&nbsp;этого принадлежала их&nbsp;семье, его отец Клемент умер в 1917, наследником стал Стахей. В&nbsp;1927&nbsp;году он&nbsp;отписал свое имение младшему брату Афанасию и&nbsp;переселился в&nbsp;Ленинград. Жена его осталась в&nbsp;деревне, с&nbsp;детьми, позже он&nbsp;устроил их&nbsp;учиться и&nbsp;работать&nbsp;в&nbsp;Ленинграде, также как и&nbsp;Афанасия, который был «раскулачен» в начале 1930х годов. Стахей служил в&nbsp;армии, был старшим лейтенантом, имел награды и грамоты от органов советской власти.'">
          
        </p>
        <p v-html="'Но среди его документов есть один, который говорит о нем очень многое. Это рукописный помянник, где указаны «годины» и&nbsp;«помины» всего его рода — дядьев и бабушек, брата, умершего в блокаду, и матери. Эта бумага была у него под рукой, каждый день он знал, о&nbsp;ком и&nbsp;как молиться. Вряд ли о&nbsp;его молитвенном за всех предстоянии знали все его дети. Возможно и&nbsp;вообще никто об&nbsp;этом не знал. Но Василию Стахеевичу было откуда взять силу удерживать и&nbsp;различать глубину мира и&nbsp;собственную глубину.'">
          
        </p>
      </div>
    
      <div class="experience-page__foto seventh">
         <Gallery21 />
        <!-- <img src="@/assets/image/experience/foto-archive/54exp.png" alt="foto-board">
        <img src="@/assets/image/experience/foto-archive/Marinichev-Stahey.png" alt="Marinichev-Stahey"> -->
      </div>
    
    </div>

   
    <GalleryBig6 />
    <!-- <img src="@/assets/image/experience/foto-archive/55exp.png" alt="MARINICHEV-foto" class="experience-page__big-foto"> -->

    <div class="experience-page__foto-block-third margin-top">
      <div class="experience-page__foto-block-third big">
        <Gallery22 />
        <!-- <img src="@/assets/image/experience/foto-archive/card-Marinevich-family.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block-third middle">
        <Gallery23 />
        <!-- <img src="@/assets/image/experience/foto-archive/56exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/57exp.png" alt="MARINICHEV-foto"> -->
      </div>
    </div>

    <div class="experience-page__foto">
      <div class="experience-page__foto-block middle">
        <Gallery24 />
        <!-- <img src="@/assets/image/experience/foto-archive/58exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/59exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/60exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block middle">
        <Gallery25 />
        <!-- <img src="@/assets/image/experience/foto-archive/61exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/62exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/63exp.png" alt="MARINICHEV-foto"> -->
      </div>
      <div class="experience-page__foto-block middle">
        <Gallery26 />
        <!-- <img src="@/assets/image/experience/foto-archive/64exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/65exp.png" alt="MARINICHEV-foto">
        <img src="@/assets/image/experience/foto-archive/66exp.png" alt="MARINICHEV-foto"> -->
      </div>
    </div>

    <GalleryBig7 />
    <!-- <img src="@/assets/image/experience/foto-archive/67exp.png" alt="MARINICHEV-foto" class="experience-page__big-foto"> -->


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
import Gallery1 from './Gallery1.vue'
import Gallery2 from './Gallery2.vue'
import Gallery3 from './Gallery3.vue'
import Gallery4 from './Gallery4.vue'
import Gallery5 from './Gallery5.vue'
import Gallery6 from './Gallery6.vue'
import Gallery7 from './Gallery7.vue'
import Gallery8 from './Gallery8.vue'
import Gallery9 from './Gallery9.vue'
import Gallery10 from './Gallery10.vue'
import Gallery11 from './Gallery11.vue'
import Gallery12 from './Gallery12.vue'
import Gallery13 from './Gallery13.vue'
import Gallery14 from './Gallery14.vue'
import Gallery15 from './Gallery15.vue'
import Gallery16 from './Gallery16.vue'
import Gallery17 from './Gallery17.vue'
import Gallery18 from './Gallery18.vue'
import Gallery19 from './Gallery19.vue'
import Gallery20 from './Gallery20.vue'
import Gallery21 from './Gallery21.vue'
import Gallery22 from './Gallery22.vue'
import Gallery23 from './Gallery23.vue'
import Gallery24 from './Gallery24.vue'
import Gallery25 from './Gallery25.vue'
import Gallery26 from './Gallery26.vue'
import GalleryBig from './GalleryBig.vue'
import GalleryBig2 from './GalleryBig2.vue'
import GalleryBig3 from './GalleryBig3.vue'
import GalleryBig4 from './GalleryBig4.vue'
import GalleryBig5 from './GalleryBig5.vue'
import GalleryBig6 from './GalleryBig6.vue'
import GalleryBig7 from './GalleryBig7.vue'

import Subscription from './Subscription.vue'
import ModalSuccess from './ModalSuccess.vue'

export default {
  name: 'Experience',
  components: {
    Gallery,
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11,
    Gallery12,
    Gallery13,
    Gallery14,
    Gallery15,
    Gallery16,
    Gallery17,
    Gallery18,
    Gallery19,
    Gallery20,
    Gallery21,
    Gallery22,
    Gallery23,
    Gallery24,
    Gallery25,
    Gallery26,
    GalleryBig,
    GalleryBig2,
    GalleryBig3,
    GalleryBig4,
    GalleryBig5,
    GalleryBig6,
    GalleryBig7, 
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
