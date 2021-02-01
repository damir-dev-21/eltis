<template lang="">
    <div class="watch-page">
        <header class="product-page-header">
          <div class="product-page-logo">
              <router-link to="/">
                    <img src="../assets/images/лого.png" alt="logo">
              </router-link>
          </div>
      </header>
        <div class="container">
        <div class="watch-page-header">
            <h3>Типы систем видеонаблюдения</h3>
            <p>Отлаженная работа системы видеонаблюдения - одна из составляющих работы всего охранного комплекса. Вне зависимости от сферы деятельности – правильный подбор и установка систем видеонаблюдения является надежным и незаменимым методом мониторинга ситуации на объекте.
                На производстве, на торговых площадях, на складе и многих других объектах – установка эффективного комплекса видеонаблюдения - не только главный аспект безопасности, но и залог соблюдения правопорядка, качественной работы сотрудников, а также предотвращения хищений и воровства.</p>
            <div class="anchor">
                <a href="#ahd">AHD камеры</a>
                <a href="#turbo">Turbo HD камеры</a>
                <a href="#hdtvi">HD TVI камеры</a>
                <a href="#ip">IP камеры</a>
                <a href="#hdcvi">HDCVI камеры</a>
                <a href="#hdsdi">HD SDI камеры</a>
            </div>
        </div>
        <div class="watch-page-content">
            <div class="watch-page-content-item" id="ahd">
                <h3>AHD камеры</h3>
                <div class="text">
                    <p>AHD технология является открытым стандартом, благодаря этому ее используют многие производители камер для видеонаблюдения.</p>

                    <p>AHD камеры:</p>
                    <ul>
                        <li>дают изображение высокой четкости с разрешением 720р, 960p и 1080р</li>
                        <li>передают 3 типа сигнала по одному коаксиальному кабелю (видео, звук и управление)</li>
                        <li>передают видео без задержек, в реальном времени</li>
                        <li>поддерживают передачу видеосигнала по кабелю на расстояние до 500 метров без существенного затухания сигнала</li>
                        <li>нетребовательны к качеству коаксиального кабеля</li>
                        <li>совместимы с регистраторами других торговых марок, которые используют эту же технологию.</li>
                    </ul>

                    <p>
                        Для подключения AHD-видеокамеры необходим регистратор, поддерживающий эту технологию, к обычному DVR вы ее не подключите. Но зато к AHD-регистратору можно подключать и обычные аналоговые, и AHD-камеры, и даже IP. Передача видеосигнала AHD возможна и по витой паре, но с использованием специальных приемо-передатчиков. Кроме того, в этом случае дальность передачи снижается до 150 метров.
                    </p>
                </div>
            </div>

            <div class="watch-page-content-item" id="hdtvi">
                <h3>HD TVI камеры</h3>
                <div class="text">
                    <p>HDTVI - это также открытая технология, которая впервые стала использоваться в камерах Hikvision. Сейчас можно найти камеры и других производителей, которые выпускают камеры HD-TVI.</p>
                    <p>
                        По характеристикам технология HDTVI очень похожа на HDCVI - технологию Dahua, о которой пойдет речь ниже.
                    </p>
                    
                    <p>Особенности HD-TVI камер:</p>
                    <ul>
                        <li>видео высокой четкости с разрешением 720р и 1080р</li>
                        <li>передача 3 типов сигнала по одному коаксиальному кабелю (видео, звук и управление)</li>
                        <li>видео без задержек, в реальном времени</li>
                        <li>передача видеосигнала по кабелю на расстояние до 500 метров</li>
                        <li>совместимы с регистраторами других торговых марок, которые используют эту же технологию.</li>
                    </ul>

                    <p>
                        Для передачи видео с камеры HD-TVI также можно использовать витую пару (и дополнительно конвертеры сигнала). Дальность передачи в этом случае - до 100 метров.
                    </p>
                    <p>
                        Камеры подключаются к регистратору HD-TVI (к обычному не получится). В отличие от AHD, к регистратору HD-TVI можно подключить без особых проблем обычные аналоговые и HDTVI-камеры, а вот с IP придется повозиться - их поддержка реализована слегка коряво.
                    </p>
                </div>
            </div>

            <div class="watch-page-content-img">
                <img src="../assets/images/product/camera.jpg"/>
            </div>

            <div class="watch-page-content-item" id="hdcvi">
                <h3>HDCVI камеры</h3>
                <div class="text">
                    <p>
                        HDCVI - закрытая технология, проприетарная разработка компании Dahua. Камеры HD-CVI по характеристикам почти не отличаются от камер HDTVI и AHD:
                    </p>
                
                    <ul>
                        <li>передают сигнал на расстояние до 500 метров по коаксиальному кабелю;</li>
                        <li>передают все 3 типа сигнала в одном кабеле;</li>
                        <li>видео идет без задержек;</li>
                        <li>картинка высокого качества - от 720p и выше (правда, моделей на 3 Мп нет)</li>
                    </ul>

                    <p>
                        Кроме того, регистраторы HDCVI без проблем работают с тремя типами камер: старыми аналоговыми, HDCVI и IP.
                    </p>
                    <p>
                        Передача сигнала возможна и по витой паре - до 150 метров, с использованием конвертеров.
                    </p>
                    <p>
                        Однако из-за закрытой технологии камеры и регистраторы HD-CVI совместимы только с оборудованием этого же производителя, или тех, кто купил лицензию на ее использование (прямо скажем, нам не удалось вспомнить ни одного).
                    </p>
                </div>
            </div>

            <div class="watch-page-content-item" id="turbo">
                <h3>Turbo HD камеры</h3>
                <div class="text">
                    <p>
                        Турбо HD - фирменная технология Hikvision, которая фактически, является все той же HD-TVI, особых отличий нет, кроме того, что в этой линейке есть новые модели с разрешением, большим, чем 1080p - к примеру, 3 МП.
                    </p>

                    <p>
                        Совместимость Турбо HD камер с видеорегистраторами такая же, как и в классическом HD-TVI: камеры подключаются только к регистратору с поддержкой этой технологии, но к нему можно подключить без проблем и аналоговые камеры. Аналогично HDTVI заявлена также поддержка IP.
                    </p>
                </div>
            </div>

            <div class="watch-page-content-img">
                <img src="../assets/images/product/camera2.jpg"/>
            </div>

            <div class="watch-page-content-item" id="ip">
                <h3>IP камеры</h3>
                <div class="text">
                    <p>
                        IP-камера — цифровая видеокамера, особенностью которой является передача видеопотока в цифровом формате по сети Ethernet и TokenRing, использующей протокол IP. Являясь сетевым устройством, каждая IP-камера в сети имеет свой IP-адрес.
                    </p>

                    <p>
                        IP-видеокамеры, в отличие от аналоговых: передают видеопоток в цифровом, сжатом и закодированном виде:
                    </p>
                
                    <ul>
                        <li>для передачи используют не коаксиальный кабель, а сетевой - витую пару, оптоволокно</li>
                        <li>"не привязаны" в видеорегистратору. Их можно установить в любом месте на любом  расстоянии от него, главное - наличие сетевой кабельной инфраструктуры или беспроводной связи;</li>
                        <li>дают картинку очень высокой четкости - есть модели, с разрешением, до которого не дотягивают даже самые современные аналоговые камеры  - 12 МП, 4К</li>
                        <li> не требуют прокладки отдельного кабеля питания - большинство сетевых камер поддерживают технологию PoE и получают питание по витой паре.</li>
                    </ul>

                </div>
            </div>

            <div class="watch-page-content-item" id="hdsdi">
                <h3>HD SDI камеры</h3>
                <div class="text">
                    <p>
                        HD-SDI камеры относят к категории профессиональных. Они также передают видеосигнал с разрешением от 1280x720 пикселей, но несжатый. Запись потока также производится HD-SDI видеорегистратором без сжатия, что требует повышенных объемов жесткого диска.
                    </p>

                    <p>
                        HD-SDI-камеры отличаются следующими особенностями:
                    </p>
                
                    <ul>
                        <li>Дают видео превосходного качества.</li>
                        <li>Изображение с них поступает без задержек, как в IP-камерах, т. е. реал-тайм.</li>
                        <li>Передача цифрового сигнала без сжатия и кодирования требует большой пропускной способности, поэтому используется не витая пара, а коаксиальный кабель.</li>
                        <li>Требовательны к качеству коаксиального кабеля.</li>
                        <li>Передают сигнал на сравнительно небольшое расстояние - 100-150 метров.</li>
                        <li>Стоят дороже, чем аналоговые.</li>
                    </ul>

                    <p>
                        Передача видеоизображения  с HD-SDI камер возможна также по оптоволокну.
                    </p>

                    <p>
                      Использование HD-SDI видеокамер целесообразно в тех местах, где одновременно важна высокая четкость получаемого изображения (определение номинала банкнот, номерных знаков автомобиля) и быстрая реакция на происходящее в реальном времени.  
                    </p>

                </div>
            </div>

            <div class="watch-page-content-img">
                <img src="../assets/images/product/camera3.jpg"/>
            </div>

        </div>
        </div>
        
        <section class="footer">
            <div class="footer__body">
                <div class="footer__body__item eltis">
                    <p>&copy; Все права защищены. OOO "ELTIS"</p>
                </div>
                <div class="footer__body__item manit">
                    <p>created by</p>
                    <img src="../assets/images/manit.png" alt="">
                </div>
            </div>
            
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .product-page-header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
    }
    .watch-page{
        background: white;
    }
    .watch-page-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px 0px;
}
    .watch-page-header p{
        margin: 20px 0px;
        font-size: 23px;
        font-family: 'Futura-Book';
        text-align: justify;
    }
    .watch-page-header h3{
        font-size: 30px;
        font-family: 'Futura-Book';
    }
    .anchor{
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin: 30px 0px;
    }
    a{
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 20px;
        font-family: 'Futura-Medium';
    }
    .watch-page-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 100px;
    }
    .watch-page-content-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0px;
    }
    .watch-page-content-item h3{
        font-size: 25px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .watch-page-content-item p{
        margin: 15px 0px;
        text-align: justify;
        font-size: 22px;
        font-family: 'Futura-Book';
    }
    .watch-page-content-item li{
        text-align: justify;
        font-size: 22px;
        font-family: 'Futura-Book';
    }

    @media (max-width:1440px){
        .watch-page p{
            padding: 0px 30px;
            width: 100%;
        }
        .watch-page .footer p{
            padding: 0px;
            width: auto;
        }
        ul li{
            padding: 0px 30px;
            width: 100%;
        }
         .watch-page img{
             width: 100%;
             padding: 0px 30px;
         }

          .watch-page .footer img{
              width: auto;
              padding: 0px;
          }
    }

    @media (max-width:800px){
        .anchor{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .anchor a{
            margin: 10px 0px;
        }
    }

    @media (max-width:500px){
        .watch-page-header h3{
            text-align: center;
        }
    }
</style>