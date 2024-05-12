interface Student {
  roll: number;
}

class StudentRecord {
  private student: Student;

  constructor(roll: number) {
    this.student = { roll };
  }

  getStudentRoll(): number {
    return this.student.roll;
  }

  // Additional functionality can be added here
}

// Usage
const studentRecord = new StudentRecord(22);
console.log(`Student Roll: ${studentRecord.getStudentRoll()}`);
