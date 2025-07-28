export default function Table({title, data}){
   
    return (
        <div>
            <div className="flex"> 
                <div  className="text-white m-4">{title}?</div>
                <div></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:mx-5 m-2">
                { data.map(
                    (data,index) => (
                        <div className="bg-orange-600 p-4 rounded-3xl">
                            <h1 className="text-white font-bold md:text-lg">{data.Title}</h1>
                            <p className="my-3 text-sm">{data.p}</p>
                            <div className="bg-gray-700 text-gray-100 text-sm px-3 py-1 rounded-full border border-purple-500">#FrontendDev</div>

                        </div>
                    )
                )}
                
            </div>
           
        

        </div>
    )
}