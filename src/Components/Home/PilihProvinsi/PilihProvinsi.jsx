import 'tailwindcss/tailwind.css';
import DropDown from '../../../assets/DropDown.svg';

export default function PilihProvinsi(props){
    
    return (
        <button className="w-full h-12 mx-auto my-3 border border-gray-300 rounded-lg flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 bg-white" onClick={() => props.setShowProvinsiDropdown(props.showProvinsiDropdown ? false : true)} >
            <p className="h-full font-normal px-6 py-3 text-gray-500">{props.pilihProvinsi}</p>

            <div className="flex h-full p-4 border-l border-gray-300 items-center justify-center">
                {!props.showProvinsiDropdown && 
                    <img className="w-4 transform rotate-0" src={DropDown} alt="Dropdown Icon" />
                }
                {props.showProvinsiDropdown && 
                    <img className="w-4 transform rotate-180" src={DropDown} alt="Dropdown Icon" />
                }
            </div>
        </button>
    )
}