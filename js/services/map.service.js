export const mapService = {
    initMap,
    addMarker,
    panTo
}


'AIzaSyB290p39EKaiSA_DpnOx2p0E5jvEcrW1Aw'


// Var that is used throughout this Module (not global)
var gMap

function initMap(lat = 32.0749831, lng = 34.9120554) {
    console.log('InitMap')
    return _connectGoogleApi()
        .then(() => {
            console.log('google available')
            gMap = new google.maps.Map(
                document.querySelector('#map'), {
                center: { lat, lng },
                zoom: 15
            })
            console.log('Map!', gMap)
            onMapClicked()
        })
}

function addMarker(loc) {
    var marker = new google.maps.Marker({
        position: loc,
        map: gMap,
        title: 'Hello World!'
    })
    return marker
}

function onMapClicked() {
    gMap.addListener("click", (mapsMouseEvent) => {
        console.log('hi from onchoose:')
        // const name = prompt('Enter name')
        const cord = mapsMouseEvent.latLng.toJSON()
        console.log('cord:', cord)
        const place = {
            id: getRandomId(),
            name: setName()  ,
            lat: cord.lat,
            lng: cord.lng,
            weather: getWeather(),
            createdAt: Date.now,
            updatedAt: UpdateTime()
        }
    })

// addMarker(cord)
// savePlace(place)
    // renderPlaces()
}


function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng)
    gMap.panTo(laLatLng)
}


function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyB290p39EKaiSA_DpnOx2p0E5jvEcrW1Aw' //DONE: Enter your API Key
    var elGoogleApi = document.createElement('script')
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
    elGoogleApi.async = true
    document.body.append(elGoogleApi)

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}