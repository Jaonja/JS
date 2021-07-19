fetch ('http://api.openweathermap.org/data/2.5/weather?q=Brest&appid=6c273cbb2593e6efce1a4c12e3db2db5')
.then(function (resp){return resp.json() })
.then(function (data){
    console.log (data)
    document.querySelector('.City').innerHTML= data.name
    document.querySelector('.temperature').innerHTML = Math.floor(data.main.temp -273) +'&deg'
    document.querySelector('.disclaimer').textContent= data.weather[0]['description']
    document.querySelector('.ico').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
})
.catch (function(){
    
})