function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function(){
	console.log("This phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " . ");
}