import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, } from "react-redux";
import { toggleMenu } from "../../Store/appSlice";


const Header = () => {

    const dispatch = useDispatch()

    const handleMenu = ()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className="flex justify-between border-b-2 shadow-md bg-gray-50 px-6 py-2">
      <div className="flex gap-4">
        <span onClick={handleMenu} className="cursor-pointer">
          {" "}
          <FontAwesomeIcon icon={faBars} className="h-7" />
        </span>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUipe0FTyWdINiTKprtW8_namo12bC32Hl3A&s"
          alt="youtube-logo"
          className="h-7 bg-transparent cursor-pointer"
        />
      </div>

      <div className="flex justify-between px-2 border-gray-400 border-2 outline-1 w-[40dvw] my-auto rounded-xl ">
        <input type="text" placeholder="Search" className="pb-1 self-center outline:none w-[37dvw] border:none focus:outline-none focus-within:border-none" />
        <span className="bg-gray-50"><FontAwesomeIcon icon={faMagnifyingGlass} className="self-center " /></span>
      </div>

      <div>
      <FontAwesomeIcon icon={faUser} className="h-7"/>
      </div>
     
    </div>
  );
};

export default Header;
