export default function getCities(provinceID){
    return fetch(`https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${provinceID}`)
        .then(response => response.json())
        .then(response => response)
}