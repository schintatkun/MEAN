class Bike{
    price: number;
    max_speed: number;
    miles: number;
    constructor(price: number, max_speed: number){
        this.price = price;
        this.max_speed = max_speed;
        this.miles =0;
    }
    displayinfo(): any {
        console.log(`This bike price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`);
        return this;
    }
    ride(): any {
        console.log("Riding");
        this.miles +=10;
        return this;
    }
    reverse(): any{
        console.log("Reversing");
        this.miles -= 5;
        return this;
    }
}
var B1 = new Bike(200, 20);
var B2 = new Bike(100, 10);
var B3 = new Bike(150, 15);
B1.ride().ride().reverse().displayinfo();
B2.ride().ride().reverse().reverse().displayinfo();
B3.reverse().reverse().displayinfo();
