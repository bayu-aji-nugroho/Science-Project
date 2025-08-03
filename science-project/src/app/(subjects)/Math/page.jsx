import SubjectPage from "@/components/pages/subjectPage"


export default async function Page({params}){

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
        <div>
            <SubjectPage data={data} />
        </div>
    )
}