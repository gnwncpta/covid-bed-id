import 'tailwindcss/tailwind.css';
import Kota from '../Kota/Kota';

export default function KotaDropdown(props){
    if(!props.show){
        return null;
    }

    const { setShowKotaDropdown, dataCity, setSelectedKota, setPilihKota } = props;

    const CityCollection = dataCity.map((item, index) => {
        const { id, name } = item;
        return <Kota 
            key={index+1} 
            value={id} 
            name={name}
            setSelectedKota={setSelectedKota}
            setShowKotaDropdown={setShowKotaDropdown}
            setPilihKota={setPilihKota}
        > {name} </Kota>
    });

    return (
        <div>
            {!dataCity.length && 
                <div className="absolute top-15 z-3 w-full bg-white mx-auto py-5 border rounded-lg border-gray-300 shadow-lg">
                    <p className="text-gray-400 py-2 px-6 my-4">Mohon untuk memilih provinsi terlebih dahulu</p>
                </div>
            }

            {dataCity.length > 0 &&
                <div className="absolute top-15 z-3 w-full h-80 bg-white mx-auto py-1 border rounded-lg border-gray-300 overflow-scroll shadow-lg">
                    {CityCollection}
                </div>
            }
        </div>
    );
}