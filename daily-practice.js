// Daily JavaScript Practice - 29 September 2026

const student = {
  name: "Azka",
  focus: "Frontend Development",
  goal: "Keep learning and building every day",
};

const topics = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git & GitHub",
];

function showProgress() {
  console.log(`Hello, ${student.name}!`);
  console.log(`Today's focus: ${student.focus}`);
  console.log(`Goal: ${student.goal}`);

  topics.forEach((topic, index) => {
    console.log(`${index + 1}. ${topic}`);
  });
}

showProgress();