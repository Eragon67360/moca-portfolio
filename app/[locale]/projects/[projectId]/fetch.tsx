"use client";
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function DataFetcher({ id }: { id: string }) {
  const { data, error } = useSWR("/api/staticdata", fetcher);
  console.log(id);
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  const dataParsed = JSON.parse(data);
  console.log(dataParsed);

  return (
    <>
      <div className="flex flex-col">
        <div>Name of the project: {dataParsed[id].title}</div>
        <div>Description of the project: {dataParsed[id].description}</div>
        <div>Author of the project: {dataParsed[id].author}</div>
        <div>Date of the project: {dataParsed[id].date}</div>
      </div>
    </>
  );
}
