import React from "react";
import { Metadata } from "next";
import DataFetcher from "./fetch";

type Props = {
  params: { projectId: string };
};

export const generateMetadata = (): Metadata => {
  return {
    title: 'Projects',
  };
};

export default function ProjectPage({ params }: Props) {
  return (
    <>
      <DataFetcher id={params.projectId} />
    </>
  );
}
