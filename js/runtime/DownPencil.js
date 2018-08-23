import Pencil from "./Pencil.js";
import Sprite from "../base/Sprite.js";
import DataStore from "../base/DataStore.js";

class DownPencil extends Pencil{
    constructor(top){
        const image = Sprite.get('pencilDown');
        super(image,top)
    }

    draw() {
        this.gap = DataStore.getInstance().screenHeight / 5;
        this.y = this.top + this.gap;
        super.draw()
    }
}
export default DownPencil