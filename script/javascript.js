const courseList = [
    { code: "ACIT 1515", name: " Scripting for IT" },
    { code: "ACIT 1310", name: " Technical math for IT" },
    { code: "ACIT 1620", name: " Web Fundamentals" }
];

let course = prompt("Enter a 4 digit number:");

while (course.length != 4) {
    console.log("Invalid input");
    course = prompt("Enter a 4 digit number:");
}

let found = false;

for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.includes(course)) {
        found = true;
        console.log(`Yes I am taking the course: ${course} - ${courseList[i].name}`);
    }
}

if (!found) {
    courseList.push({ code: course, name: null });
    console.log("Added new course to list");
}