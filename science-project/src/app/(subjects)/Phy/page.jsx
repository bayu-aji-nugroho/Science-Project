import SubjectPage from "@/components/pages/subjectPage"


export default function Page(){
    const data = {
        judul:"FISIKA",
        icon:"/Physics.svg",
        infor:"Fisika adalah ilmu alam yang mempelajari materi, energi, dan interaksi fundamental di antara keduanya untuk menjelaskan bagaimana alam semesta bekerja dari skala terkecil hingga terbesar.",
        theme:["bg-blue-800","bg-blue-900"],
        pin:[{
            link:"/exam",
            prasyarat:[],
            judul:"Pretest Fisika",
            paragraft:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti incidunt temporibus asperiores consequatur sapiente commodi natus, neque accusantium eius quia voluptatibus delectus officiis voluptas, dignissimos doloremque dolor quae in!"
            }],

    }
    return(
        <div className="">
            <SubjectPage data={data}/>
        </div>
    )
}