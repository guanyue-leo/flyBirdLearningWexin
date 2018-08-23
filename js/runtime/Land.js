import Sprite from "../base/Sprite.js";
import Director from "../Director.js";
import DataStore from "../base/DataStore.js";

class Land extends Sprite{
    constructor() {
        const image = Sprite.get('land');
        super(image,0,0,
            image.width, image.height,
            0, DataStore.getInstance().screenHeight - image.height,
            image.width, image.height
            );
        this.landX = 0;
        this.landSpeed = Director.getInstance().moveSpeed;
    }

    draw() {
        this.landX += this.landSpeed;
        if(this.landX > (this.img.width - DataStore.getInstance().screenWidth)) this.landX = 0;
        super.draw(this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            -this.landX,
            this.y,
            this.width,
            this.height)
    }
}
export default Land