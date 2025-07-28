import Image from "next/image";
import Heading from "../components/main/heading"

import VisiMisi from "../components/main/visimisi";
import Subjects from "@/navigation/subjects";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="">
      <Heading />
      <VisiMisi />
      <Subjects />
      <Footer bg={"bg-green-800"} />
    </div>
  )}