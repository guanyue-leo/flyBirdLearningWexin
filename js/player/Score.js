import DataStore from "../base/DataStore.js";

class Score {
    constructor() {
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        this.isScore = true;
    }
    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillText(
            this.scoreNumber,
            DataStore.getInstance().screenWidth / 2, DataStore.getInstance().screenHeight / 18,
            1000
        )
    }
}
export default Score