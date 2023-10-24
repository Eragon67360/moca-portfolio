"use client";

import { useSearchParams } from "next/navigation";

function getSearchParams() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useSearchParams();
  const plan = params?.get("plan");
  const price = params?.get("price") || "0";

  return [plan,price];
}
export default getSearchParams;

