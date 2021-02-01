import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Audio from './pages/Products/Audio'
import Video from './pages/Products/Video'
import VideoMon from './pages/Products/VideoMon'
import AudioTrub from './pages/Products/AudioTrub'
import Komut from './pages/Products/Komut'
import ExButton from './pages/Products/ExButton'
import Counters from './pages/Products/Counters'
import Keys from './pages/Products/Keys'
import PSU from './pages/Products/PSU'
import Accessories from './pages/Products/Accessories'
import CallBlock from './pages/Products/CallBlock'



import VideoWatch from './pages/VideoWatch'
import Skud from './pages/Skud'
import Property from './pages/Property'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:"/product/audio",
            name:'audio',
            component:Audio
        },
        {
            path:"/product/video",
            name:'video',
            component:Video
        },
        {
            path:"/product/videomonitor",
            name:'videomonitor',
            component:VideoMon
        },
        {
            path:"/product/audiotrubka",
            name:'audiotrubka',
            component:AudioTrub
        },
        {
            path:"/product/komuttator",
            name:'kommut',
            component:Komut
        },
        {
            path:"/product/buttons",
            name:'buttons',
            component:ExButton
        },
        {
            path:"/product/counters",
            name:'counters',
            component:Counters
        },
        {
            path:"/product/keys",
            name:'keys',
            component:Keys
        },
        {
            path:"/product/psu",
            name:'psu',
            component:PSU
        },
        {
            path:"/product/accessories",
            name:'accessories',
            component:Accessories
        },
        {
            path:"/product/callblock",
            name:'callblock',
            component:CallBlock
        },
        {
            path:'/product/cctv',
            name:'product',
            component:VideoWatch,
        },
        {
            path:'/product/scud',
            name:'scud',
            component:Skud,
        },
        {
            path:'/product/property',
            name:'property',
            component:Property,
        },
    ],
    scrollBehavior(){
        return {x:0,y:0}
    }
})