

export default function Dropdown({ label, to, onClick }) {
  
  return (
    <a
      href={to}
      onClick={onClick}
      className="flex items-center gap-6 px-4 py-4 text-sm hover:bg-teal-300 transition cursor-pointer">

    
      <span className='font-medium text-gray-800'>{label}</span>
    </a>
  );

}
