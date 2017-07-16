var weatherConverter = new WeatherConverter()

var request = new XMLHttpRequest()

request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=e14e76429c1dfbea37cce5b6efaab2e1')

request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var responseJSON = JSON.parse(this.response)
        var main = responseJSON.main

        weatherConverter.setMain(main)

        for (var main in main) {
            $('#main').append('<li><strong>' + main + ':</strong> ' + main[main] + '</li>')
        }
        }
}

request.send()