import { utilsSrevice } from "./utils.service"

function setPlace(cord){

    const place = {
        id:  utilsSrevice.getRandomId(),
        name: setName()  ,
        lat: cord.lat,
        lng: cord.lng,
        weather: getWeather(),
        createdAt: Date.now,
        updatedAt: UpdateTime()
    }
}