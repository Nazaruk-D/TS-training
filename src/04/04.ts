const ages = [18, 20, 22, 1, 100, 90, 15, 14];

const predicat = (age: number) => {
    return age > 90
}

const oldAges = []; // >90

type CourseType = {
    title: string,
    price: number
}

const courses =  [
    {title: "css",price: 110},
    {title: "JS",price: 200},
    {title: "React",price: 150}
]

const cheapPrediCate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses= []
}