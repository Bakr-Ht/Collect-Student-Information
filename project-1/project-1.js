// ==============================================
// TASK 1: Collect Student Information
// ==============================================

// 1. Ask for student name, class, and marks for 5 subjects
// 2. Store all information in variables

// ask for student name
//  your code here

// ask for class

// ask for the marks of 5 subjects

// Display collected details in console

//  print student name and class
console.log("-------------Student Details-------------\n");

//  your code here for each subject mark
let Student_Name = prompt("Enter Student Name:");
let Student_Class = prompt("Enter Student Class:");

console.log(`Student Name : ${Student_Name}\nStudemt Class : ${Student_Class}`);

//  print all 5 subject marks

console.log("-------------Student Subjects Marks-------------\n");

//  your code here

// enter subject names:
const subjects = [];
for (let i = 1; i <= 5; i++) {
  let sutjectName = prompt(`Enter Subject ${i} Name:`);
  subjects.push(sutjectName);
}

// enter marks for each subject:
const subjectMarks = [];
for (let i = 0; i < subjects.length; i++) {
  let mark = Number(prompt(`Enter marks for subject ${i}:`));
  subjectMarks.push(mark);
}

// display subject + marks:
for (let i = 0; i < subjects.length; i++) {
  console.log(`Marks for ${subjects[i]}: ${subjectMarks[i]}\n`);
}

// ==============================================
// TASK 2: Calculate Total and Average
// ==============================================

// 1. Calculate total marks from all subjects
// 2. Calculate average percentage
// 3. Store results in variables
// 4. Display total and average marks in console

console.log("-------------Student Total Marks and Average-------------\n");
//  your code here
const sum = subjectMarks.reduce((total, mark) => total + mark, 0);
const average = parseFloat(sum / subjects.length);
console.log(`Total Marks: ${sum}\naverage Marks: ${average}`);
// ==============================================
// TASK 3: Determine Grade Category
// ==============================================

// 1. Use conditional statements to determine grade (A, B, C, D, F)
// 2. Based on average percentage:
//    - 90–100 → A
//    - 80–89 → B
//    - 70–79 → C
//    - 60–69 → D
//    - Below 60 → F

console.log("-------------Student Grade-------------\n");
//  your code here

for (let i = 0; i < subjects.length; i++) {
  switch (true) {
    case subjectMarks[i] >= 90:
      console.log(` the Grade for ${subjects[i]} is: A`);
      break;
    case subjectMarks[i] >= 80:
      console.log(` the Grade for ${subjects[i]} is: B`);
      break;
    case subjectMarks[i] >= 70:
      console.log(` the Grade for ${subjects[i]} is: C`);
      break;
    case subjectMarks[i] >= 60:
      console.log(` the Grade for ${subjects[i]} is: D`);
      break;
    case subjectMarks[i] >= 50:
      console.log(` the Grade for ${subjects[i]} is: F+`);
      break;
    default:
      console.log(` the Grade for ${subjects[i]} is: F`);
  }
}
// ==============================================
// TASK 4: Check Subject Performance
// ==============================================

// 1. For each subject, check if student passed (marks >= 40)
// 2. Count how many subjects passed/failed
// 3. Display subject performance and averagemary

//  your code here
console.log("-------------Subject Performance && averagemary-------------");
const subject_performance_averagemary = (passCount = 0, failCount = 0) => {
  // Check pass/fail for each subject
  for (let sub of subjectMarks) {
    if (sub >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }
  console.log(
    `Total Subjects Passed: ${passCount}\nTotal Subjects Failed: ${failCount}`
  );
};
subject_performance_averagemary();
//  print number of subjects passed and failed

// ==============================================
// TASK 5: Bonus Features
// ==============================================

// 1. Check if student is eligible for scholarship (average >= 85)
// 2. Determine performance category (Excellent, Good, Average, Poor)
// 3. (Optional) Calculate rank based on total marks

//  your code here
console.log("-------------Bonus Features-------------\n");

const check_scholarship_performance = (average) => {
  // Check scholarship eligibility
  switch (true) {
    case average >= 85:
      console.log("The student is eligible for scholarship");
      break;
    default:
      console.log("The student is not eligible for scholarship");
  }

  // Check performance category
  switch (true) {
    case average >= 90:
      console.log("Performance Category: Excellent");
      break;
    case average >= 80:
      console.log("Performance Category: Very good");
    case average >= 75:
      console.log("Performance Category: Good");
      break;
    case average >= 60:
      console.log("Performance Category: Average");
      break;
    default:
      console.log("Performance Category: Poor");
  }
};

check_scholarship_performance(average);
//  Display eligibility, performance category, etc.
