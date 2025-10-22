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

let Student_Name = document.getElementById("studentName");
Student_Name.innerHTML = `<strong style="color: green;">${prompt(
  "Enter Student Name:"
)}</strong> `;

let Student_Class = document.getElementById("className");
Student_Class.innerHTML = `<strong style="color: blue;"> ${prompt(
  "Enter Student Class:"
)}</strong> `;

// enter subject names:
const subjects = [];
for (let i = 1; i <= 5; i++) {
  let sutjectName = prompt(`Enter Subject ${i} Name:`);
  subjects.push(sutjectName);
}

// // enter marks for each subject:
const subjectMarks = [];
for (let i = 0; i < subjects.length; i++) {
  let mark = Number(prompt(`Enter marks for subject ${i}:`));
  subjectMarks.push(mark);
}
let Con_Marks = document.getElementById("subjectMarks");
// // display subject + marks:
for (let i = 0; i < subjects.length; i++) {
  Con_Marks.innerHTML += `<li><strong>Marks for <span>${subjects[i]}</span>: ${subjectMarks[i]} </strong></li>`;
}

// simple color change function
const Subject_Color = (subjects) => {
  let color = Con_Marks.querySelectorAll("span");
  subjects.forEach((sub, index) => {
    switch (true) {
      case sub === "css":
        color[index].style.backgroundColor = "blue";
        color[index].style.color = "white";
        color[index].style.fontSize = "25px";

        break;

      case sub === "js":
        color[index].style.backgroundColor = "yellow";
        color[index].style.fontSize = "20px";
        break;

      case sub === "html":
        color[index].style.backgroundColor = "orange";
        color[index].style.fontSize = "20px";
        break;
    }
  });
};

Subject_Color(subjects);

// // ==============================================
// // TASK 2: Calculate Total and Average
// // ==============================================

// // 1. Calculate total marks from all subjects
// // 2. Calculate average percentage
// // 3. Store results in variables
// // 4. Display total and average marks in console

//  your code here
const sum = subjectMarks.reduce((total, mark) => total + mark, 0);
const average = parseFloat(sum / subjects.length);
let Con_Total = document.getElementById("totalMarks");
let Con_Avg = document.getElementById("average");
Con_Total.innerHTML = `<strong>${sum}</strong>`;
Con_Avg.innerHTML = `<strong>${average}</strong>`;

// // ==============================================
// // TASK 3: Determine Grade Category
// // ==============================================

// // 1. Use conditional statements to determine grade (A, B, C, D, F)
// // 2. Based on average percentage:
// //    - 90–100 → A
// //    - 80–89 → B
// //    - 70–79 → C
// //    - 60–69 → D
// //    - Below 60 → F

let Con_Grade = document.getElementById("grade");
for (let i = 0; i < subjects.length; i++) {
  switch (true) {
    case subjectMarks[i] >= 90:
      Con_Grade.innerHTML += ` the Grade for ${subjects[i]} is: A <br><br>`;
      break;
    case subjectMarks[i] >= 80:
      Con_Grade.innerHTML += ` the Grade for ${subjects[i]} is: B <br><br>`;
      break;
    case subjectMarks[i] >= 70:
      Con_Grade.innerHTML += ` the Grade for ${subjects[i]} is: C <br><br>`;
      break;
    case subjectMarks[i] >= 60:
      Con_Grade.innerHTML += ` the Grade for ${subjects[i]} is: D <br><br>`;
      break;
    case subjectMarks[i] >= 50:
      Con_Grade.innerHTML += ` the Grade for ${subjects[i]} is: F+ <br><br>`;
      break;
    default:
      Con_Grade.innerHTML += ` the Grade for ${subjects[i]} is:  F <br><br>`;
  }
}
// // ==============================================
// // TASK 4: Check Subject Performance
// // ==============================================

// // 1. For each subject, check if student passed (marks >= 40)
// // 2. Count how many subjects passed/failed
// // 3. Display subject performance and averagemary

let Sub_Passed = document.getElementById("passedSubjects");
let Sub_Failed = document.getElementById("failedSubjects");
const subject_performance_averagemary = (passCount = 0, failCount = 0) => {
  // Check pass/fail for each subject
  for (let sub of subjectMarks) {
    if (sub >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  Sub_Passed.innerHTML = `<strong>${passCount}<br></strong>`;
  Sub_Failed.innerHTML = `<strong>${failCount}</strong>`;
};
subject_performance_averagemary();
// //  print number of subjects passed and failed

// // ==============================================
// // TASK 5: Bonus Features
// // ==============================================

// // 1. Check if student is eligible for scholarship (average >= 85)
// // 2. Determine performance category (Excellent, Good, Average, Poor)
// // 3. (Optional) Calculate rank based on total marks

const check_scholarship_performance = (average) => {
  // Check scholarship eligibility
  let Con_scholarship = document.getElementById("scholarship");
  let Con_performance = document.getElementById("performance");
  switch (true) {
    case average >= 85:
      Con_scholarship.innerHTML = `<strong>The student is eligible for scholarship</strong>`;
      break;
    default:
      Con_scholarship.innerHTML = `<strong>The student is not eligible for scholarship</strong>`;
  }

  // Check performance category
  switch (true) {
    case average >= 90:
      Con_performance.innerHTML = `<strong> Excellent</strong>`;
      break;
    case average >= 85:
      Con_performance.innerHTML = `<strong> Very good</strong>`;
      break;
    case average >= 75:
      Con_performance.innerHTML = `<strong> Good</strong>`;
      break;
    case average >= 60:
      Con_performance.innerHTML = `<strong> Average</strong>`;
      break;
    default:
      Con_performance.innerHTML = `<strong> Poor</strong>`;
  }
};

check_scholarship_performance(average);
// //  Display eligibility, performance category, etc.
