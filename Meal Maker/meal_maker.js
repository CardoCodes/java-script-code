const menu = {
    _courses : {
        appetizers : [],
        mains : [],
        desserts : [],

        get appetizers(){
            return this._courses.appetizers;
        },

        set appetizers(food){
            this.courses.appetizers = food;
        },

        get mains(){
            return this._courses.mains;
        },

        set mains(food){
            this._courses.mains = food;
        },

        get desserts(){
            return this._courses.desserts;
        },

        set desserts(food){
            this._courses.desserts = food;
        }


    },

    get courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },

    addDishtoCourse(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice,

        };
        return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName){
       const dishes = this._courses[courseName];
       const randomIndex = Math.floor(Math.random() * dishes.length);
       return dishes[randomIndex]; 
    },

    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('dessert');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizers.name}, ${dessert.name}, and ${main.name}, and the total price is ${totalPrice} .`;

    }
};

menu.addDishtoCourse('appetizers', 'salad', 5.00);
menu.addDishtoCourse('appetizers', 'wings', 5.00);
menu.addDishtoCourse('appetizers', 'fries', 5.00);
menu.addDishtoCourse('appetizers', 'nachos', 5.00);


menu.addDishtoCourse('mains', 'burger', 5.00);
menu.addDishtoCourse('mains', 'pasta', 5.00);
menu.addDishtoCourse('mains', 'pizza', 5.00);

menu.addDishtoCourse('desserts', 'ice cream', 5.00);