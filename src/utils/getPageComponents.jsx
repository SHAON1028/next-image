import { BASE_URL } from "@/config/config";

export const getPageComponents = async (slug) => {
  const res = await fetch(`${BASE_URL}/api/frontend/${slug}`, {
    cache: "no-store",
  });

  // if (!res.ok) {

  //   throw new Error("Failed to fetch data")
  // }

  return res.json();
};
