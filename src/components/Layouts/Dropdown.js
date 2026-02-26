import { Link } from "react-router-dom";

export default function Dropdown({ icon: Icon, label, to, onClick }) {
  const content = (
    <div
      onClick={onClick}
      className="flex items-center gap-6 px-4 py-4 text-sm hover:bg-teal-300 transition cursor-pointer">

      {Icon && <Icon size={20} className='text-purple-300' />}
      <span className='font-medium text-gray-800'>{label}</span>
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return (
    <button onClick={onClick} className="w-full text-left">{content}</button>
  );
}
