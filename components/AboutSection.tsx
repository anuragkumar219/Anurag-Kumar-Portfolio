import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "UI Automation" },
  { skill: "Test Development" },
  { skill: "Test Case Planning" },
  { skill: "Backend Testing" },
  { skill: "Postman" },
  { skill: "Selenium" },
  { skill: "Git" },
  { skill: "API Testing" },
  { skill: "CNAPP" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Data Structures and Algorithms" },
  { skill: "Burp Suite" },
  { skill: "Robot Framework" },
  { skill: "Pytest" },
  { skill: "Winappdriver" },
  { skill: "Public Cloud (AWS, Azure)" },
];

const AboutSection = () => {
  return (
    <div id="about" className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">
        About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className="md:w-1/2">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Get to know me!
          </h1>
          <p>
            {/* ... existing content ... */}
          </p>
        </div>
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="text-2xl font-bold mb-6">My Skills</h1>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => (
              <p
                key={idx}
                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
              >
                {item.skill}
              </p>
            ))}
          </div>
          <Image
            src="/Boy_Coding.png"
            alt=""
            width={325}
            height={325}
            className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
