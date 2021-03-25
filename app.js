const city = document.querySelector('h1')
const temp = document.querySelector('h3')
const form = document.querySelector('#form')

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const city = await form.elements.city.value;
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b73cddb55b44e62b4a4d236b57573959`)
    temp.append(res.data.main.temp)
})


// const getWeatherInfo = async () => {
//     try{
//         const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=b73cddb55b44e62b4a4d236b57573959')
//         temp.append(res.data.main.temp)
        
//     }
//     catch(e) {
//         console.log(e)
//     }
// }