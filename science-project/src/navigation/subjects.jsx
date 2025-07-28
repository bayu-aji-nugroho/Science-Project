import Data from "@/components/main/data"
import Card from "@/components/ui/card"


export default function Subjects(){
    const data = [
        {
            judul:"matematika",
            icon:"./Math.svg",
            paragraft: "jfhddffnjnfjn\ndjfnjdnfjdnjfdj",
            link:"/Math"
        },
        {
            judul:"fisika",
            icon:"./Physics.svg",
            paragraft: "jfhddffnjnfjnd\njfnjdnfjdnjfdj",
            link:"/phy"
        },
        {
            judul:"kimia",
            icon:"./kimia.svg",
            paragraft: "jfhddffnjnfjnd\njfnjdnfjdnjfdj",
            link:"chi"
        },
        {
            judul:"biologi",
            icon:"./biology.svg",
            paragraft: "jfhddffnjnfjndj\nfnjdnfjdnjfdj",
            link:"bio"
        },
    ]
    return (
        <div className="grid grid-cols-2   w-full  mt-10 md:flex md:justify-between ">
            
                {
                data.map( (value,i) => 
                    (
                        <a href={value.link} key={i} className="m-3 md:w-1/2 flex  bg-green-600  rounded-2xl hover:bg-purple-600 ">
                            <Card icon={value.icon}
                            judul={value.judul}
                            paragraft={value.paragraft}/>
                        </a>
                    )
                )
            }
            
         
        </div>
    )
}