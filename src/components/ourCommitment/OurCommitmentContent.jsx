"use client"

import Image from "next/image";

import parse from "html-react-parser";
import { useSearchParams } from "next/navigation";
import { BASE_URL } from "@/config/config";
import Cookies from "js-cookie";

const OurCommitmentContent = ({ componentData, images }) => {
  const searchParams = useSearchParams();
  let lang = searchParams.get("lang");
  if (lang == null) {
    lang = Cookies.get("lang");
  }

  const { component: imageFiles } = images;

  // console.log(imageFiles);
  const {
    component: { title, subTitle, description1, component_languages, files },
    details,
  } = componentData;

  return (
    <section className="commitment containr mt-[88px]">
      {/* <Header>{lang == "bn" ? component_languages[0]?.title : title}</Header> */}
      <div className="commitment-container flex gap-[70px] ">
        <div className="commitment-list lg:w-1/2 ">
          {/* <p>
            We are committed to create livelihood opportunities for cattle
            farmers and strengthen the rural economy of Bangladesh. BRAC
            Artificial Insemination, as a social enterprise, is working on
          </p> */}
          {/* <Description>
            {" "}
            {lang == "bn"
              ? parse(component_languages[0]?.description1)
              : parse(description1)}
          </Description> */}

          <div className="item-container space-y-[6px]">
            {details?.map((item) => {
              const { title, files, master_crud_languages } = item;
              return (
                <div key={item?.id} className="item">
                  <img
                    src={`${BASE_URL}/${item?.files[0]?.media_content.original_url}`}
                    alt="icon"
                    width={34}
                    height={34}
                  />
                  <p>{lang == "bn" ? master_crud_languages[0]?.title:title} </p>
                </div>
              );
            })}
            {/* <div className="item">
              <Image src={cowIcon} alt="icon" width={34} height={34} />
              <p> Livestock Breed development and productivity increase </p>
            </div>
            <div className="item">
              <Image src={cowIcon} alt="icon" width={34} height={34} />
              <p> Livestock Breed development and productivity increase </p>
            </div>
            <div className="item">
              <Image src={cowIcon} alt="icon" width={34} height={34} />
              <p> Livestock Breed development and productivity increase </p>
            </div> */}
          </div>
          <div className="sdgs">
            <h1>{subTitle}</h1>
            <div className="flex gap-12 mt-10">
              {files.slice(0, 2).map((img) => {
                // console.log(`${BASE_URL}/${img?.media_content?.original_url}`);
                return (
                  <img
                    key={img.id}
                    alt=""
                    src={`${BASE_URL}/${img?.media_content?.original_url}`}
                    width={254}
                    height={254}
                  />
                );
              })}
              {/* <Image src={sdgsOne} width={254} height={254} />
              <Image src={sdgsOne} width={254} height={254} /> */}
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 gap-6 lg:mt-0 mt-5 img-container">
          <div className="lg:space-y-[20px] space-y-3">
            {imageFiles.files?.slice(0, 2).map((img) => (
              <img
              className="lg:h-[368px]"
                alt="img"
                width={412}
                height={320}
                key={img.id}
                src={`${BASE_URL}${img?.media_content?.original_url}`}
              />
            ))}
            {/* <img src={img1.src} alt="image" />
            <img src={img2.src} alt="image" /> */}
          </div>
          <div>
            {imageFiles.files?.slice(2, 3).map((img) => (
              <img
                alt="img"
                className=" "
                width={412}
                height={300}
                key={img.id}
                src={`${BASE_URL}${img?.media_content?.original_url}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentContent;
