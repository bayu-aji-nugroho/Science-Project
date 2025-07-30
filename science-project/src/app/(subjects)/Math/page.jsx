import Card from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import HeadingSubject from "@/components/ui/headingsubject";
import Table from "@/components/ui/table";

export default function Page(){
    const data = [{
        Title:"Latsol",
        p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti incidunt temporibus asperiores consequatur sapiente commodi natus, neque accusantium eius quia voluptatibus delectus officiis voluptas, dignissimos doloremque dolor quae in!"

    }]
    return (
        <div className="">
            <HeadingSubject infor={"Matematika adalah ilmu yang mempelajari pola, struktur, dan hubungan menggunakan logika dan simbol."} link={"/Math.svg"} title={"MATEMATIKA"}/>
            <a href="/exam" className="bg-orange-600  ">
                <Card icon={""} judul={"latsol"} paragraft={"sdmdsmk"}/>
            </a>
            <Footer bg={"bg-orange-700"} />
        </div>
    )
}