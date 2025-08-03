export default function Card({data,theme,imageSize}){
    return (
      <div className={`mt-10 mx-2 ${data.length == 1?"flex":"grid grid-cols-2 md:grid-cols-4 bg-transparent"}`}>
       {
        data.map((data,i)=>(
          <a href={`${data.link}`} className={` text-white p-4 rounded-2xl m-2 ${theme} border border-teal-300/30 `} key={i}>
            <div className=" text-5xl ">
              <img className={`aspect-square ${imageSize} ${data.icon == null? "hidden":""}`} src= {`${data.icon}` } />
            </div>
      
            <h1 className="text-md font-bold">
              {data.judul}
            </h1>
          
            <p className="text-sm text-gray-300 ">
              {data.paragraft}
            </p>
            { 
              data.prasyarat == undefined?  (
                <div></div>
              ):data.prasyarat.map((dataP, i)=>(
                  <div key={i} className="flex"> {dataP}</div>
              ))
            }
        </a>
        ))
       }
      </div>
        
    
    )
}