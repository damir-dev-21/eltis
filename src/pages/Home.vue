<template lang="">
    <div>
        <section class="main">
            <header class="header">
                <div class="header__body">
                    <input type="checkbox" name="" id="check">
                    <div class="header__body__logo">
                        <img src="../assets/images/лого.png" alt="">
                    </div>
                    <div class="header__body__nav">
                        <ul class="nav" id="menu">
                            <li class="nav-link"><a href="#about" class="header__body__nav__item">О нас</a></li>
                            <Products/>
                            <li class="nav-link"><a href="#schema" class="header__body__nav__item">Схема Работы</a></li>
                            <li class="nav-link"><a href="#reviews" class="header__body__nav__item">Отзывы</a></li>
                            <li class="nav-link"><a href="#contacts" class="header__body__nav__item">Контакты</a></li>
                        </ul>
                        <div class="header__body__nav__links">
                            <a href="https://www.facebook.com/eltis.eltis.31/" target="_blank">                            
                                <img src="../assets/images/iconfinder_1_Media_social_website_facebook_2657542.png" width="40" alt=""/>
                            </a>
                            <a href="https://www.instagram.com/eltis_uz/" target="_blank">
                                <img src="../assets/images/iconfinder_online_social_media_instagram_2809750.png" width="40" alt=""/>
                            </a>
                            <a href="https://t.me/sam_eltis" target="_blank">
                                <img src="../assets/images/telegram.png" width="40" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="hamburger-menu-container">
                        <div class="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
                
            </header>

            <main>
                    <div class="main__title">
                        <h3>Домофоны «ELTIS» теперь в Узбекистане</h3>
                    </div>
                    <div class="main__body">
                        <div class="main__body__left">
                            <img src="../assets/images/main-left.png" alt="">
                        </div>
                        <div class="main__body__video">
                            <img src="../assets/images/youtube.png" alt="" class="pulse" v-on:click="toggleVideo">
                            <div class="video-container">
                                <div class="trailer">
                                    <video src="../assets/images/elt.mp4" controls="true"></video>
                                    <div class="close-btn">
                                        <div class="close" v-on:click="toggleVideo">
                                            <!-- <i class="fas fa-times"></i> -->
                                            <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="main__body__right">
                            <img src="../assets/images/main-right.png" alt="">
                        </div>
                    </div>
            </main>
        </section>

        
        <section class="about" id="about">
            <div class="container">
                <div class="about__title">
                    <h3>О нас</h3>
                </div>
                <div class="about__body">
                    <div class="about__body__top">
                        <div class="about__body__top__item">
                            <h3>- Коротко о нас</h3>
                            <p>Компания "ЭЛТИС" — российский производитель, более 20 лет, производит оборудование для подъездов и жилых 
                                домов, коттеджей, объектов социальной сферы и промышленно-гражданского строительства. Решения, заложенные 
                                в оборудование торговой марки ELTIS, защищены патентами Российской Федерации. Оборудованиесертифицировано
                                в системе Госстандарта РФ, Таможенного союза и в европейской системе сертификации СE и Госстандарта Узбекистана 
                                («O'ZSTANDART» AGENTLIGI). 
                            </p>
                        </div>
                        <div class="about__body__top__item">
                            <h3>- Наша цель</h3>
                            <p>Основной вид деятельности компании "ELTIS" — разработка и монтаж комплексных систем
                                безопасности (домофонов, видеонаблюдений, пожарно – охранной сигнализации и система управлений контроля 
                                доступом (СКУД), автоматизации, диспетчеризации. Мы хотим жить в мире, где технологии являются важной 
                                составляющей повседневной жизни каждого человека. Наша миссия состоит в том, чтобы сохранить вашу безопасность!
                            </p>
                        </div>
                    </div>
                    <div class="about__body__bottom">
                        <div class="about__body__bottom__item">
                            <h3>- Наши достижения</h3>
                            <p>За время работы компания «ELTIS» осуществила установку домофонов, систем видеонаблюдения и контроля доступа 
                                на большое количество частных, производственных, муниципальных и коммерческих объектов по республике. За это, 
                                казалось бы, непродолжительное время, нам удалось приобрести бесценный опыт, а также завоевать репутацию 
                                надежного, проверенного и добросовестного исполнителя работ любого уровня сложности. Главный принцип нашей 
                                деятельности заключается в том, чтобы обеспечить каждому клиенту высокий уровень безопасности, превратить его 
                                дом в настоящую крепость!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>

        <section class="products">
            <div class="products__title">
                <h3>Товары</h3>
            </div>
            <div class="products__body">
                <div class="products__body__item">
                    <div class="content">
                        <h3>БЛОК ВЫЗОВА DP400-RD24</h3>
                        <p>до 100 абонентов, построение 
                            систем для подъездов с одним 
                            входом, подключение пульта 
                            консьержа, до 700 уникальных 
                            ключей — бесконтактные брелоки 
                            ELTIS RF2.1, программирование 
                            брелоков на блоке вызова и из 
                            базы данных.</p>
                    </div>
                    <img src="../assets/images/products/1.png" alt="">
                </div>
                <div class="products__body__item">
                    <div class="content">
                        <h3>БЛОК ВЫЗОВА DP400-RD16</h3>
                        <p>вандалозащищенный врезной 
                            корпус, горизонтальное исполнение, 
                            защита динамика и микрофона,
                            ударопрочный яркий индикатор 
                            номера вызываемой квартиры,
                            клавиатура с защитой от 
                            продавливания, подсветка в темное 
                            время суток.</p>
                    </div>
                    <img src="../assets/images/products/2.png" alt="">
                </div>
                <div class="products__body__item">
                    <div class="content">
                        <h3>БЛОК ВЫЗОВА DP-5000</h3>
                        <p>cоздание домофонных систем 
                            от 1-го подъезда до сетевого 
                            комплекса (CAN) на 50 точек 
                            прохода (подъезды, калитки, 
                            шлагбаумы), автономное 
                            программирование, возможность 
                            подключения к ПК, 
                            управление через Internet.</p>
                    </div>
                    <img src="../assets/images/products/3.png" alt="">
                </div>

                <div class="products__body__item">
                    <div class="content">
                        <h3>БЛОК ПИТАНИЯ ELTIS PS2-CS2</h3>
                        <p>предназначен для питания 
                            аудиодомофонов ELTIS cерий DP420, 
                            DP400, возможно использование 
                            с видеодомофонами серии DP400, 
                            при использовании отдельных 
                            стабилизированных блоков питания 
                            +12В для оборудования видеотракта 
                            (видеокамеры блока вызова, 
                            видеоразветвителей ).</p>
                    </div>
                    <img src="../assets/images/products/4.png" alt="">
                </div>

                <div class="products__body__item">
                    <div class="content">
                        <h3>ВИДЕОМОНИТОР VM500-5.1CL</h3>
                        <p>главное преимущество данного 
                            монитора — отличное цветное 
                            изображение на экране: высокое 
                            разрешение, прекрасная цветопередача, 
                            возможность настройки яркости, 
                            контрастности, цветности и широкие 
                            углы обзора матрицы. 5-и дюймовый экран 
                            обеспечивает комфортный 
                            просмотр изображения.</p>
                    </div>
                    <img src="../assets/images/products/5.png" alt="">
                </div>

                <div class="products__body__item">
                    <div class="content">
                        <h3>КНОПКА ВЫХОДА ELTIS В-21</h3>
                        <p>предназначена для работы в составе 
                            домофонных комплексов и систем СКУД,
                            обладает повышенным ресурсом для 
                            установки в местах прохода потока 
                            пользователeй, совместима с 
                            распространенными моделями домофонов 
                            и устройств управления доступом.</p>
                    </div>
                    <img src="../assets/images/products/6.png" alt="">
                </div>

                <div class="products__body__item">
                    <div class="content">
                        <h3>БРЕЛОК ELTIS RF</h3>
                        <p>считывание кода производится
                            дистанционно, при поднесении брелока 
                            к считывателю домофона, дальность 
                            устойчивого считывания 2-3 см,
                            не требует установки или замены 
                            элементов питания.</p>
                    </div>
                    <img src="../assets/images/products/7.png" alt="">
                </div>

                <div class="products__body__item">
                    <div class="content">
                        <h3>АУДИОТРУБКА ELTIS А5</h3>
                        <p>оптимальные размеры трубки 
                            обеспечивают удобство пользования,
                            для производства используется 
                            высококачественный глянцевый пластик,
                            трубка имеет современный дизайн, 
                            ее приятно держать в руке.</p>
                    </div>
                    <img src="../assets/images/products/8.png" alt="">
                </div>

                <div class="products__body__item">
                    <div class="content">
                        <h3>ЗАМОК ЭЛЕКТРОМАГНИТЫЙ EML300</h3>
                        <p>предназначен для запирания двери 
                            в системах санкционированного доступа, 
                            электромагнит замка устанавливается 
                            внутри помещения на дверной каркас, 
                            пластина замка на дверь, замок 
                            необходимо устанавливать совместно 
                            с дверным доводчиком.</p>
                    </div>
                    <img src="../assets/images/products/9.png" alt="">
                </div>

                <div class="products__body__item">
                    <div class="content">
                        <h3>КОММУТАТОР KMV1.4-2.4M
                        </h3>
                        <p>удобное устройство для подключения 
                            в квартире, коттедже или офисе 
                            видеомонитора (до 4 шт.) к нескольким 
                            блокам вызова (например домофон 
                            подъезда и домофон перед квартирой), 
                            также это устройство позволяет 
                            подключить к видеомониторам домофона 
                            несколько дополнительных видеокамер 
                            для создания минисистемы видеонаблюдения.</p>
                    </div>
                    <img src="../assets/images/products/10.png" alt="">
                </div>

                <div class="products__body__item">
                    <div class="content">
                        <h3>блок вызова DP1-CE7 
                        </h3>
                        <p>Современный вид блоку вызова 
                            придают обтекаемые формы 
                            корпуса с резкими гранями 
                            пересечения поверхностей, а так
                            же сочетание блестящей полированной 
                            стали и темного корпуса. 
                            Накладка и кнопка вызова из 
                            полированной нержавеющей стали 
                            обеспечивают высокую износостойкость 
                            и отличный внешний вид в течение многих лет.</p>
                    </div>
                    <img src="../assets/images/products/11.png" alt="">
                </div>
                <div class="products__body__item">
                    <div class="content">
                        <h3>КОДОВОЕ УСТРОЙСТВО КУ18-1
                        </h3>
                        <p>кодовое устройство (КУ) предназначено 
                            для обеспечения санкционированного 
                            доступа в помещение посредством 
                            набора цифрового кода (pin-кода) и/или 
                            с помощью ключа Touch Memory (ТМ).</p>
                    </div>
                    <img src="../assets/images/products/12.png" alt="">
                </div>
            </div>
        </section>


        <section class="schema" id="schema">
            <div class="container">
                <div class="schema__title">
                    <h3>Схема работы</h3>
                </div>
                <div class="schema__body">
                    <div class="schema__body__item">
                        <div class="schema__body__item-img">
                            <img src="../assets/images/schema-1.png" alt="">
                        </div>
                        <div class="schema__body__item-text">
                            <h3>Вы делаете заказ</h3>
                            <p>оформляете заказ 
                                по телефону с помощью 
                                оператора или 
                                приходите в офис</p>
                        </div>
                    </div>
                    <div class="schema__body__item">
                        <div class="schema__body__item-img">
                            <img src="../assets/images/schema-2.png" alt="">
                        </div>
                        <div class="schema__body__item-text">
                            <h3>Идет процесс
                                установки </h3>
                            <p>наши профессиональные
                                мастера устанавливают
                                выбранный вами продукт </p>
                        </div>
                    </div>
                    <div class="schema__body__item">
                        <div class="schema__body__item-img">
                            <img src="../assets/images/schema-3.png" alt="">
                        </div>
                        <div class="schema__body__item-text">
                            <h3>Идет оплата
                                товара 
                                </h3>
                            <p>оплата производится
                                налом, либо через 
                                электронные кошельки
                                (click, Payme)</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

        <section class="review" id="reviews">
            <div class="container">
                <div class="review__title">
                    <h3>Отзывы клиентов</h3>
                </div>
                <div class="review__body">
                    <div class="review__body__item">
                        <div class="review__body__item-img">
                            <img src="../assets/images/review-1.png" alt="">
                        </div>
                        <div class="review__body__item-text">
                            <div class="item-text-title">
                                <h3>Kadir Ismailov</h3>
                                <a href="https://www.instagram.com/kodir771/" target="_blank">@kodir771</a>
                            </div>
                            <div class="item-text">
                                <p>Домофоны на пяти подъездах работают исправно, и ключи не выходят из строя уже несколько лет. Вчера сломали какую-то коробочку возле ворот, после чего мы не могли их открыть с ключей. Сделали заявку. Через два часа приехал мастер. Вежливо и толково разъяснил суть проблемы, все заменил и мы вместе проверили - ключи заработали.</p>
                            </div>
                        </div>
                    </div>
                    <div class="review__body__item">
                        <div class="review__body__item-img">
                            <img src="../assets/images/review-2.png" alt="">
                        </div>
                        <div class="review__body__item-text">
                            <div class="item-text-title">
                                <h3>ALIEVA TAMILA</h3>
                                <a href="https://www.instagram.com/sefer_tamii/" target="_blank">@sefer_tamii</a>
                            </div>
                            <div class="item-text">
                                <p>Установили на подъезд год назад, обслуживание на высоком уровне, когда какие то сбои мастера сразу же испраляют, я доврльна продуктом.</p>
                            </div>
                        </div>
                    </div>
                    <div class="review__body__item">
                        <div class="review__body__item-img">
                            <img src="../assets/images/review-3.png" alt="">
                        </div>
                        <div class="review__body__item-text">
                            <div class="item-text-title">
                                <h3>YUSUF IBRAGIMOV</h3>
                                <a href="http://facebook.com/yusuf.ibragimov.18" target="_blank">@yusuf.ibragimov.18</a>
                            </div>
                            <div class="item-text">
                                <p>Установили качественный продукт за доступные цены, с момента установки прошло три месяца все работает четко без проблем.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact" id="contacts">
            <div class="container">
                <div class="contact__body">
                    <div class="contact__body__item">
                        <h3>ХОТИТЕ ЗАДАТЬ ВОПРОС
                            ИЛИ СДЕЛАТЬ ЗАКАЗ ?
                        </h3>
                        
                        <div class="middle">
                            <p>свяжитесь с нами</p>
                            <div class="phone">
                                <p>+998 90 655 1 655</p>
                                <p>+998 90 655 2 655</p>
                            </div>
                        </div>

                        <div class="links">
                            <a href="https://www.facebook.com/eltis.eltis.31/" target="_blank">                            
                                <img src="../assets/images/iconfinder_1_Media_social_website_facebook_2657542.png" width="40" alt=""/>
                            </a>
                            <a href="https://www.instagram.com/eltis_uz/" target="_blank">
                                <img src="../assets/images/iconfinder_online_social_media_instagram_2809750.png" width="40" alt=""/>
                            </a>
                            <a href="https://t.me/sam_eltis" target="_blank">
                                <img src="../assets/images/telegram.png" width="40" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
import {start} from '../assets/scripts/script'
import Products from '../components/Products'

export default {
    components:{
        Products
    },
    mounted(){
        start()
    },
    methods:{

     toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');

    trailer.classList.toggle('active')
    video.currentTime = 0;
    video.pause()
}
    }
}
</script>
<style src="@/assets/css/index.css">
    
</style>