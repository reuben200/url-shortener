import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

  return (
    <div className="flex w-full flex-row justify-between items-center p-4 select-none">
        <div className="font-serif text-gray-400 text-2xl italic logo">
            Just <span className="text-red-500"><FontAwesomeIcon icon={faScissors} className=" mr-2" /></span>Clip it
        </div>
    </div>
  )
}

export default Header