"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import { MemberService } from "./service/MemberService";
import Image from "next/image";
import MembersSkeleton from "./MembersSkeleton";


interface Members {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  portfolio: string;
}

const MemberTemplate = ({
  name,
  role,
  photo,
  linkedin,
  portfolio,
}: Members) => {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={photo}
          alt="image"
          width={284}
          height={284}
          className="rounded-xl"
        />
        <div className="flex flex-col px-8 pt-9 justify-between">
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl">{name}</h2>
            <h2 className="">{role}</h2>
          </div>
          <div className="flex space-x-3">
            <a
              href={linkedin}
              target="_blank"
              className="rounded-full border border-cinnabar text-cinnabar hover:text-secondary hover:bg-cinnabar uppercase px-3 py-1 cursor-pointer"
            >
              Linkedin
            </a>

            <a
              href={portfolio}
              target="_blank"
              className="rounded-full border border-cinnabar text-cinnabar hover:text-secondary hover:bg-cinnabar uppercase px-3 py-1 cursor-pointer"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

function DesktopTeam() {
  const [members, setMembers] = useState<Members[] | null>(null);

  useEffect(() => {
    MemberService.getMembers().then((data) => setMembers(data));
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col rounded-3xl p-8 bg-linen w-1/2 select-none">
          <p className="font-bold text-5xl text-center mb-4 ">Our team</p>
          {members ? (
            <Carousel
              value={members}
              unstyled={false}
              showIndicators={true}
              numVisible={1}
              numScroll={1}
              itemTemplate={ MemberTemplate }
            />
          ) : (
            <MembersSkeleton/>
          )}
        </div>
      </div>
    </>
  );
}

export default DesktopTeam;
