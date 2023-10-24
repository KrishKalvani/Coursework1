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
          price: 20,
          spaces: 5
        },
        {
          id: 1002,
          image: "images/bioIcon.png",
          subject: "Biology",
          location: "London",
          price: 25,
          spaces: 5
        },
        {
          id: 1003,
          image:"images/chemistryIcon.png",
          subject: "Chemistry",
          location: "Oxford",
          price: 30,
          spaces: 5
        }
        
      ]
    },
    methods: {
      addToCart(lesson) {
        // Implement your addToCart logic here
        // You can access the selected lesson using the 'lesson' parameter
        console.log("Added to cart:", lesson);
      }
    }
  });