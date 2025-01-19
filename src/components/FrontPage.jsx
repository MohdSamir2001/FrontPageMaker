import React, { useContext } from "react";
import logo from "../assets/Picture1.png";
import PageInfoContext from "../utils/DetailsContext";
const FrontPage = () => {
  const {
    studentName,
    teacherName,
    subjectName,
    subjectCode,
    departmentName,
    semesterNumber,
    sessionNumber,
    batchNumber,
    rollNumber,
    professionName,
    branchName,
  } = useContext(PageInfoContext);
  return (
    <div id="content-to-pdf">
      <div className="pl-10 pr-6 py-8  flex  flex-col items-center">
        <img src={logo} alt="" />
        <h1 className="font-semibold text-2xl">A Lab Practical File</h1>
        <div className="mt-12 flex justify-center flex-col items-center">
          <h1 className="font-semibold text-5xl">{subjectName + "Lab"}</h1>
          <h1 className="font-semibold mt-3 text-2xl">
            {"LAB CODE : " + subjectCode}
          </h1>
          {branchName === "CSE" && (
            <h1 className="font-semibold mt-16 text-4xl">
              Computer Science And Engineering
            </h1>
          )}
          <h1 className="font-semibold text-2xl">
            {"Session : " + sessionNumber}
          </h1>
          <h1 className="font-semibold text-2xl">
            {"Semester : " + semesterNumber}
          </h1>
        </div>
      </div>
      <div className="mt-20 px-6 items-center flex justify-between">
        <div>
          <h1 className="font-semibold mb-5 mt-8 text-3xl underline">
            Submitted to :
          </h1>
          <h1 className="font-semibold text-xl ">{teacherName}</h1>
          <h1 className="font-semibold ">{"(" + professionName + ")"}</h1>
          <h1 className="font-semibold ">{"(" + departmentName + ")"}</h1>
        </div>
        <div className="py-5">
          <h1 className="font-semibold mt-6 mb-5 text-3xl underline">
            Submitted by :
          </h1>
          <h1 className="font-semibold text-xl ">{studentName}</h1>
          <h1 className="font-semibold ">{"(Batch : " + batchNumber + ")"}</h1>
          <h1 className="font-semibold ">{"(Roll No : " + rollNumber + ")"}</h1>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
