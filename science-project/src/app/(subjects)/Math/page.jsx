import SubjectPage from "@/components/pages/subjectPage"


export default async function Page(){

    const data = {
        judul:"MATEMATIKA",
        icon:"/Math.svg",
        infor:"Matematika adalah ilmu yang mempelajari pola, struktur, dan hubungan menggunakan logika dan simbol.",
        theme:["from-lime-500 to-green-700","bg-lime-700"],
        pin:[{
            link:"/Math/Pretest",
            prasyarat:[],
            judul:"Pretest Matematika",
            paragraft:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti incidunt temporibus asperiores consequatur sapiente commodi natus, neque accusantium eius quia voluptatibus delectus officiis voluptas, dignissimos doloremque dolor quae in!"
            }],

    }
    return (
        <div className="">
            <SubjectPage data={data} subject={"matematika"} />
        </div>
    )
}