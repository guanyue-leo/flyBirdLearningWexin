import Sprite from "../base/Sprite.js";
import DataStore from "../base/DataStore.js";

class Background extends Sprite{
    constructor() {
        const image = Background.get('background');
        super(image,
            0,0,
            image.width,image.height,
            0,0,
            DataStore.getInstance().screenWidth,DataStore.getInstance().screenHeight
        )
    }
}
export default Background