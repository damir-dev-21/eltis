<template lang="">
    <li class="nav-link">
                                <a href="#" class="header__body__nav__item">Продукция<font-awesome-icon :icon="['fas', 'caret-down']"></font-awesome-icon></a>
                                
                                <div class="dropdown">
                                    <ul>
                                        <li class="dropdown-link">
                                            <a href="#">Многоабонентские домофоны<font-awesome-icon :icon="['fas', 'caret-down']"></font-awesome-icon></a>

                                            <div class="dropdown second">
                                                <ul>
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/audio">Аудио блоки вызова</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/video">Видео блоки вызова</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/videomonitor">Видемониторы</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/audiotrubka">Аудиотрубки</router-link>
                                                    </li>

                                                    <li class="dropdown-link">
                                                        <router-link to="/product/buttons">Кнопки выхода</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/komuttator">Коммутаторы и разветвители</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/counters">Считыватели</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/keys">Ключи</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/psu">Блоки питания</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/accessories">Сопутствующее оборудование</router-link>
                                                    </li>
                                                    
                                                    <div class="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>
                                        
                                        <li class="dropdown-link">
                                            <a href="#">Малоабонентские домофоны<font-awesome-icon :icon="['fas', 'caret-down']"></font-awesome-icon></a>

                                            <div class="dropdown second">
                                                <ul>
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/callblock">Блоки вызова</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/videomonitor">Видемониторы</router-link>
                                                    </li>
                                                    
                                                    <div class="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>

                                        <li class="dropdown-link">
                                            <router-link to="/product/cctv">Видеонаблюдения</router-link>
                                        </li>
                                        
                                        <li class="dropdown-link">
                                            <router-link to="/product/scud">СКУД</router-link>
                                        </li>

                                        <li class="dropdown-link">
                                            <a href="#">Пожарно - охранная сигнализация<font-awesome-icon :icon="['fas', 'caret-down']"></font-awesome-icon></a>
                                            <div class="dropdown second">
                                                <ul>
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/property">Мониторинг недвижимости</router-link>
                                                    </li>
                                                    
                                                    <li class="dropdown-link">
                                                        <router-link to="/product/video">Видео блоки вызова</router-link>
                                                    </li>

                                                    <li class="dropdown-link">
                                                        <router-link to="/product/videomonitor">Видемониторы</router-link>
                                                    </li>

                                                    <li class="dropdown-link">
                                                        <router-link to="/product/audiotrubka">Аудиотрубки</router-link>
                                                    </li>
                                                    
                                                    <div class="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>
                                        
                                        <li class="dropdown-link">
                                            <a href="#">Новинки</a>
                                        </li>
                                        <div class="arrow"></div>

                                    </ul>
                                </div>
                            
                            </li>



</template>
<script>
import {data} from '../assets/data/data'
// import axios from 'axios'
export default {
    data(){
        return{
            products:data
        }
    },
    methods:{
        // async getData(){
        //     return await axios.get('https://eltis-be19c-default-rtdb.firebaseio.com/data.json')
        //     .then(res=>this.products =  res.data).catch(e=>console.log(e))
        // }
    },
    mounted(){
        // this.getData()
    },
    
}
</script>
<style lang="">
    
</style>