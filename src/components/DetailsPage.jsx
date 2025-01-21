import React, { useContext, useRef } from "react";
import PageInfoContext from "../utils/DetailsContext";

const DetailsPage = () => {
  const {
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
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
    setStudentName(ref1.current.value); // Enter Your Name
    setRollNumber(ref2.current.value); // Enter Your Roll Number
    setBatchNumber(ref3.current.value); // Enter Your Batch
    setBranchName(ref4.current.value); // Enter Your Branch Name
    setSubjectName(ref5.current.value); // Enter Your Subject Name
    setSubjectCode(ref6.current.value); // Enter Subject Code
    setTeacherName(ref7.current.value); // Enter Subject Teacher Name
    setProfessionName(ref8.current.value); // Choose Profession
    setDepartmentName(ref9.current.value); // Enter Department Name
    setSessionNumber(ref10.current.value); // Enter Your Session
    setSemesterNumber(ref11.current.value); // Enter Your Semester

    ref1.current.value = "";
    ref2.current.value = "";
    ref3.current.value = "";
    ref4.current.value = "";
    ref5.current.value = "";
    ref6.current.value = "";
    ref7.current.value = "";
    ref8.current.value = "";
    ref9.current.value = "";
    ref10.current.value = "";
    ref11.current.value = "";
  };
  return (
    <div className="promax:bg-slate-500  xr:bg-slate-500 xr:w-[414px] xr:min-h-[896px] pro:bg-slate-500 pro:w-[390px] pro:min-h-[844px] se:bg-slate-500 se:w-[375px] se:min-h-[667px] p-4 promax:min-h-[932px] w-[430px]">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          ref={ref1}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Your Name"
          type="text"
        />
        <input
          ref={ref2}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Your Role Number"
          type="text"
        />
        <input
          ref={ref3}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Your Batch: eg. A-1"
          type="text"
        />
        <input
          ref={ref4}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Your Branch Name"
          type="text"
        />
        <input
          ref={ref5}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Your Subject Name"
          type="text"
        />
        <input
          ref={ref6}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Subject Code: eg. KCS-XYZP"
          type="text"
        />
        <input
          ref={ref7}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Subject Teacher Name"
          type="text"
        />
        <select
          ref={ref8}
          className="p-2 text-gray-400 text-2xl rounded-md font-semibold"
        >
          <option
            className="font-semibold p-2"
            value="Choose Profession"
            key="1"
          >
            Choose Profession
          </option>
          <option
            className="font-semibold p-2"
            value="Assistant Professor"
            key="2"
          >
            Assistant Professor
          </option>
          <option className="font-semibold p-2" value="Professor" key="3">
            Professor
          </option>
        </select>
        <input
          ref={ref9}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Department Name eg.CSE"
          type="text"
        />
        <input
          ref={ref10}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Your Session: eg.2024-2025"
          type="text"
        />
        <input
          ref={ref11}
          className="w-full rounded-md p-2 font-semibold text-2xl"
          placeholder="Enter Your Semester eg.5"
          type="text"
        />
        <button className="w-full bg-green-400 text-white text-2xl rounded-md p-2 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DetailsPage;
