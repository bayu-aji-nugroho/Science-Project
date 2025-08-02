
import Card from "@/components/ui/card";
import Heading from "../components/main/heading"

import VisiMisi from "../components/main/visimisi";
import Footer from "@/components/main/footer";

export default function Home() {
  const data = [
        {
            judul:"matematika",
            icon:"./Math.svg",
            paragraft: "Mengungkap pola, memecahkan masalah, dan melatih logika berpikir",
            link:"/Math",
            prasyarat:[]
        },
        {
            judul:"fisika",
            icon:"./Physics.svg",
            paragraft: "Mempelajari hukum alam yang mengatur gerak, energi, dan materi.",
            link:"/Phy",
            prasyarat:[]
        },
        {
            judul:"kimia",
            icon:"./Kimia.svg",
            paragraft: "Ilmu pusat yang menghubungkan semua cabang sains.",
            link:"chi",
            prasyarat:[]
        },
        {
            judul:"biologi",
            icon:"./Biology.svg",
            paragraft: "Mempelajari sistem kompleks yang membentuk semua makhluk hidup",
            link:"bio",
            prasyarat:[]
        },
    ]
  return (
    <div className="font-main">
      <Heading />
      <VisiMisi />
      <Card data={data} theme={"bg-green-600"} imageSize={"w-1/3 w-1/3"}/> 
      <Footer bg={"bg-green-800"} />
    </div>
  )}