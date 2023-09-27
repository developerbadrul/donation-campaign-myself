import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function Piechart() {
  const [stdudentSubject, setStudentsubject] = useState([]);
  const [studentMarks, setStudentMarks] = useState([]);

  useEffect(() => {
    const getStudentdata = async () => {
      // Fetch data from your JSON file
      // const reqData = await fetch("donation.json");
      // const resData = await reqData.json();

      const totalDonation = 12; // Set the total donation value to 12

      // Get the donated data from localStorage
      const getItem = JSON.parse(localStorage.getItem("donated"));

      const givenDonation = getItem ? getItem.length : 0;

      // Create arrays for subjects and marks (values for the pie chart)
      const sSubject = ["Total Donation", "Given Donation"];
      const sMarks = [totalDonation, givenDonation];

      setStudentsubject(sSubject);
      setStudentMarks(sMarks);
    };

    getStudentdata();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <h3 className="mt-3">Welcome to Piechart </h3>
        <Chart
          type="pie"
          width={1349}
          height={550}
          series={studentMarks}
          options={{
            title: { text: "Donation Chart" },
            noData: { text: "Empty Data" },
            labels: stdudentSubject,
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default Piechart;
