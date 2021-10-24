const menu = {
    //creating contents of the menu. 
     _courses: {
       appetizers: [], 
       mains: [], 
       desserts: []
       },
    //setting the methods to "get"
       set apps(apps){
         this.appetizers = apps;
       },
       set maindish(maindish){
         this.mains = maindish;
       },
       set tasty(tasty){
         this.desserts = tasty;
       },
    //accessing the methods by "get"
       get apps(){
         return this.appetizers;
       },
       get maindish(){
         return this.mains;
       },
       get tasty(){
         return this.desserts;
       },
    //accessing the methods from courses
       get courses(){
         return {
           appetizers: this.appetizers,
           mains: this.mains,
           desserts: this.desserts
         }
       },
    //creating method to add dishes to our menu
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      //return a dish from `dishes` by using `randomIndex`
      const randomIndex = Math.floor(Math.random()* dishes.length);
      //console.log(dishes[randomIndex]);
      return dishes[randomIndex];
      },
    
    generateRandomMeal: function() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + desserts.price;
      return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name} The price is $${totalPrice}.`
    }
    };
    
    menu.addDishToCourse('appetizers', 'Soup', 4.25);
    menu.addDishToCourse('appetizers', 'Caesar Salad', 5.00);
    menu.addDishToCourse('appetizers', 'Bread Sticks', 6.00);
    menu.addDishToCourse('mains', 'Steak', 25.00);
    menu.addDishToCourse('mains', 'Chicken', 15.00);
    menu.addDishToCourse('mains', 'Sea Food', 50.00);
    menu.addDishToCourse('desserts', 'Ice Cream', 5.00);
    menu.addDishToCourse('desserts', 'Cake', 8.00);
    menu.addDishToCourse('desserts', 'Brownies', 9.00);
    
    let meal = menu.generateRandomMeal();
    console.log(meal);
    
    