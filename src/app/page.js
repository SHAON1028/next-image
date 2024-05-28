import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image width={600} height={600} src="/tiger.jpg" alt="tiger" />
      <div className="bg-image"></div>
      <br />

      <Image
        src="https://api-cms-v2.adnarchive.com/storage/media/original/30-com-5-1716187001.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </>
  );
}
