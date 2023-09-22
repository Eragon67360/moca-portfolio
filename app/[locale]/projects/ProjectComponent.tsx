import React from "react";
import Image from "next/image";
import computer from "@/public/img/computer.png";
import Link from "next/link";

export const ProjectComponent = ({ project }: { project: any }) => {
  return (
    <div className="h-[90vh] flex">
      <div className="flex flex-col pt-[32vh] space-y-7 w-1/2">
        <h1 className="text-[2.656vw] font-bold pl-32">{project.title}</h1>
        <p className="text-[2.656vw] font-bold pl-32">{project.description}</p>

        <div className="flex pl-6 pt-20 justify-between">
          <Image src={computer} alt="show1" width={200} />
          <Image src={computer} alt="show2" width={200} />
          <Image src={computer} alt="show3" width={200} />
        </div>

        <div className="flex space-x-8 justify-center">
          <Link href={project.projectlink} className="border p-2 dark:hover:bg-secondary dark:hover:text-third rounded-full hover:bg-falured hover:text-secondary">Learn more</Link>
          <a href={project.link} target="_blank" className="border p-2 dark:hover:bg-secondary dark:hover:text-third rounded-full hover:bg-falured hover:text-secondary">Link to Project</a>
        </div>
      </div>
      <div className="flex flex-col w-1/2 justify-end items-center">
        <Image src={computer} alt="show main" width={600} />
      </div>
    </div>
  );
};
