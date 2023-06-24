import React, { useState, useEffect } from "react";
import Header from "/components/Header";

export default function AboutMePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./project-data/aboutMePageData.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <Header />
    <div className="aboutMePageContainer">
     
      <h1 className="aboutMePageTitle">{data.name}</h1>
      <h3>{data.tagline}</h3>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Address: {data.address}</p>
      <p>Website: {data.website}</p>

      <h2>Summary</h2>
      <p>{data.summary}</p>

      <h2>Education</h2>
      <ul>
        <li>
          <p>Institution: {data.education[0].institution}</p>
          <p>Area: {data.education[0].area}</p>
          <p>Study Type: {data.education[0].studyType}</p>
          <p>Start Date: {data.education[0].startDate}</p>
          <p>End Date: {data.education[0].endDate}</p>
          <p>GPA: {data.education[0].gpa}</p>
          <p>Courses:</p>
          <ul>
            {data.education[0].courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>{data.skills[0].s1}</li>
        <li>{data.skills[0].s2}</li>
        <li>{data.skills[0].s3}</li>
        <li>{data.skills[0].s4}</li>
      </ul>
    </div>
    </div>
  );
};
