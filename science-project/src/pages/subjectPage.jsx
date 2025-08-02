import HeadingSubject from "@/components/ui/headingsubject";
import db from "@/app/(subjects)/Math/subMateri.json"
import Card from "@/components/ui/card";
import Footer from "@/components/main/footer";

export default function SubjectPage({data}){
    return (
        <div className="text-white">
           
            <HeadingSubject title={data.judul} infor={data.infor} link={data.icon} theme={data.theme[1]}/>
            <div className="m-3">
                <Card data={data.pin} theme={data.theme[0]} />
                <h1 className="m-5 font-bold ">Mau belajar apa hari ini?</h1>
                <Card data={db} theme={data.theme[0]} imageSize={"rounded-full"} />
            </div>
            <Footer bg={data.theme[1]} />
        </div>
    )
}