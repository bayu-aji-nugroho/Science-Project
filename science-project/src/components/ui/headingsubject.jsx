export default function HeadingSubject({title,infor,link,theme }){
    return (
        <div className="mb-3 md:flex bg-[url('/subject/Math.png')] shadow-2xl shadow-gray-900">
            <img className="md:hidden" src="/subject/Math.png"></img>
            <div className={`text-white p-5 ${theme} md:basis-3/4 lg:basis-1/2 md:rounded-br-full md:pl-10`}>
                <img src={link} className="h-14 w-14 md:h-20 md:w-20"></img>
                <h1 className="font-bold mt-3 md:text-3xl" >{title}</h1>
                <p className="text-sm md:text-lg md:mr-24">{infor}</p>
            </div>
            <div></div>
        </div>
    )
}