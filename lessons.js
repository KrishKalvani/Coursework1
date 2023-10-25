let webstore = new Vue({
    el: '#app',
    data: {
      sitename: 'AfterSchool',
      lessons: [
        {
          id: 1001,
          image: "images/MathIcon.jpg",
          subject: "Math",
          location: "London",
          price: 100,
          spaces: 5
        },
        {
          id: 1002,
          image: "images/bioIcon.png",
          subject: "Biology",
          location: "London",
          price: 90,
          spaces: 5
        },
        {
          id: 1003,
          image:"images/chemistryIcon.png",
          subject: "Chemistry",
          location: "Oxford",
          price: 150,
          spaces: 5
        },
        {
            id: 1004,
            image:"images/physIcon.png",
            subject: "Physics",
            location: "Oxford",
            price: 100,
            spaces: 5
        },
        {
            id:1005,
            image:"images/MathIcon.jpg",
            subject: "Math",
            location: "Oxford",
            price: 120,
            spaces: 5
        },
        {
            id: 1006,
            image:"images/engIcon.png",
            subject: "English",
            location: "London",
            price: 80,
            spaces: 5
        },
        {
            id:1007,
            image:"images/musicIcon.png",
            subject: "Music",
            location: "Bristol",
            price: 90,
            spaces: 5
        },
        {
            id:1008,
            image:"images/engIcon.png",
            subject: "English",
            location: "York",
            price: 80,
            spaces: 5

        },
        {
            id:1009,
            image:"images/chemistryIcon.png",
            subject: "Chemistry",
            location: "London",
            price: 100,
            spaces: 5
        },
        {
            id:1010,
            image:"images/bioIcon.png",
            subject: "Biology",
            location: "Oxford",
            price: 100,
            spaces: 5
        },
        
        
      ],
      cart: [],
      sortOrder: 'ascending',
    },
    methods: {
      addToCart: function(){
        this.cart.push(this.lessons.id)
    },
    sortByPrice: function (order) {//order is the parameter where it will either be ascending or descending
      this.sortOrder = order;
      this.lessons.sort((a, b) => { //lets assume a and b are the objects (each lesson) in our lessons array, sort performs the ascending 
        //and descending
        if (order === 'ascending') {//if order is ascedning...
          return a.price - b.price;//display the first detected lesson minus the 2nd one
        } else if (order === 'descending') {// similarly for descending but 2nd lesson minus the 1st
          return b.price - a.price;
        }
        return 0; // this will not display any change if theres no ascending or descending detected
      });
    },
  },
  });