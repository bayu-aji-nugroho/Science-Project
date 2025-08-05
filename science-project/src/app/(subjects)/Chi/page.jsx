import SubjectPage from "@/components/pages/subjectPage"


export default function Page(){
    const data = {
        judul:"KIMIA",
        icon:"/Kimia.svg",
        infor:"Kimia adalah ilmu alam yang mempelajari materi, energi, dan interaksi fundamental di antara keduanya untuk menjelaskan bagaimana alam semesta bekerja dari skala terkecil hingga terbesar.",
        theme:["bg-purple-800","bg-purple-900"],
        pin:[{
            link:"/exam",
            prasyarat:[],
            judul:"Pretest Kimia",
            paragraft:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti incidunt temporibus asperiores consequatur sapiente commodi natus, neque accusantium eius quia voluptatibus delectus officiis voluptas, dignissimos doloremque dolor quae in!"
            }],

    }
    return(
        <div className="">
            <SubjectPage data={data} subject={"fisika"}/>
        </div>
    )
}