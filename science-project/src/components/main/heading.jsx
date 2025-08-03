export default function Heading (){
    return (

    <header className="text-white md:flex ">
      <div className=" px-4 text-center md:text-left   shadow-2xl shadow-green-700 md:rounded-br-full p-5 md:basis-3/4">
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-green-500 mb-2 md:mb-3 ">
          Science Project
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 py-3 md:px-0 font-bold">
          Eksplorasi dunia sains yang inovatif dan menarik secara gratis!
        </p>
      </div>
      <div className=" mt-16 flex items-center justify-center md:basis-1/4">
      <div className="flex">
        <div className="p-3">
          <a href="https://www.bermatematika.my.id/" className="flex">
            <p className="mx-1">portfolioku</p>
             <img src="\icon\code_darkmode.svg"/>
          </a>
        </div>
          <button className="
            bg-green-700 hover:bg-transparent
            hover:ring-1 hover:ring-green-700
            text-white font-bold
            py-3 px-9
            rounded-full 
            hover:shadow-green-600 hover:shadow-md
            transition-all duration-300 ease-in-out
            ">
          Donate
        </button>
      </div>
      </div>
    </header>
    )
}