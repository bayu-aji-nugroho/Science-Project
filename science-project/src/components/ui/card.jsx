export default function Card({judul,icon,paragraft}){
    return (
        <div className="bg-transparent text-white p-4 ">
      <div className=" text-purple-400 text-5xl h-10 w-10 ">
        <img className="" src= {`${icon}` } />
      </div>

     
      <h1 className="text-md font-bold  text-white">
        {judul}
      </h1>

     
      <p className="text-sm text-gray-300 ">
        {paragraft}
      </p>
    </div>
    
    )
}