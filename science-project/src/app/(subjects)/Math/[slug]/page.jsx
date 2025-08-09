import SubSubjectPage from "@/components/pages/subSubjectPage";
import getDataSlug from "@/lib/firebase/service";
import Main from "@/components/exam/main";


export default  async function Page({params}){
    const slug = await params.slug
    const data = await getDataSlug(slug,"matematika",1)
    const pretest = await getDataSlug("Pretest","matematika",1)
   
  
    return (
        <div>
            {
                slug == "Pretest"?(
                    <Main dataSoal={pretest.exam}/>
                ):(
                    <SubSubjectPage lesson={data.article} />
                )
            }
            
        </div>
    )
}