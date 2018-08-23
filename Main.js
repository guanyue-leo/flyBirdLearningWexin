import ResourceLoader from "./js/base/ResourceLoader.js";
import Director from "./js/Director.js";
import Background from "./js/runtime/Background.js";
import DataStore from "./js/base/DataStore.js";
import Land from "./js/runtime/Land.js";
import Birds from "./js/player/Birds.js";
import StartButton from "./js/player/StartButton.js";
import Score from "./js/player/Score.js";

class Main {
    constructor() {
        const { screenWidth, screenHeight } = wx.getSystemInfoSync();
        this.canvas = wx.createCanvas();
        this.canvas.width  = screenWidth;
        this.canvas.height = screenHeight;
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.creat();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
        Director.getInstance();
    }

    onResourceFirstLoaded(map) {
        const { screenWidth, screenHeight } = wx.getSystemInfoSync();
        this.dataStore.ctx = this.ctx;
        this.dataStore.canvas = this.canvas;
        this.dataStore.res = map;
        this.dataStore.screenWidth = screenWidth;
        this.dataStore.screenHeight = screenHeight;
        this.init();
    }

    init() {
        this.director.isGameOver = false;
        console.log('init');
        this.dataStore
            .put('pencils', [])
            .put('background', Background)
            .put('birds', Birds)
            .put('startButton', StartButton)
            .put('score', Score)
            .put('land', Land);
        this.registerEvent();
        this.director.createPencil();
        this.director.run();
    }

    registerEvent() {
        // this.canvas.addEventListener('touchstart', e=>{
        //     e.preventDefault();
        //     if(this.director.isGameOver && (new Date()).getTime() - this.director.restart > 700){
        //         this.init();
        //     }else{
        //         this.director.birdsEvent();
        //     }
        // })
        wx.onTouchStart(() => {
            if (this.director.isGameOver && (new Date()).getTime() - this.director.restart > 400) {
                console.log('游戏开始');
                this.init();
            } else {
                this.director.birdsEvent();
            }
        });
    }
}
export default Main