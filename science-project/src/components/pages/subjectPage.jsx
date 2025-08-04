import HeadingSubject from "@/components/ui/headingsubject";
import db from "@/app/(subjects)/Math/subMateri.json"
import Card from "@/components/ui/card";
import Footer from "@/components/main/footer";


const Sidebar = () =>{
    return (
        <div className="m-2 hidden md:block">
            <div className="m-1 p-3 hover:border hover:border-teal-300/30 hover:bg-gray-800/50 hover:backdrop-blur-sm shadow-lg">Materi</div>
        </div>
    )
}

export default function SubjectPage({data}){
    return (
        <div className="text-white">
           
            <HeadingSubject title={data.judul} infor={data.infor} link={data.icon} theme={data.theme[1]}/>
            <div className="m-3">
                <Card data={data.pin} theme={data.theme[0]} />
                <h1 className="m-5 font-bold ">Mau belajar apa hari ini?</h1>
                <div className="md:flex">
                    <div className="basis-1/4"><Sidebar/></div>
                    <div className="basis-3/4"><Card data={db} theme={data.theme[0]} imageSize={"rounded-full"} /></div>
                    
                </div>
            </div>
            <Footer bg={data.theme[1]} />
        </div>
    )
}