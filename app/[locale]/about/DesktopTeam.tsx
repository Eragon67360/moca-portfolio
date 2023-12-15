"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/arya-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { MemberService } from "./service/MemberService";
import Image from "next/image";
import { MembersDesktopSkeleton } from "./skeletons/MembersSkeleton";
import Logos from "./logos";
import { classNames } from "primereact/utils";

type CustomCarouselPassThroughOptions = {
  indicatorButton: ({ context }: { context: { active: boolean } }) => {
    className: string;
  };
};

interface Members {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  portfolio: string;
}

const MemberTemplate = ({
  id,
  name,
  role,
  photo,
  linkedin,
  portfolio,
}: Members) => {
  return (
    <>
      <div className="flex justify-center font-sans">
        <Image
          src={photo}
          alt="image"
          width={284}
          height={284}
          className="rounded-xl"
          priority={true}
        />
        <div className="flex flex-col px-8 justify-between">
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl">{name}</h2>
            <h2 className="">{role}</h2>
          </div>

          <div className="border border-light_primary rounded-2xl flex flex-col space-y-3 justify-center items-center  py-3">
            <p className="text-center">Softwares</p>
            <Logos activity="soft" id={id} />
            <p className="text-center">Leisure Activity</p>
            <Logos activity="act" id={id} />
          </div>

          <div className="flex space-x-3">
            <a
              href={linkedin}
              target="_blank"
              className="rounded-full font-bold border border-light_primary text-light_primary dark:border-dark_ink dark:text-dark_ink hover:text-dark_ink hover:bg-light_primary dark:hover:text-dark_ink/75 dark:hover:bg-transparent dark:hover:border-dark_ink/75 uppercase px-3 py-1 cursor-pointer"
            >
              Linkedin
            </a>

            <a
              href={portfolio}
              target="_blank"
              className="rounded-full font-bold border border-light_primary text-light_primary dark:border-dark_ink dark:text-dark_ink hover:text-dark_ink hover:bg-light_primary dark:hover:text-dark_ink/75 dark:hover:bg-transparent dark:hover:border-dark_ink/75 uppercase px-3 py-1 cursor-pointer"
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
      <div className="font-sans h-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-col rounded-3xl p-8 bg-light_surface dark:bg-dark_surface select-none h-[488px] w-[808px] my-[140px]">
          <p className="font-bold text-5xl text-center mb-4 ">Our team</p>
          {members ? (
            <Carousel
              value={members}
              numVisible={1}
              numScroll={1}
              itemTemplate={MemberTemplate}
              indicatorsContentClassName="mt-2 "
              pt={{
                indicatorButton: ({ context }: any) => ({
                  className: classNames(
                    "mt-6 w-3 h-3 transition duration-200 rounded-full",
                    {
                      "bg-transparent border border-light_primary dark:border-white hover:bg-light_primary/75 hover:dark:bg-light_background/75":
                        !context.active,
                      "bg-light_primary hover:bg-light_primary/75 dark:bg-light_background hover:dark:bg-light_background/75": context.active,
                    }
                  ),
                }),
              }}
              className="h-full z-10 pt-4 "
            />
          ) : (
            <MembersDesktopSkeleton />
          )}
        </div>
      </div>
    </>
  );
}

export default DesktopTeam;
