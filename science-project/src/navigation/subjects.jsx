import Data from "@/components/main/data"
import Card from "@/components/ui/card"


export default function Subjects(){
    const data = [
        {
            judul:"matematika",
            icon:"./Math.svg",
            paragraft: "Mengungkap pola, memecahkan masalah, dan melatih logika berpikir",
            link:"/Math"
        },
        {
            judul:"fisika",
            icon:"./Physics.svg",
            paragraft: "Mempelajari hukum alam yang mengatur gerak, energi, dan materi.",
            link:"/phy"
        },
        {
            judul:"kimia",
            icon:"./Kimia.svg",
            paragraft: "Ilmu pusat yang menghubungkan semua cabang sains.",
            link:"chi"
        },
        {
            judul:"biologi",
            icon:"./Biology.svg",
            paragraft: "Mempelajari sistem kompleks yang membentuk semua makhluk hidup",
            link:"bio"
        },
    ]
    return (
        <div className="grid grid-cols-2   w-full  mt-10 md:flex md:justify-between ">
            
                {
                data.map( (value,i) => 
                    (
                        <a href={value.link} key={i} className="m-3 md:w-1/2 flex  bg-green-600  rounded-2xl hover:bg-purple-600 ">
                            <Card icon={value.icon}
                            judul={value.judul}
                            paragraft={value.paragraft}/>
                        </a>
                    )
                )
            }
            
         
        </div>
    )
}