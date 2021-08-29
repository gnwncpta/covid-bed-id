import 'tailwindcss/tailwind.css';

export default function FindHospital(props){
    const { ButtonEvent } = props;
    return (
        <button onClick={ButtonEvent} className="cursor-pointer py-3 w-full rounded-lg font-semibold font-16px bg-blue-600 text-white">{props.children}</button>
    )
}