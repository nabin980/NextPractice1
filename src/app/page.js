import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
   <p>
    welcome To Recipe App
   </p>
   <Link href={'recipe-list'}>Explore Reciepe</Link>
    </div>
  );
}
