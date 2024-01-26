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
  { skill: "Data Structures and Algoriths" },
  { skill: "Burp Suite" },
  { skill: "Robot Framework" },
  { skill: "Pytest" },
  { skill: "Winappdriver" },
  { skill: "Public Cloud(AWS,Azure)" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I am a seasoned professional in the field of Software Engineering, <span className="font-bold">{"Cloud Security"}</span>, and <span className="font-bold">{"API Security"}</span>, with a rich career that includes experience at <span className="font-bold">{"Akamai Technologies"}</span> and my current role at <span className="font-bold">{"Palo Alto Networks"}</span>. I&apos;m {" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Staff SDET Engineer
              based in Bangalore, India.
            </p>
            <br />
            <p>
              I graduated from Bangalore Institute of Technology, Bangalore in 2021
              with a BTech in Computer Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
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
    </section>
  );
};

export default AboutSection;
