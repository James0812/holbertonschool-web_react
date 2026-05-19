/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

namespace Subjects {
  export const teacher: Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
    experienceTeachingReact: 5,
    experienceTeachingJava: 2,
  };

  const cpp = new Cpp();
  cpp.setTeacher(teacher);
  console.log("Cpp:");
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  const react = new React();
  react.setTeacher(teacher);
  console.log("React:");
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());

  const java = new Java();
  java.setTeacher(teacher);
  console.log("Java:");
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());
}

