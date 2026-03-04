import { Link } from "react-router-dom";

export default function Dropdown({ label, to, onClick }) {
  const content = (
    <div
      onClick={onClick}
      className="flex items-center gap-6 px-4 py-4 text-sm hover:bg-teal-300 transition cursor-pointer">

    
      <span className='font-medium text-gray-800'>{label}</span>
    </div>
  );

  if (to) {
    return <Link to={to}>{label}</Link>;
  }

  return (
    <button onClick={onClick} className="w-full text-left">{content}</button>
  );
}
