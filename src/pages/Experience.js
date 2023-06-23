import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Goverment Higher Secondary School,Belagondapalli, Tamil Nadu </h3>
          <p> High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           St Joseph's College of Arts and Science for Women, Hosur, Tamil Nadu.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Applications</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Er Perumal Manimekalai College of Engineering,Hosur, Tamil Nadu </h3>
          <p>Master's Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Customer Care Executive - Allsec Technologies Limited
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, Karnataka
          </h4>
          <p>The duties of a Customer Care Executive involve administering surveys, compiling reports based on customer feedback, and offering precise guidance to customers for issue resolution.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2021 - Nov 2021 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            HRO Executive - RS HR Team Solutions Pvt.Ltd(Flipkart)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Thally road,Mathagondapalli,Tamil Nadu.
          </h4>
          <p>
          Collecting documents from new joiners and sending them via mail to the head office.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer - Getster Tech Pvt Ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hosur, Tamil Nadu
          </h4>
          <p>I completed a 6-month internship in Angular and Nest Js, where I worked on the front end for 3 projects and developed both the front end and back end for 4 applications.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
   
   
    </div>
  );
}

export default Experience;