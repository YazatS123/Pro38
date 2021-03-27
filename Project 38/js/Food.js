var show = "show"
class Food{
    
    constructor(){
        var foodStock, lastFed;
        this.image = loadImage("images/Milk.png");
    }
    getFoodStock(){
        foodStock = foodStock + 1;
    }
    async updateFoodStock(){
        
    }
    deductFood(){

    }
    hide(){
        show = "hide"
    }
    showAgain(){
        show = "show";
    }
    showBg(){
        if(gameState === 0){
            if(hour === 1){
                bg = loadGarden;
            }
            if(hour === 2){
                bg = loadBedroom;
            }
            if(hour > 2 && hour < 4){
                bg = loadBathroom;
            }
            if(hour > 4){
                //This line should give the dog the hungry image, but the way I learned during class is not working.
            }
        }
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    display(x, y){
        if(show === "show"){
        var img = loadImage(this.image);
        Image(img, x, y);
        }
    }
}