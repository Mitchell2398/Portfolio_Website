import React from "react";
import Header from "/components/Header";

export default function AboutMePage() {
  const [aboutMePageData, setAboutMePageData] = React.useState({});

  React.useEffect(() => {
    fetch("aboutMePageData.json")
      .then((response) => response.json())
      .then((data) => setAboutMePageData(data));
  }, []);

  const { name, email, address, website, summary } = aboutMePageData;
  const education = aboutMePageData.education && aboutMePageData.education[0];
  const skills = aboutMePageData.skills && aboutMePageData.skills[0];

  return (
    <div className="aboutMePageContainer">
      <Header />
      <h2 className="aboutMePageTitle">Introduction</h2>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{address}</li>
        <li>{website}</li>
        <li>{summary}</li>
      </ul>
      <h2>Education</h2>
      {education && (
        <ul>
          <li>{education.institution}</li>
          <li>{education.area}</li>
          <li>{education.studyType}</li>
          <li>
            {education.startDate} - {education.endDate}
          </li>
          <li>{education.gpa}</li>
        </ul>
      )}
      <h2>Skills</h2>
      {skills && (
        <ul>
            <li>{skills.s1}</li>
            <li>{skills.s2}</li>
            <li>{skills.s3}</li>
            <li>{skills.s4}</li>
        </ul>


      )}

    </div>
  );
}
