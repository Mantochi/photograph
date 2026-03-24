import { Link, useNavigate, useLocation } from "react-router-dom";


export default function Dropdown({ label, to, onClick }) {

  const navigate = useNavigate();
  const location = useLocation();


  const scrollLink = to.startsWith("#");

  const handleScroll = (id) => {
    if (location.pathname !== "/"){
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        })
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    onClick?.();
  };

  if (scrollLink) {

    return (
      <a 
      href={to}
      onClick={(e) => {
        e.preventDefault();
        handleScroll(to.replace("#",""));
      }}
      className="flex items-center gap-6 px-4 py-4 text-sm hover:bg-teal-300 transition cursor-pointer">
        <span className="font-medium text-gray-800">{label}</span>
      </a>
    );
  }
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-6 px-4 py-4 text-sm hover:bg-teal-300 transition cursor-pointer">

    
      <span className='font-medium text-gray-800'>{label}</span>
    </Link>
  );

}
