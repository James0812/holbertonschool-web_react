import "./subjects/index";

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const teacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
  experienceTeachingReact: 5,
  experienceTeachingJava: 2,
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(teacher);
console.log("Cpp:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(teacher);
console.log("React:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(teacher);
console.log("Java:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
