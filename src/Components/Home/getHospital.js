export default function getHospital(provinsiID, kotaID){
    return fetch(`https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${provinsiID}&cityid=${kotaID}&type=1`)
            .then(response => response.json())
            .then(response => response)
}