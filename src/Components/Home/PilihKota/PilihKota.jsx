import 'tailwindcss/tailwind.css';
import DropDown from '../../../assets/DropDown.svg';

export default function PilihKota(props){

    const { setShowKotaDropdown, showKotaDropdown } = props;

    return (
        <button className="w-full h-12 mx-auto my-1 border border-gray-300 rounded-lg flex items-center justify-between focus:ring-2 focus:ring-blue-300 focus:ring-offset-2" onClick={() => setShowKotaDropdown(!showKotaDropdown)}>
            <p className="px-6 text-gray-500">{props.pilihKota}</p>

            <div className="h-full p-4 flex items-center justify-center border-gray-300 border-l">
                {showKotaDropdown &&
                    <img className="w-4 transform rotate-180" src={DropDown} alt="DropDown Icon" />
                }
                
                {!showKotaDropdown &&
                    <img className="w-4" src={DropDown} alt="DropDown Icon" />
                }
            </div>
        </button>
    )
}