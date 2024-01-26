import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";

const experiences = [
  {
    company: "Palo Alto Networks",
    position: "Staff Engineer",
    duration: "September 2023 - Present",
    image: "/PaloAltoNetworks_2020_Logo.png",
    projects: [
      {
        name: "Prisma Cloud",
        description:
          "Prisma Cloud is Palo Alto Networks' cloud native security solution that provides Cloud Security Posture Management (CSPM) and Cloud Workload Protection (CWP) components.",
      },
    ],
    rolesResponsibilities: [
      "Conducted in-depth testing of OAuth2.0 integration for 3rd-party systems, notably ServiceNow within Prisma Cloud. Ensured seamless functionality and security, validating compatibility for a smooth collaborative experience.",
      "Performed meticulous testing of Cortex XSoar version upgrades, assessing compatibility across different versions. Ensured a hassle-free transition, contributing to enhanced system performance.",
      "Tested Slow Queue functionality, addressing challenges in customer networks with slower response times. This proactive segregation prevents timeouts, optimizing integrations with critical tools like JIRA, ServiceNow, and Webhook resulting in a 90% reduction in integration timeouts.",
    ],
  },
  // Add more experience entries as needed
  {
    company: "Akamai Technologies",
    position: "Software Engineer",
    duration: "January 2022 - September 2023",
    image: "/Akamai_Technologies.png",
    projects: [
      {
        name: "Advanced API Security",
        description:
          "Advanced API Security is a project designed to safeguard users against the top 10 vulnerabilities outlined by OWASP API Security",
      },
      {
        name: "Evaluation of CNAPP Vendors",
        description: "A cloud native application protection platform (CNAPP) is a security and compliance solution that helps teams build, deploy, and run secure cloud native applications in today's heavily automated, dynamic public cloud environments",
      },
    ],
    rolesResponsibilities: [
      "Led the development of a robust framework utilizing Finite State Machines to create positive flows for legitimate users. Implemented comprehensive logging for each API endpoint through an nginx server.",
      "Engineered a client to send requests based on the Open API Specification. Addressed OWASP API Top 10 vulnerabilities, focusing on BOLA (Broken Object Level Authorization) and Broken User Authentication.",
      "Revitalized the crAPI application by introducing new API endpoints using Java and Spring Boot, incorporating BOLA vulnerabilities, and implementing Role and Group-based authorization. Conducted API request fuzzing with RESTler and Open API mocker.",
      "Evaluated Cloud-Native Application Protection Platform (CNAPP) vendors, demonstrating proficiency in Docker, Kubernetes, API Automation, and Cloud Deployment.",
      "Leveraged tools like docker-bench, Openscap, Infection Monkey, and Networking Policies and Security.",
    ],
  },
  {
    company: "Dell Technologies",
    position: "Test Engineer 1",
    duration: "February 2021 - January 2022",
    image: "/Dell.png",
    projects: [
      {
        name: "CSG Software Automation",
        description:
          "Automating various functionalities of a Dell laptop's software features.",
      },
    ],
    rolesResponsibilities: [
      "Employed Windows system tools, Wmic utility, and various Windows versions to streamline the automation workflow.",
      "Incorporated open-source tools and technologies to augment the pre-existing automation framework.",
      "Diagnosed and resolved system issues, introducing optimized solutions to minimize manual interventions.",
      "Successfully automated testing processes for Dell laptops/desktops at the Original Design Manufacturers (ODMs), resulting in a 40% reduction in manual efforts.",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <section id="experience">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {experiences.map((experience, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  {/* Image component for the company logo */}
                  <Image
                    src={experience.image}
                    alt={`Logo of ${experience.company}`}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{experience.company}</h1>
                  <p className="text-lg font-semibold mb-2">{experience.position}</p>
                  <p className="text-sm text-gray-500 mb-2">{experience.duration}</p>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Projects:</h2>
                    {experience.projects.map((project, projectIdx) => (
                      <div key={projectIdx} className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{project.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Roles and Responsibilities:</h2>
                    <ul className="list-disc ml-6">
                      {experience.rolesResponsibilities.map((role, roleIdx) => (
                        <li key={roleIdx}>{role}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
