const app = new Vue ({
    el: "#root",
    data: {
        mainNavLinks: [
            {
                name: "Home",
                display: true,
                chevron: true,
            },
            {
                name: "Pages",
                display: true,
                chevron: true,
            },
            {
                name: "Courses",
                display: true,
                chevron: true,
            },
            {
                name: "Features",
                display: true,
                chevron: true,
            },
            {
                name: "Blog",
                display: true,
                chevron: true,
            },
            {
                name: "Shop",
                display: true,
                chevron: true,
            }
        ],

        courses: [
            {
                name: "Learning to Write as a Professional Author",
                instructor: "Blanche Fields",
                intructorImg: "73ee246daf47502812ccefc84bf02898.jpeg",
                poster: "course-02-480x298.jpg",
                lessons: 20,
                students: 50,
                price: "$40",
            },
        ],
    },
    
});
