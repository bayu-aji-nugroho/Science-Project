export default function MainPageCompononen({MainData}){
    //input berupa data dict 
    return (
        <div className="my-2 text-white">
            <h1 className="mx-5 m-2 font-bold">Mau belajar apa hari ini?</h1>
            <div className=" mx-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                {
                    MainData.map((data,index)=>(
                        <div className=" shadow shadow-lime-900 bg-lime-600 rounded-2xl">
                            <div className="mx-1">
                                <img className="aspect-square p-3" src={`${data.linkImage}`}></img>
                                <div className="p-2">
                                    <h1 className="text-sm font-bold my-2">{data.judul}</h1>
                                    {
                                        data.prasyarat.map((dataP)=>(
                                            <div className="flex"> {dataP}</div>
                                        ))
                                    }

                                </div>
                                
                            </div>
                            
                        </div>
                    ))
                }
            </div>


        </div>
    )
}