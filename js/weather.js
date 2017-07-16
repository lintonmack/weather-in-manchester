function WeatherConverter () {
    this._main = {}
}

WeatherConverter.prototype = {
    getMain: function () {
        return this._main
    }, 
    setMain: function (main) {
        this._main = main

        return
    }
}