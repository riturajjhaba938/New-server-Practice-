const express = require("express");
const app = express();

/* Middleware */
app.use(express.json());

/* In-memory data */
const students = [
  { studentName: "ABDUL HAQUE", University: "SUxCG 714", UniversityUID: 108444 },
  { studentName: "ADITYA KUMAR", University: "SUxCG 702", UniversityUID: 108716 },
  { studentName: "AMAN KUMAR", University: "SUxCG 702", UniversityUID: 108500 },
  { studentName: "AMRIT RAJ", University: "SUxCG 702", UniversityUID: 108587 },
  { studentName: "Rituraj Jha", University: "SUxCG 702", UniversityUID: 108458 },
  { studentName: "Rituraj Jha", University: "SUxCG 702", UniversityUID: 108459 }
];

/* Home route */
app.get("/", (req, res) => {
  res.send("Express server is running 🚀 | Created by Rituraj Jha");
});

/* Get all students */
app.get("/students", (req, res) => {
  res.json(students);
});


app.get("/students/:key/:value", (req, res) => {
  console.log(req.params);
  console.log(req.params.key);
  console.log(req.params.value)
  const { key, value } = req.params;

  // Check if exists
  if (!students[0].hasOwnProperty(key)) {
    return res.status(400).json({
      message: `Invalid key '${key}'. Allowed keys are: ${Object.keys(students[0]).join(", ")}`
    });
  }

  const result = students.filter(
    student => String(student[key]).toLowerCase() === value.toLowerCase()
  );

  if (result.length === 0) {
    return res.status(404).json({ message: "No matching student found" });
  }

  res.json(result);
});

/* Server */
app.listen(3000, () => {
  console.log("Server started on port 3000 🚀");
});

