// Force Webpack à inclure les fichiers
import "./subjects/Teacher";
import "./subjects/Subject";
import "./subjects/Cpp";
import "./subjects/React";
import "./subjects/Java";

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

namespace Subjects {
  // Création d’un teacher
  export const teacher: Subjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
    experienceTeachingReact: 5,
    experienceTeachingJava: 2,
  };

  // Cpp
  const cpp = new Subjects.Cpp();
  cpp.setTeacher(teacher);
  console.log("Cpp:");
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // React
  const react = new Subjects.React();
  react.setTeacher(teacher);
  console.log("React:");
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());

  // Java
  const java = new Subjects.Java();
  java.setTeacher(teacher);
  console.log("Java:");
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());
}

