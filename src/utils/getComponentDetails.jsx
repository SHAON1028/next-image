import { BASE_URL } from "@/config/config";

export const getComponentDetails = async (id) => {
  
  const url = `${BASE_URL}/api/frontend/pages/details?component_id=${id}`;
   
  const res = await fetch(url, { cache: "no-store" });
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data")
  // }
  //  console.log(res.json())
  return res.json();
};
