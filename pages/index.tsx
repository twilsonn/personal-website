import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import headshot from "../public/headshot.jpg";
import notedown from "../public/notedown.jpg";
import todo from "../public/todo.jpg";
import ims from "../public/inventory.jpg";
import blank from "../public/blank.jpg";
import externalLink from "../public/external-link.svg";

const ExternalLink: React.FC = () => {
  return (
    <span>
      <Image src={externalLink} width={20} height={20} alt="external link" />
    </span>
  );
};

const notedownDescription: React.FC = () => {
  return (
    <p className="px-6 pt-4 pb-2">
      A note-taking application powered by{" "}
      <a
        href="https://nextjs.org/"
        target={"_blank"}
        rel="noreferrer"
        className="text-blue-500 no-underline"
      >
        NextJS (TypeScript)
        <ExternalLink />
      </a>
      . Dynamic sync to cloud features using{" "}
      <a
        href="https://aws.amazon.com/dynamodb/"
        target={"_blank"}
        rel="noreferrer"
        className="text-blue-500 no-underline"
      >
        DynamoDB
        <ExternalLink />
      </a>
      .
    </p>
  );
};

const todoDescription: React.FC = () => {
  return (
    <p className="px-6 pt-4 pb-2">
      A todo application powered by{" "}
      <a href="https://reactjs.org/" className="text-blue-500 no-underline">
        React (TypeScript)
        <span>
          <ExternalLink />
        </span>
      </a>
    </p>
  );
};

const barcodeGenDescription: React.FC = () => {
  return (
    <p className="px-6 pt-4 pb-2">
      A barocde generator application powered by{" "}
      <a
        href="https://www.gatsbyjs.com/"
        className="text-blue-500 no-underline"
      >
        Gatsby (TypeScript)
        <ExternalLink />
      </a>
      . This project was created in order to help work collegues print sheets of
      barcodes.
    </p>
  );
};

const BankAppDescription: React.FC = () => {
  return (
    <p className="px-6 pt-4 pb-2">
      A banking console application created using{" "}
      <a href="https://www.java.com/" className="text-blue-500 no-underline">
        Java
        <ExternalLink />
      </a>
      . Work in progress.
    </p>
  );
};

const IMSAppDescription: React.FC = () => {
  return (
    <p className="px-6 pt-4 pb-2">
      An inventory management system created using{" "}
      <a href="https://www.java.com/" className="text-blue-500 no-underline">
        Java
        <ExternalLink />
      </a>
      . Work in progress.
    </p>
  );
};

const projects = [
  {
    id: 1,
    name: "Notedown",
    description: notedownDescription,
    complete: true,
    image: notedown,
    link: "https://notedown-nine.vercel.app/",
    github: "https://github.com/twilsonn/notedown",
  },
  {
    id: 2,
    name: "Todo App",
    description: todoDescription,
    complete: true,
    image: todo,
    link: "https://twilsonn.github.io/fancy-todo-app/",
    github: "https://github.com/twilsonn/fancy-todo-app",
  },
  {
    id: 3,
    name: "Barcode Generator",
    description: barcodeGenDescription,
    complete: false,
    image: blank,
    link: undefined,
    github: "https://github.com/twilsonn/barcode-generator",
  },
  {
    id: 4,
    name: "Banking App",
    description: BankAppDescription,
    complete: false,
    image: blank,
    link: undefined,
    github: "https://github.com/twilsonn/BankingApp",
  },
  {
    id: 5,
    name: "Inventory Management System",
    description: IMSAppDescription,
    complete: false,
    image: ims,
    link: undefined,
    github: "https://github.com/twilsonn/InventoryManagementSystem",
  },
];

