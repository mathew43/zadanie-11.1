function Phone(brand, price, color, screen) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screen = screen;
}

Phone.prototype.printInfo = function(){
	console.log("This phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " . Also, this phone got the beautiful " + this.screen + " screen. ");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "3 inch");
iPhone6S.printInfo();

var SamsungS6 = new Phone("Samsung", 1850, "black", "2,5 inch");
SamsungS6.printInfo();

var OnePlusOne = new Phone("OnePlus", 550, "gold", "1 inch");
OnePlusOne.printInfo();