import SubjectPage from "@/components/pages/subjectPage"


export default async function Page(){

    const data = { 

        judul:"MATEMATIKA",
        icon:"/Math.svg",
        infor:"Matematika adalah ilmu yang mempelajari pola, struktur, dan hubungan menggunakan logika dan simbol.",
        theme:["from-lime-500 to-green-700","bg-lime-700"],
        licence:"Materi di halaman ini diadaptasi dari buku Aljabar dan Trigonometri 2e oleh OpenStax.",
        pin:[{
            link:"/Math/Pretest",
            prasyarat:[],
            judul:"Pretest Matematika",
            paragraft:"Siap memulai tantangan matematika? Pretest ini akan menguji kesiapan dan pengetahuan dasarmu yang biasanya diajarkan di tingkat SD dan SMP di kurikulum international baccalaureate . Buktikan kemampuanmu sebelum lanjut."
            }],
    }

    return (
        <div className="">
            <SubjectPage data={data} subject={"matematika"} />
        </div>
    )
}