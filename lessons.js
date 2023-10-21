let webstore = new Vue({
    el: '#app',
    data: {
        sitename: 'AfterSchool',
        lesson: {
            id: 1001,
            image: "images/MathIcon.jpg",
            subject: "Math",
            location: "London",
            price: 20,
            spaces: 5

        },
        lesson2: {
            id: 1002,
            image: "images/bioIcon.png",
            subject: "Biology",
            location: "London",
            price: 25,
            spaces: 5
        }
    }
})
