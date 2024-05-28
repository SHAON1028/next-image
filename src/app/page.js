import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image width={600} height={600} src="/tiger.jpg" alt="tiger" />

      <div className="bg-image">

      </div>
    </>
  );
}
