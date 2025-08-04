import SubSubjectPage from "@/components/pages/subSubjectPage";
import getDataSlug from "@/lib/firebase/service";


export default  async function Page({params}){
    const slug = params.slug
    const data = await getDataSlug(slug,"matematika",1)
    const lesson = {
    judul: "Eksponensial dan Logaritma",
    category: "Matematika Dasar",
    sections: [
      { id: "introduction", title: "Pengantar" },
      
    ],
    pointKunci:["jnkxbfj", "dnfdkfnkn"],
    data:[
        {
            judul:"eksponensial",
            subJudul:"Definisi",
            equation:'10x+4^2',
            ket:"Eksponensial adalah bentuk fungsi matematika yang melibatkan pangkat dengan variabel di bagian eksponen, biasanya ditulis sebagai"
        },
    ]
  };
    return (
        <div>
            <h1>{data.article.judul}</h1>
            <SubSubjectPage lesson={data.article} />
        </div>
    )
}