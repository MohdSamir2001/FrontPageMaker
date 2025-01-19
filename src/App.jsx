import React, { useContext } from "react";
import html2pdf from "html2pdf.js";
import FrontPage from "./components/FrontPage";
import DetailsPage from "./components/DetailsPage";
import PageInfoContext from "./utils/DetailsContext";
import { useState } from "react";
import DownloadPage from "./components/DownloadPage";

const App = () => {
  const [studentName, setStudentName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [semesterNumber, setSemesterNumber] = useState("");
  const [sessionNumber, setSessionNumber] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [professionName, setProfessionName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [show, setShow] = useState(false);

  const handleDownloadPdf = () => {
    setShow(false);
    const element = document.getElementById("content-to-pdf"); // The element to be converted to PDF
    const options = {
      margin: 1,
      filename: "webpage-content.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2, // Higher scale for better quality, but no need for heavy rendering that rasterizes the text
        logging: false,
        letterRendering: true, // Ensures that text is rendered as text
        useCORS: true, // If using external images, enable CORS
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(element) // The content to be captured
      .set(options) // The options for generating the PDF
      .save(); // Automatically downloads the generated PDF
  };
  return (
    <PageInfoContext.Provider
      value={{
        show,
        setShow,
        studentName,
        setStudentName,
        teacherName,
        setTeacherName,
        subjectName,
        setSubjectName,
        subjectCode,
        setSubjectCode,
        departmentName,
        setDepartmentName,
        semesterNumber,
        setSemesterNumber,
        sessionNumber,
        setSessionNumber,
        batchNumber,
        setBatchNumber,
        rollNumber,
        setRollNumber,
        professionName,
        setProfessionName,
        branchName,
        setBranchName,
      }}
    >
      <div className="relative">
        <FrontPage />
        {!show && (
          <div className="absolute top-0 z-20">
            <DetailsPage />
          </div>
        )}
        {show && (
          <div className="absolute top-0 z-10">
            <DownloadPage />
          </div>
        )}
        <button
          onClick={handleDownloadPdf}
          className="w-[90%] left-5  text-center absolute z-10 top-80 bg-red-500 text-white text-2xl rounded-md p-2 font-semibold"
        >
          Print
        </button>
      </div>
    </PageInfoContext.Provider>
  );
};

export default App;
