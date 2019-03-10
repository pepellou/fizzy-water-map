var pepellou = [42.85, -8.63];

var map = L
    .map('map', {
        zoom: 2,
        minZoom: 2,
        maxZoom: 12
    })
    .setView(
        pepellou,
        2
    );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(pepellou).addTo(map)
    .bindPopup('pepellou')
    .openPopup();

map.on('move', function(e) {
    //console.log(e.target._lastCenter);
});

