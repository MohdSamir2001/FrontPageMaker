import { createContext } from "react";
const PageInfoContext = createContext({
  studentName: "",
  setStudentName: () => {},
  teacherName: "",
  setTeacherName: () => {},
  subjectName: "",
  setSubjectName: () => {},
  subjectCode: "",
  setSubjectCode: () => {},
  departmentName: "",
  setDepartmentName: () => {},
  semesterNumber: "",
  setSemesterNumber: () => {},
  sessionNumber: "",
  setSessionNumber: () => {},
  bactchNumber: "",
  setBatchNumber: () => {},
  rollNumber: "",
  setRollNumber: () => {},
  professionName: "",
  setProfessionName: () => {},
  branchName: "",
  setBranchName: () => {},
});

export default PageInfoContext;
