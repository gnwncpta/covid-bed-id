import 'tailwindcss/tailwind.css';

export default function Kota(props){

    const { name, value, setShowKotaDropdown, setSelectedKota, setPilihKota } = props;

    const Handler = () => {
        setSelectedKota(value);
        setPilihKota(name);
        setShowKotaDropdown(false);
    }

    return (
        <p className="block py-3 px-5 cursor-pointer hover:bg-blue-100 font-medium" data-value={value} onClick={Handler}>{props.children}</p>
    )
}