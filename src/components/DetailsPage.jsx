import React, { useContext, useRef } from "react";
import PageInfoContext from "../utils/DetailsContext";

const DetailsPage = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);

    [
      setStudentName,
      setRollNumber,
      setBatchNumber,
      setBranchName,
      setSubjectName,
      setSubjectCode,
      setTeacherName,
      setProfessionName,
      setDepartmentName,
      setSessionNumber,
      setSemesterNumber,
    ].forEach((setter, index) => {
      setter(refs[index].current.value);
      refs[index].current.value = "";
    });
  };

  return (
    <div className="w-full min-h-screen p-4">
      <form
        className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
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
          <React.Fragment key={index}>
            {placeholder === "Choose Profession" ? (
              <select
                ref={refs[index]}
                className="p-1 border rounded-md text-gray-600 text-lg"
              >
                <option value="">Choose Profession</option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Professor">Professor</option>
              </select>
            ) : (
              <input
                ref={refs[index]}
                type="text"
                placeholder={placeholder}
                className="w-full border rounded-md p-1 text-lg"
              />
            )}
          </React.Fragment>
        ))}
        {!show && (
          <button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md p-2 text-lg">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default DetailsPage;
