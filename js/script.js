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
                poster: "stock-full-hd-06-480x298.jpg",
                lessons: 14,
                students: 67,
                price: "$26",
            },
            {
                name: "Master jQuery in a Short Period of Time",
                instructor: "Blanche Fields",
                intructorImg: "73ee246daf47502812ccefc84bf02898.jpeg",
                poster: "course-featured-image-01-480x298.jpg",
                lessons: 6,
                students: 51,
                price: "$39",
            },
            {
                name: "Introduction to Javascript for Beginners",
                instructor: "Blanche Fields",
                intructorImg: "73ee246daf47502812ccefc84bf02898.jpeg",
                poster: "stock-full-hd-05-480x298.jpg",
                lessons: 14,
                students: 76,
                price: "$59",
            },
            
        ],
        events: [
            {
                name: "Storytelling Workshop",
                place: "Texas, US",
                day: "22",
                mounth: "nov",
                display: true,
            },
            {
                name: "Painting Art Contest 2020",
                place: "New York, US",
                day: "10",
                mounth: "oct",
                display: true,
            },
            {
                name: "International Art Fair 2020",
                place: "Hamburg, Germany",
                day: "23",
                mounth: "nov",
                display: true,
            },
            {
                name: "Street Performance: Call for Artist",
                place: "Illinois, US",
                day: "15",
                mounth: "dec",
                display: true,
            },
            {
                name: "Consumer Food Safety Education Conference",
                place: "Illinois, US",
                day: "22",
                mounth: "jul",
                display: true,
            },
            {
                name: "How meditation improve your mental health?",
                place: "Dubai",
                day: "12",
                mounth: "aug",
                display: true,
            },
        ],
        stories: [
            {
                text: "I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.",
                testimonialName: "Mina Hollace",
                workType: "Freelancer",
                testimonialPoster: "testimonial-avata-02.jpg",
            },
            {
                text: "MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
                testimonialName: "Madley Pondor",
                workType: "IT Specialist",
                testimonialPoster: "testimonial-avata-04.jpg",
            },
            {
                text: "I am happy with their arranngement of lessons and subjects. Their reflect a scientific investigation.",
                testimonialName: "Luvic Dubble",
                workType: "Private Tutor",
                testimonialPoster: "testimonial-avata-01.jpg",
            },
        ],
        footerLinks: [
            {
                name: "Start Here",
                category: "Explore",
                display: true,
            },
            {
                name: "Success story",
                category: "Explore",
                display: true,
            },
            {
                name: "Blog",
                category: "Explore",
                display: true,
            },
            {
                name: "Courses",
                category: "Explore",
                display: true,
            },
            {
                name: "About us",
                category: "Explore",
                display: true,
            },
            {
                name: "Contact us",
                category: "Explore",
                display: true,
            },
            {
                name: "Membership",
                category: "Information",
                display: true,
            },
            {
                name: "Purchase guide",
                category: "Information",
                display: true,
            },
            {
                name: "Privacy policy",
                category: "Information",
                display: true,
            },
            {
                name: "Terms of services",
                category: "Information",
                display: true,
            },
        ],
    },
    
});
