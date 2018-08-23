import Sprite from "../base/Sprite.js";
import DataStore from "../base/DataStore";

class StartButton extends Sprite{
    constructor() {
        const image = Sprite.get('startButton');
        super(image,
            0,0,
            image.width, image.height,
            (DataStore.getInstance().screenWidth - image.width) / 2, (DataStore.getInstance().screenHeight - image.height) / 2.5,
            image.width, image.height
        );
    }
}
export default StartButton