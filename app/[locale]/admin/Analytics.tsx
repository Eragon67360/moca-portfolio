import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "@/components/lib/fetcher";
import { BsDot } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { FiGlobe } from "react-icons/fi";
import { MdOpenInNew } from "react-icons/md";

import ActiveUsersChart from "./UserChart";
import Link from "next/link";

export const Analytics = () => {
  const [selectedRange, setSelectedRange] = useState<string>("week");

  const { data: visitors, isValidating } = useSWR(
    `/api/ga?range=${selectedRange}`,
    fetcher
  );

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-secondary">
            <FiGlobe />
            <Link
              href="/"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <p>www.uxmoca.com</p> <MdOpenInNew />
            </Link>

            <div className="border-r h-4 border-r-black/40">{""}</div>

            <div className="relative flex items-center px-4 py-1 text-sm">
              <BsDot className="-ml-2 text-green-500 w-7 h-7 animate-ping" />
              <div className="flex items-center gap-1">
                {visitors?.totalVisitors ?? (
                  <div className="w-10 h-3 bg-gray-300 rounded-full dark:bg-darkPrimary animate-pulse"></div>
                )}{" "}
                online
              </div>
            </div>
          </div>

          <div className="flex mx-6">
            <Dropdown onChange={(value) => setSelectedRange(value)} />
          </div>
        </div>

        <div className="flex mt-8 h-full w-full border border-gray-500 rounded-xl">
          <div className="h-full w-36 p-4 flex flex-col rounded-s-xl border-r border-gray-800 border-secondary/30">
            <p className="text-lg font-semibold text-gray-500">Visitors</p>
            <div className="text-2xl text-secondary my-4">
              {visitors?.totalVisitors ?? (
                <div className="w-10 h-3 bg-gray-300 rounded-full dark:bg-darkPrimary animate-pulse"></div>
              )}{" "}
            </div>
          </div>
          <div className="h-full w-36 p-4 flex flex-col rounded-s-xl border-r border-secondary/30">
            <p className="text-lg font-semibold text-gray-500">Page Views</p>
            <div className="text-2xl text-secondary my-4">
              {visitors?.totalPageViews ?? (
                <div className="w-10 h-3 bg-gray-300 rounded-full dark:bg-darkPrimary animate-pulse"></div>
              )}{" "}
            </div>
          </div>
        </div>

        <div className="flex mt-8 h-full w-full border border-gray-500 rounded-xl">
          {
            // If still validating (fetching), show a loader
            isValidating ? (
              <div>Loading chart...</div>
            ) : (
              // If data is available, render the chart
              visitors && <ActiveUsersChart data={visitors.formattedResults} />
            )
          }
          {/* ... other JSX ... */}
        </div>
      </div>
    </>
  );
};
