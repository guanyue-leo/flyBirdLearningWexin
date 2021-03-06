import Sprite from "../base/Sprite.js";
import DataStore from "../base/DataStore.js";

class Pencil extends Sprite{
    constructor(image, top) {
        super(image,
            0,0,
            image.width,image.height,
            DataStore.getInstance().screenWidth,0,
            image.width,image.height,
            );
        this.top = top;
        this.moveSpeed = 2;
    }

    draw(){
        this.x -= this.moveSpeed;
        super.draw(this.img,
            0,0,
            this.width,this.height,
            this.x,this.y,
            this.width,this.height
        )
    }
}
export default Pencil