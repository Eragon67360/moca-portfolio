import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MembersSkeleton = () => {
  return (
    <div className="flex justify-center">
      <SkeletonTheme baseColor="#cccccc" highlightColor="#ffffff">
        <div className="rounded-3xl w-72 h-72">
          <Skeleton className="w-72 h-72" />
        </div>
        <div className="flex flex-col px-8 pt-9 justify-between">
          <div className="flex flex-col">
            <div className="h-6 w-40  mb-2 rounded">
              <Skeleton />
            </div>
            <div className="h-4 w-32 rounded">
              <Skeleton />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="h-6 w-24 rounded">
              <Skeleton />
            </div>
            <div className="h-6 w-24 rounded">
              <Skeleton />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default MembersSkeleton;
