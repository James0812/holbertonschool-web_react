interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(teacher3);
console.log(director1);

// ------------------------------
// TÂCHE 3 : printTeacher
// ------------------------------

// Interface pour la fonction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implémentation de la fonction
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test
console.log(printTeacher("John", "Doe")); // J. Doe

// ------------------------------
// TÂCHE 4 : StudentClass
// ------------------------------

// Interface décrivant le constructeur
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface décrivant la classe
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Classe StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test
const student = new StudentClass("John", "Doe");
console.log(student.displayName());      // John
console.log(student.workOnHomework());   // Currently working

