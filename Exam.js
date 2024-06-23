// JSON structure with questions and options
const questionsData = [
  {
    question: "What is the shorcut for new File",
    options: ["ctrl+n", "ctrl+shift+n", "ctrl+f", "ctrl+m"],
    correctOption: 1,
  },
  {
    question: "What is the run dilogue to open power point",
    options: ["powerpnt", "powerppt", "powerpptx", "powerpoint"],
    correctOption: 0,
  },
  {
    question: "To convert text to table in excel the shortcut is...",
    options: ["Ctrl+T", "ctrl+Tab", "ctrl+shift+t", "ctrl+f9"],
    correctOption: 0,
  },
  {
    question: "To convert word to text in MS Word we use function...",
    options: ["CardText", "CartText", "CurtText", "CrudeText"],
    correctOption: 0,
  },
  {
    question: "To center align a text in MS Word the shortcut is",
    options: ["Ctrl+Tab+E", "Ctrl+Shift+E", "Ctrl+C", "Ctrl+E"],
    correctOption: 3,
  },
  {
    question: "H20 formulae in MS Word is an example of",
    options: ["subscript", "superscript", "ctrl+f9", "uppertext"],
    correctOption: 1,
  },
  {
    question: "Excel is an example of",
    options: [
      "SpreadSheet Application",
      "WorksheetApplication",
      "Word Precoessing Application",
      "Text Processing Application",
    ],
    correctOption: 0,
  },
  {
    question: "To insert date and time in Notepad The shorcut is",
    options: ["F5", "Shift+F5", "Ctrl+F5", "Alt+F5"],
    correctOption: 0,
  },
  {
    question: "In Spread Sheet Letters are used to represent",
    options: ["Column", "Row", "Block", "Cell Address"],
    correctOption: 0,
  },
  {
    question: "Spread Sheets cannot",
    options: [
      "do calculations",
      "create graphics",
      "plot chart",
      "data analysis",
    ],
    correctOption: 0,
  },
  {
    question: "=mod(37,5) returns in excel",
    options: ["0", "7", "6", "2"],
    correctOption: 3,
  },
  {
    question: "functions in excel begin with...",
    options: ["Equal To (=)", "Plus (+) sign", "period(.) sign", "Braces ()"],
    correctOption: 0,
  },
  {
    question: "Blank columns are inserted ... the column",
    options: ["before", "after", "below", "down"],
    correctOption: 0,
  },
  {
    question: "The shortcut for screen shot in windows is...",
    options: ["alt+s", "windows+s", "windows+shift+s", "windows+alt+s"],
    correctOption: 2,
  },
  {
    question: "To know details of computer we write in ... in run dialogue box",
    options: ["msinfo64", "windows64", "msinfo32", "windowsinfo32"],
    correctOption: 2,
  },
  {
    question: "The shortcut to open run dialogue box is.",
    options: [
      "windows key+shift+r",
      "windows key+r",
      "windows key+down arrow",
      "windows+alt+s",
    ],
    correctOption: 1,
  },
  {
    question: "The shorcut to insert chart in excel is",
    options: ["windows key+f11", "alt+shift+c", "f11", "f5"],
    correctOption: 2,
  },
  {
    question: "The shorcut to insert chart in excel is",
    options: ["windows key+f11", "alt+shift+c", "f11", "f5"],
    correctOption: 2,
  },
  {
    question: " ______________ help us to see patterns.",
    options: ["graphs", "chart", "calculations", "spreadsheets"],
    correctOption: 0,
  },
];

// Function to populate the questions and options
function populateQuestions() {
  const form = document.getElementById("exam-form");
  questionsData.forEach((questionData, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `Q${index + 1}: ${questionData.question}`;
    questionDiv.appendChild(questionTitle);

    questionData.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      console.log(`Option is  ${option} and option Index is ${optionIndex}`);
      input.value = optionIndex;
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      questionDiv.appendChild(label);
    });

    form.appendChild(questionDiv);
  });
}

// Function to check the selected answers
function checkAnswers() {
  const form = document.getElementById("exam-form");
  const result = document.getElementById("result");
  let score = 0;

  questionsData.forEach((questionData, index) => {
    const selectedOption = form.elements[`question${index}`].value;
    if (parseInt(selectedOption) === questionData.correctOption) {
      score++;
    }
  });
  alert(`You scored ${score} out of ${questionsData.length}`);
  result.textContent = `You scored ${score} out of ${questionsData.length}.`;
}

// Populate the questions and options on page load
window.onload = populateQuestions;
