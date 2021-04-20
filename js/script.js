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
            {
                name: "Customer-centric Info-Tech Strategies",
                instructor: "Maggie Strickland",
                intructorImg: "d0d504142acfde820eef2f11feea6253.jpeg",
                poster: "stock-full-hd-03-480x298.jpg",
                lessons: 24,
                students: 769,
                price: "Free",
            },
            {
                name: "Open programming Courses for Everyone: Python",
                instructor: "Maggie Strickland",
                intructorImg: "d0d504142acfde820eef2f11feea6253.jpeg",
                poster: "stock-full-hd-04-480x298.jpg",
                lessons: 17,
                students: 62,
                price: "$19",
            },
            {
                name: "Academic listening and Note-taking",
                instructor: "Blanche Fields",
                intructorImg: "73ee246daf47502812ccefc84bf02898.jpeg",
                poster: "course-02-480x298.jpg",
                lessons: 14,
                students: 67,
                price: "$26",
            },
            {
                name: "Master jQuery in a Short Period of Time",
                instructor: "Blanche Fields",
                intructorImg: "73ee246daf47502812ccefc84bf02898.jpeg",
                poster: "course-02-480x298.jpg",
                lessons: 6,
                students: 51,
                price: "$39",
            },
            {
                name: "Introduction to Javascript for Beginners",
                instructor: "Blanche Fields",
                intructorImg: "73ee246daf47502812ccefc84bf02898.jpeg",
                poster: "course-02-480x298.jpg",
                lessons: 14,
                students: 76,
                price: "$59",
            },
            
        ],
    },
    
});
