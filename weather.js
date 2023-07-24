
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '165f7c1ec1msh5ab60c26cc7c040p1f17e1jsnf3417331319b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
async function fetchDelhiData(c){
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+c;
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    //Delhi data
    condition1.innerHTML=result.current.condition.text;
    temp_c2.innerHTML=result.current.temp_c;
    humidity1.innerHTML=result.current.humidity;
}

async function fetchKolkataData(c){
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+c;
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
     //Kolkata data
     condition2.innerHTML=result.current.condition.text;
     temp_c3.innerHTML=result.current.temp_c;
     humidity2.innerHTML=result.current.humidity;
}
async function fetchMumbaiData(c){
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+c;
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    //Mumbai data
    condition3.innerHTML=result.current.condition.text;
    temp_c4.innerHTML=result.current.temp_c;
    humidity3.innerHTML=result.current.humidity;
}
async function fetchLucknowData(c){
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+c;
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
     //Lucknow data
     condition4.innerHTML=result.current.condition.text;
     temp_c5.innerHTML=result.current.temp_c;
     humidity4.innerHTML=result.current.humidity;
}
async function fetchPuneData(c){
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+c;
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
     //Pune data
     condition5.innerHTML=result.current.condition.text;
     temp_c6.innerHTML=result.current.temp_c;
     humidity5.innerHTML=result.current.humidity;
}

function setVideo(conditionType){
    var videoContainer = document.createElement("div");
    videoContainer.className = "video-container";

    var videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.playInline = true;

    var sourceElement = document.createElement("source");
    sourceElement.src = conditionType+".mp4";
    sourceElement.type = "video/mp4";
    sourceElement.className = "back-video";

    videoElement.appendChild(sourceElement);
    videoContainer.appendChild(videoElement);
    document.body.appendChild(videoContainer);
}

async function fetchData(city) {
    try {
        
        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+city;
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        condition.innerHTML=result.current.condition.text;
        var conditionText=result.current.condition.text;
        cityname.innerHTML=result.location.name;
        cityname1.innerHTML=result.location.name;
        region.innerHTML=result.location.region;
        localtime.innerHTML=result.location.localtime;
        country.innerHTML=result.location.country;
        wind_kph.innerHTML=result.current.wind_kph;
        wind_dir.innerHTML=result.current.wind_dir;
        humidity.innerHTML=result.current.humidity;
        cloud.innerHTML=result.current.cloud;;
        temp_c.innerHTML=result.current.temp_c;
        temp_c1.innerHTML=result.current.temp_c;
        temp_f.innerHTML=result.current.temp_f;
        is_day.innerHTML=result.current.is_day;
        uvray.innerHTML=result.current.uv;

        if (conditionText.includes("rain")) {
            setVideo("rain");
        }
        else if(conditionText.includes("snow")){
            setVideo("snow");
        }
        else if(conditionText.includes("Mist")){
            setVideo("mist");
        }
        else if(conditionText.includes("Sunny")){
            setVideo("sun");
        }
        else if(conditionText.includes("cloud")){
            setVideo("cloud");
        }
        else if(conditionText.includes("clear")){
            setVideo("sun");
        }

    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click",(e)=>{
    const searchedCity=city.value;
     e.preventDefault()
       fetchData(searchedCity);
});

const dropDownItems=document.getElementsByClassName("dropdown-item");

for(let i=0;i<dropDownItems.length;i++){
    dropDownItems[i].addEventListener("click",function(event){
       const selectedCity=this.textContent;
       fetchData(selectedCity);
    });
}
fetchData("kanpur");
fetchDelhiData("delhi");
fetchKolkataData("Kolkata");
fetchMumbaiData("Mumbai");
fetchLucknowData("Lucknow");
fetchPuneData("Pune");
