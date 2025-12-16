const student = {
    name: "Ankit",
    age: 19,
    city: "Mumbai"
};
console.log(student);

const post = {
    username: "ankitvadnere",
    content: "Hi there I am Ankit!",
    likes: 23,
    reposts: 8,
    tags: ["@AmoghIsGay", "@AbhiramLiar"]
};
console.log(post.username);
//OR
console.log(post["content"]);

student.city = "Dombivli";

//Object of objects
const Class = {
    Ankit: {
        cgpa: 8.9,
        city: "Dombivli"
    },
    Amogh: {
        cgpa: 9.25,
        city: "Talegaon"
    }, 
    Aastha: {
        cgpa: 9.0,
        city: "Chandrapur"
    }
};

//Array of objects
let info = [
    {
        name: "Harshita",
        age: 19,
        college: "BVCOE"
    },
    {
        name: "Rajat",
        age: 19,
        college: "SPIT"
    },
    {
        name: "Abhiram",
        age: 19,
        college: "VIT"
    }
];