//setting up the vue instance
let webstore = new Vue({
  el: '#app', //element, we're calling it 'app' which is the whole functioning website
  data: { //this is where we add in our data object and in this we have the lessons array containing 10 lesson object. We also have the order object.
    sitename: 'AfterSchool', //displays the sitename in the vue js console
    showLesson: true, //initially lessons are displayed, if false then the checkout toggle appears and the lessons display hides
    searchValue: '',
    order: { //order object that is setting the name and phone credentials to be filled by the user
      name: '',
      phone: null

    },
    lessons: [ //lessons array containing 10 lesson objects
      {
        id: 1001,
        image: "images/MathIcon.jpg",
        subject: "Math",
        location: "London",
        price: 100,
        spaces: 5,
        cartItemCount: 0 //this is there for every lesson object because I want to track whether this specific lesson is there in the cart
      },
      {
        id: 1002,
        image: "images/bioIcon.png",
        subject: "Biology",
        location: "London",
        price: 90,
        spaces: 5,
        cartItemCount: 0 //its set to 0 because initially there is nothing in the cart at first
      },
      {
        id: 1003,
        image: "images/chemistryIcon.png",
        subject: "Chemistry",
        location: "Oxford",
        price: 150,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1004,
        image: "images/physIcon.png",
        subject: "Physics",
        location: "Oxford",
        price: 100,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1005,
        image: "images/MathIcon.jpg",
        subject: "Math",
        location: "Oxford",
        price: 120,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1006,
        image: "images/engIcon.png",
        subject: "English",
        location: "London",
        price: 80,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1007,
        image: "images/musicIcon.png",
        subject: "Music",
        location: "Bristol",
        price: 90,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1008,
        image: "images/engIcon.png",
        subject: "English",
        location: "York",
        price: 80,
        spaces: 5,
        cartItemCount: 0

      },
      {
        id: 1009,
        image: "images/chemistryIcon.png",
        subject: "Chemistry",
        location: "London",
        price: 100,
        spaces: 5,
        cartItemCount: 0
      },
      {
        id: 1010,
        image: "images/bioIcon.png",
        subject: "Biology",
        location: "Oxford",
        price: 100,
        spaces: 5,
        cartItemCount: 0
      },


    ],
    cart: [], //this is the cart array that stores the IDs of the lessons and will be used to display the lessons in the cart page dynamically
    sortOrder: 'ascending',
    // sortOrder2: 'ascending'
  },
  methods: {
    addToCart: function (lesson) { //this function adds the IDs of each lesson thats added in the cart
      if (lesson.spaces > lesson.cartItemCount) { //if the spaces left of the lesson is more that whats in the cart
        lesson.cartItemCount++ //then we can add it (increment the cartItemCount value)
        this.cart.push(lesson.id); //literally adding/pushing the lesson ID in the cart array
      }


    },
    showCheckout() {
      this.showLesson = this.showLesson ? false : true;
    },
    canAddToCart: function (lesson) { //checks if we can add to the cart or not, we put this in a v-if else so we can disable the add to cart button
      return lesson.spaces > lesson.cartItemCount; //checks if the spaces is more than the lessons that have been added
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

    



    sortLocationAlphabetically: function (order) {
      this.sortOrder = order;
      this.lessons.sort((a, b) => {
        if (order === 'ascending') {
          return a.location.localeCompare(b.location); //localeCompare compares 2 strings and returns a value that shows their order
          //if one string (A) is before another string (B), it will return a -ve number and sort in ascending order
        } else if (order === 'descending') { //Similar concept for (B) before (A) i.e., descending order
          return b.subject.localeCompare(a.location);
        }
        return 0;
      });
    },

    removeLessonFromCart(lesson) {
      //this function is used for removing lessons from the cart
      let lessonIndexInCart = this.cart.indexOf(lesson.id);//this is finding the index of the lesson thats in the cart
      //and stored in the lessonIndexInCart variable
      if (lessonIndexInCart !== -1) {//if the lesson is IN the cart, then we splice to remove it
        this.cart.splice(lessonIndexInCart, 1);
        let lessonInLesson = this.lessons.find((lessonInCart) => lessonInCart.id === lesson.id);
        //this line searches for the same lesson added in the lessons array (after removing it) using the ID and it stores it in lessonInLessons
        if (lessonInLesson) {//if that lesson is in the array then decrease the cartItemCount which hence increases the spaces.
          lessonInLesson.cartItemCount--;
        }
      }
    },

    submitForm() {
      alert('Order Submitted. Thank you!')
    }



  },

  computed: {
    cartItems: function () { //this is a function that is making an array - cartItems of lesson objects
      // which will contain the IDs (and other details) of the lessons that got added into the cart array
      return this.cart.map(itemID => { //here we 'map' the lessons in the cart array into the arguement itemID.
        // So for each itemID (lesson ID) in the cart array, the map function will run
        return this.lessons.find(lesson => lesson.id === itemID)
        //Inside the map function the 'find' searches for a lesson where 
        //the lesson.id from the lessons object is equal to the current itemID from the new array made
      });

      //reference: https://v2.vuejs.org/v2/guide/list

    },
    cartItemCount: function () {
      return this.cart.length || '';
    },
    cartTotalPrice: function () {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
      //this function calculates the total price of the lessons that are in the cart
      //the reduce function iterates over the cartItems array and adds the price values.
      //it uses total and item as the 2 arguements
      //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    },

    nameValidation: function () {
      return /^[A-Za-z\s]+$/.test(this.order.name);
    },
    phoneValidation: function () {
      return /^[0-9]+$/.test(this.order.phone);
    },
    credentialsValidation: function () {
      return this.nameValidation && this.phoneValidation;
    },


    // lessonList(){ //this searches the lesson by the subject
    //   if(this.searchValue.trim().length>0){//if something is searched then searchValue is greater than 0
    //     return this.lessons.filter((lesson)=>lesson.subject.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
    //   }//we filter the lesson for each lesson if the lessons subject includes the value we searched, then return it.

    lessonList(){ // i modified the previouse code to search by location as well
      if(this.searchValue.trim().length>0){ //if the user searches something
        return (this.lessons.filter((lesson)=>{// then return the following
          let lowerCaseSearch= this.searchValue.trim().toLowerCase(); //this stores all the search values in lowerCase
          let subjectSearch= lesson.subject.toLowerCase().includes(lowerCaseSearch);//searches by subject, we lowerCase the subject so we can get
          //results for searching a small letter, we do the lowerCasing during the search (in the includes) so that we can search big letters, we just want to make it
          //case insensitive
          let locationSearch= lesson.location.toLowerCase().includes(lowerCaseSearch);
          return subjectSearch||locationSearch;

        }));
        
        
      }
      return this.lessons;

    }
    //reference for the searching: https://www.youtube.com/watch?v=0TMy-5srdlA&list=LL&index=1&t=818s


  },
});


