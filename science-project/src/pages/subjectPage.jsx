import HeadingSubject from "@/components/ui/headingsubject";
import db from "@/app/(subjects)/Math/subMateri.json"
import Card from "@/components/ui/card";
import Footer from "@/components/main/footer";
import getData from "@/lib/firebase/service";

export default async function SubjectPage(){
    const Data = await getData();
    const data = {
        judul:"MATEMATIKA",
        icon:"/Math.svg",
        infor:"Matematika adalah ilmu yang mempelajari pola, struktur, dan hubungan menggunakan logika dan simbol.",
        theme:["bg-lime-600","bg-lime-700"],
        pin:[{
            link:"/exam",
            prasyarat:[],
            judul:"Pretest Matematika",
            paragraft:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti incidunt temporibus asperiores consequatur sapiente commodi natus, neque accusantium eius quia voluptatibus delectus officiis voluptas, dignissimos doloremque dolor quae in!"
            }],

    }
    
    return (
        <div className="text-white">
           
            <HeadingSubject title={data.judul} infor={data.infor} link={data.icon} theme={data.theme[1]}/>
            <div className="m-3">
                <Card data={Data[1].pin} theme={data.theme[0]} />
                <h1 className="m-5 font-bold ">Mau belajar apa hari ini?</h1>
                <Card data={db} theme={data.theme[0]} imageSize={"rounded-full"} />
            </div>
            <Footer bg={data.theme[1]} />
        </div>
    )
}