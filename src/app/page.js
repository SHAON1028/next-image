import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image width={600} height={600} src="/tiger.jpg" alt="tiger" />
      <div className="bg-image"></div>
      <br />

      {/* <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&s"
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
    </>
  );
}
