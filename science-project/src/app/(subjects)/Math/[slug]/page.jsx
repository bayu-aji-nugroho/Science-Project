import SubSubjectPage from "@/components/pages/subSubjectPage";
import getDataSlug from "@/lib/firebase/service";


export default  async function Page({params}){
    const slug = params.slug
    const data = await getDataSlug(slug,"matematika",1)
   
  
    return (
        <div>
            <SubSubjectPage lesson={data.article} />
        </div>
    )
}