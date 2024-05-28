
import { BASE_URL } from "@/config/config";
import { getComponentDetails } from "@/utils/getComponentDetails";
import Image from "next/image";


export default async function Home() {

  const compData =await getComponentDetails(4);
 const {component} = compData.data
 const {files} =component
  console.log(component);
  return (
    <>
      <Image alt="s" width={600} height={600} src={`${BASE_URL}${files[0].media_content.original_url}`} />
    </>
  );
}
