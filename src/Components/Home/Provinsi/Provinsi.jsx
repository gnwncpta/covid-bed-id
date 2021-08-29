import 'tailwindcss/tailwind.css';

export default function Provinsi(props){

    const { name, value, setSelectedProvinsi, setPilihProvinsi, setShowProvinsiDropdown } = props;

    const Handler = () => {
        setSelectedProvinsi(value);
        setPilihProvinsi(name);
        setShowProvinsiDropdown(false);
    }

    return (
        <p className="block py-3 px-5 cursor-pointer hover:bg-blue-100 font-medium" data-value={props.value} onClick={Handler}>{props.children}</p>
    );
}