const Home: NextPage = () => {
  return (
    <main className="prose max-w-none bg-gray-100">
      <header>
        <nav className="flex justify-between items-center py-6 px-14 select-none">
          <Link href="/">
            <div className="flex items-center">
              <span
                className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-blue-500
            hover:bg-blue-600 cursor-pointer"
              >
                <span className="text-xl font-medium leading-none text-white">
                  TW
                </span>
              </span>
              <h2 className="ml-6 m-0 font-normal">
                <b>TYLER</b> WILSON
              </h2>
            </div>
          </Link>

          <ul className="">
            <Link href="#about">
              <li className="inline-block mr-6 text-gray-600 m-0 hover:text-gray-900 cursor-pointer">
                About
              </li>
            </Link>
            <Link href="#projects">
              <li className="inline-block mr-6 text-gray-600 m-0 hover:text-gray-900 cursor-pointer">
                Projects
              </li>
            </Link>
            <a
              href="https://github.com/twilsonn"
              target={"_blank"}
              rel="noreferrer"
            >
              <li className="font-bold inline-block mr-6 text-gray-600 m-0 hover:text-gray-900 cursor-pointer">
                Github
                <ExternalLink />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/twilsonn/"
              target={"_blank"}
              rel="noreferrer"
            >
              <li className="font-bold inline-block text-gray-600 m-0 hover:text-gray-900 cursor-pointer">
                LinkedIn
                <ExternalLink />
              </li>
            </a>
          </ul>
        </nav>
      </header>
      <section id="about" className="max-w-6xl m-auto pt-24">
        <div className="flex">
          <div className="w-1/3 relative rounded-full shadow-lg border-2 border-stone-200 overflow-hidden">
            <Image src={headshot} layout="responsive" alt="headshot" />
          </div>
          <div className="w-2/3 px-6">
            <div className="flex mb-2 justify-between">
              <h1 className="text-5xl font-semibold m-0">Tyler Wilson</h1>
              <a
                href="/cv.pdf"
                target={"_blank"}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50
                 focus:outline-none hover:text-black"
              >
                Resume
                <ExternalLink />
              </a>
            </div>
            <p>
              As a flexible and detail-orientated professional, I am experienced
              in delivering high-impact and cost-effective insights to encourage
              data-driven decision-making and increases in profitability.
              Gathering, cleaning, and analysing data to drive business metrics,
              I regularly build automated reports using technology such as SQL,
              Power BI, Kibana and Excel VBA, successfully creating high-impact
              solutions for organisations. Working under pressure and to tight
              deadlines, I am capable of foreseeing potential risks and
              proactively looking to implement data-led action to navigate any
              challenges quickly, efficiently, and professionally. A strong
              communicator, I am comfortable working through various scenarios
              with stakeholders and colleagues to successfully resolve
              challenges and situations. With a solid technical and analytical
              background, I am data-driven and always proactively looking for
              improvement.
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="max-w-6xl m-auto pt-24">
        <h2>Projects</h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
        >
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                className="p-0 col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 space-y"
              >
                <div className="rounded-t-lg overflow-hidden">
                  <a
                    href={project.link}
                    target={project.link ? "_blank" : "_parent"}
                    rel="noreferrer"
                    className="no-underline"
                  >
                    <Image
                      src={project.image}
                      layout="responsive"
                      alt={project.name}
                    />
                    <h3 className="m-0 mt-6">
                      {project.name}
                      <span
                        className={`ml-2 w-3 h-3 ${
                          project.complete ? "bg-green-400" : "bg-orange-400"
                        }  inline-block rounded-full`}
                      ></span>
                    </h3>
                  </a>
                  <p className="m-0">
                    <a
                      href={project.github}
                      target={"_blank"}
                      rel="noreferrer"
                      className="text-blue-500 no-underline hover:underline"
                    >
                      GitHub
                      <ExternalLink />
                    </a>
                  </p>
                </div>
                {project.description({})}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="max-w-6xl m-auto pt-6 pb-10">
        <a
          target="_blank"
          href="https://icons8.com/icon/blk2PNUlJAYt/external-link"
          rel="noreferrer"
        >
          External Link
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </section>
    </main>
  );
};

export default Home;
