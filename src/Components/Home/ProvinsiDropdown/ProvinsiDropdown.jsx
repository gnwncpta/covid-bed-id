import 'tailwindcss/tailwind.css';
import City from '../Provinsi/Provinsi';

export default function ProvinsiDropdown(props){
    if(!props.show){
        return null;
    }

    // console.log(props.dataCity);

    const { setSelectedProvinsi, setPilihProvinsi, setShowProvinsiDropdown } = props;

    const CityCollection = props.dataCity.map((city, index) => {
        const { id, name } = city;
        return <City 
            key={index+1} 
            value={id} 
            name={name} 
            setSelectedProvinsi={setSelectedProvinsi} 
            setPilihProvinsi={setPilihProvinsi}
            setShowProvinsiDropdown={setShowProvinsiDropdown}> {name} </City>
    });

    return (
        <div className="absolute z-3 w-full h-80 bg-white mx-auto py-1 border rounded-lg border-gray-300 overflow-scroll shadow-lg">
            {CityCollection}
        </div>
    );
}