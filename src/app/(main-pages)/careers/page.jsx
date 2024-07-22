import React from "react";
import "./style.scss";
import AssetPath from "@/app/utils/assetpath";
import ExpandParagraph from "./expandParagraph";
import getDatabase from "@/app/utils/mongoConnection";
import Link from "next/link";

// const jobs = [
//   {
//     title: "Backend Developer",
//     tags: ["FULL TIME", "3 YEARS EXPERIENCE", "PHP"],
//     salary: "MYR 5000 - 7000",
//     description:
//       "You will work in a software consulting team to build and support Claritas suites of business software on CRM, eCommerce & Analytics. You will get to involved in technology on cloud, big data and AI. This is an opportunity for you to work in a dynamic environment where you must take pride in module ownership and passionate in continuous improvement.",
//     location: "Petaling Jaya, Jaya One",
//     open: false,
//   },
//   {
//     title: "Backend Developer",
//     tags: ["FULL TIME", "3 YEARS EXPERIENCE", "PHP"],
//     salary: "MYR 5000 - 7000",
//     description: "lorem ipsum",
//     location: "Petaling Jaya, Jaya One",
//     open: true,
//   },
// ];

async function Careers() {
  const db = await getDatabase();
  const collection = db.collection("job-position");
  const jobs = await collection.find().toArray();
  return (
    <main className="careers">
      <div className="banner row">
        <div className="text col">
          <h1>WORK WITH</h1>
          <h1 className="pink_text">NUREN GROUP</h1>
          <p>
            At Nuren Group, we believe in fostering innovation, collaboration,
            and growth. As a leading digital media and technology company in
            Malaysia, we're dedicated to empowering talents who are passionate
            about making an impact in the digital landscape.
          </p>
          <img src={AssetPath("Careers/earth.png")} />
        </div>
      </div>
      <div className="our_team row">
        <img src={AssetPath("Careers/team.jpg")} alt="our team" />
        <div className="text col">
          <h1>MEET OUR TEAM</h1>
          <p>
            Our team at Nuren Group is a dynamic blend of innovators,
            collaborators, experts, and passionate individuals dedicated to
            excellence. United by a shared commitment to innovation and
            collaboration, we thrive on pushing boundaries and delivering
            exceptional results. With diverse skills and expertise, we're
            shaping the future of digital media and technology. Join us and be
            part of a team that's making a difference.
          </p>
        </div>
      </div>
      <div className="carousel row">
        <img src={AssetPath("Careers/career1.jpg")} alt="" />
        <img src={AssetPath("Careers/career2.jpg")} alt="" />
        <img src={AssetPath("Careers/career3.jpg")} alt="" />
        <img src={AssetPath("Careers/career5.jpg")} alt="" />
        <img src={AssetPath("Careers/career4.jpg")} alt="" />
      </div>
      {jobs.filter((job) => job.open).length ? (
        <div className="position colc">
          <h1>OPEN POSITIONS</h1>

          <div className="position_list col">
            {jobs.map((job, index) => {
              if (job.open == true)
                return (
                  <div className="pos col" key={index}>
                    <strong>{job.position}</strong>
                    <div className="tags row">
                      {job?.tags.map((tag) => (
                        <span className="tag">{tag}</span>
                      ))}
                    </div>
                    <ExpandParagraph
                      text={job.description}
                      className="description"
                    />
                    <div className="bottom_info row">
                      <div className="info rowc">
                        <span class="material-symbols-outlined">
                          attach_money
                        </span>
                        {job.salary}
                      </div>
                      <div className="info rowc">
                        <span class="material-symbols-outlined">distance</span>
                        {job.location}
                      </div>
                    </div>
                    <Link
                      className="apply_btn"
                      href={`/enquiry?job=${job.position}`}
                    >
                      APPLY
                    </Link>
                  </div>
                );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}

export default Careers;
