import MainPageCompononen from "@/components/subject_component/mainPage";
import Card from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import HeadingSubject from "@/components/ui/headingsubject";
import db from "@/app/(subjects)/Math/subMateri.json"

export default function Page(){
    const data = [{
        Title:"Latsol",
        p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti incidunt temporibus asperiores consequatur sapiente commodi natus, neque accusantium eius quia voluptatibus delectus officiis voluptas, dignissimos doloremque dolor quae in!"

    }]
    return (
        <div className="">
            <HeadingSubject infor={"Matematika adalah ilmu yang mempelajari pola, struktur, dan hubungan menggunakan logika dan simbol."} link={"/Math.svg"} title={"MATEMATIKA"}/>
            
            <a href="/exam" className="bg-emerald-700">
                <Card icon={""} judul={"pretest"} paragraft={"sdmdsmk"}/>
            </a>
            <MainPageCompononen MainData={db}/>
            <Footer bg={"bg-emerald-700"} />
        </div>
    )
}