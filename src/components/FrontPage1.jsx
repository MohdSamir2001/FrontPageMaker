import React from "react";

const FrontPage1 = () => {
  [
    setStudentName,
    setTeacherName,
    setSubjectName,
    setSubjectCode,
    setDepartmentName,
    setSemesterNumber,
    setSessionNumber,
    setBatchNumber,
    setRollNumber,
    setProfessionName,
    setBranchName,
  ].forEach((setter, index) => {
    setter(refs[index].current.value);
    refs[index].current.value = "";
  });
  const {
    show,
    setShow,
    setStudentName,
    setTeacherName,
    setSubjectName,
    setSubjectCode,
    setDepartmentName,
    setSemesterNumber,
    setSessionNumber,
    setBatchNumber,
    setRollNumber,
    setProfessionName,
    setBranchName,
  } = useContext(PageInfoContext);
  const refs = Array.from({ length: 11 }, () => useRef(null));
  return (
    <div>
      <form>
        {[
          "Enter Your Name",
          "Enter Your Roll Number",
          "Enter Your Batch: eg. A-1",
          "Enter Your Branch Name",
          "Enter Your Subject Name",
          "Enter Subject Code: eg. KCS-XYZP",
          "Enter Subject Teacher Name",
          "Choose Profession",
          "Enter Department Name eg.CSE",
          "Enter Your Session: eg.2024-2025",
          "Enter Your Semester eg.5",
        ].map((placeholder, index) => (
          <>
            {placeholder === "Choose Profession" ? (
              <select ref={refs[index]} name="" id="">
                <option value=""></option>
                <option value=""></option>
              </select>
            ) : (
              <input type="text" ref={refs[index]} placeholder={placeholder} />
            )}
          </>
        ))}
      </form>
    </div>
  );
};

export default FrontPage1;
