var Drinker = function(name, gps) {
    this.name = name;
    this.gps = gps;
    return this;
};


var squad = [
    new Drinker('pepellou', [42.85, -8.63]),
    new Drinker('Whiskey1983', [51.51, -0.12]),
    new Drinker('ojb', [53.42, -1.35]),
    new Drinker('JohnJohn134', [57.05, 9.92]),
    new Drinker('JoannaTries', [-93.17, 44.804])
];

var map = L
    .map('map', {
        zoom: 2,
        minZoom: 2,
        maxZoom: 12
    })
    .setView(
        squad[0].gps,
        2
    );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var bottle = L.icon({
    iconUrl: 'img/pepellWater.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    // TODO: graphics for shadow
    //shadowUrl: 'my-icon-shadow.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [22, 94]
});

for (var i = 0; i < squad.length; i++) {
    var drinker = squad[i];
    L.marker(drinker.gps, { icon: bottle })
        .addTo(map)
        .bindPopup(drinker.name)
}


map.on('move', function(e) {
    console.log(e.target._lastCenter);
});

