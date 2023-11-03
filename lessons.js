let webstore = new Vue({
    el: '#app',
    data: {
      sitename: 'AfterSchool',
      showLesson:true,
      lessons: [
        {
          id: 1001,
          image: "images/MathIcon.jpg",
          subject: "Math",
          location: "London",
          price: 100,
          spaces: 5,
          cartItemCount:0
        },
        {
          id: 1002,
          image: "images/bioIcon.png",
          subject: "Biology",
          location: "London",
          price: 90,
          spaces: 5,
          cartItemCount:0
        },
        {
          id: 1003,
          image:"images/chemistryIcon.png",
          subject: "Chemistry",
          location: "Oxford",
          price: 150,
          spaces: 5,
          cartItemCount:0
        },
        {
            id: 1004,
            image:"images/physIcon.png",
            subject: "Physics",
            location: "Oxford",
            price: 100,
            spaces: 5,
            cartItemCount:0
        },
        {
            id:1005,
            image:"images/MathIcon.jpg",
            subject: "Math",
            location: "Oxford",
            price: 120,
            spaces: 5,
            cartItemCount:0
        },
        {
            id: 1006,
            image:"images/engIcon.png",
            subject: "English",
            location: "London",
            price: 80,
            spaces: 5,
            cartItemCount:0
        },
        {
            id:1007,
            image:"images/musicIcon.png",
            subject: "Music",
            location: "Bristol",
            price: 90,
            spaces: 5,
            cartItemCount:0
        },
        {
            id:1008,
            image:"images/engIcon.png",
            subject: "English",
            location: "York",
            price: 80,
            spaces: 5,
            cartItemCount:0

        },
        {
            id:1009,
            image:"images/chemistryIcon.png",
            subject: "Chemistry",
            location: "London",
            price: 100,
            spaces: 5,
            cartItemCount:0
        },
        {
            id:1010,
            image:"images/bioIcon.png",
            subject: "Biology",
            location: "Oxford",
            price: 100,
            spaces: 5,
            cartItemCount:0
        },
        
        
      ],
      cart: [],
      sortOrder: 'ascending',
    },
    methods: {
      addToCart: function(lesson){
        if(lesson.spaces>lesson.cartItemCount){
          lesson.cartItemCount++
          this.cart.push(lesson.id);
        }
          
        
      },
      showCheckout(){
        this.showLesson=this.showLesson ? false:true;
      },
      canAddToCart: function(lesson){
        return lesson.spaces>lesson.cartItemCount;
      },
      sortByPrice: function(order){//order is the parameter where it will either be ascending or descending
          this.sortOrder=order;
          this.lessons.sort((a,b)=>{ //lets assume a and b are the objects (each lesson) in our lessons array, sort performs the ascending 
            //and descending
            if(order=== 'ascending'){//if order is ascedning...
              return a.price-b.price;//display the first detected lesson minus the 2nd one
            } else if(order==='descending'){// similarly for descending but 2nd lesson minus the 1st
              return b.price-a.price;
            }
            return 0; // this will not display any change if theres no ascending or descending detected
          });
        },
        
      sortAlphabetically: function (order){
          this.sortOrder= order;
          this.lessons.sort((a,b)=>{
            if(order==='ascending'){
              return a.subject.localeCompare(b.subject); //localeCompare compares 2 strings and returns a value that shows their order
              //if one string (A) is before another string (B), it will return a -ve number and sort in ascending order
            } else if (order==='descending') { //Similar concept for (B) before (A) i.e., descending order
              return b.location.localeCompare(a.subject);
            }
            return 0;
          });
        },
      sortLocationAlphabetically: function (order){
          this.sortOrder= order;
          this.lessons.sort((a,b)=>{
            if(order==='ascending'){
              return a.location.localeCompare(b.location); //localeCompare compares 2 strings and returns a value that shows their order
              //if one string (A) is before another string (B), it will return a -ve number and sort in ascending order
            } else if (order==='descending') { //Similar concept for (B) before (A) i.e., descending order
              return b.subject.localeCompare(a.location);
            }
            return 0;
          });
        },
    
    },
    
    computed:{
      cartItems: function(){ //this is a function that is making an array - cartItems of lesson objects
        // which will contain the IDs (and other details) of the lessons that got added into the cart array
        return this.cart.map(itemID =>{ //here we 'map' the lessons in the cart array into the arguement itemID.
          // So for each itemID (lesson ID) in the cart array, the map function will run
          return this.lessons.find(lesson => lesson.id === itemID)
          //Inside the map function the 'find' searches for a lesson where 
          //the lesson.id from the lessons object is equal to the current itemID from the new array made
        });

        //reference: https://v2.vuejs.org/v2/guide/list
        
      },
      cartItemCount: function(){
        return this.cart.length || '';
      },
      

    },
  });


  // computed:{
  //   sortedProducts(){
  //     let productdArray= this.products.slice(0);
  //     function compare(a,b){
  //       if(a.price>b.price)
  //       return 1;
  //     if(a.price<b.price)
  //     return -1;
  //   return 0;
  //     }
  //     return productdArray.sort(compare)
  //   }
  // }