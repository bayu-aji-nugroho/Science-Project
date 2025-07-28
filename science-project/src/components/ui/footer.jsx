export default function Footer({bg}){
    return (
    <footer className={`${bg} text-white py-8 md:py-12 mt-10`}>
      
        <div className="mt-8 pt-6 border-t text-sm md:text-base">
          <p className="text-gray-300">&copy; 2025 Science Project. All rights reserved.</p>
        </div>
      
    </footer>
    )
}