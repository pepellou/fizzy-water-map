var Drinker = function(name, gps) {
    this.name = name;
    this.gps = gps;
    return this;
};


var squad = [
    new Drinker('pepellou', [42.85, -8.58]),
    new Drinker('Whiskey1983', [51.51, -0.12]),
    new Drinker('ohjay_', [53.42, -1.35]),
    new Drinker('JohnJohn134', [57.05, 9.92]),
    new Drinker('JoannaTries', [44.804, -93.17]),
    new Drinker('Chesskudo', [52.01, 4.36]),
    new Drinker('Chesscomet', [42.36, -71.06]),
    new Drinker('okei', [52.205, 0.122]),
    new Drinker('ChessWithChris', [41.49, -81.69]),
    new Drinker('abc', [42.712,-73.203]),
    new Drinker('kuartillo', [42.89,-8.5]),
    new Drinker('c4ndel4', [42.81,-8.64]),
    new Drinker('MakeHell_Tal', [41.87,-87.62]),
    new Drinker('MICKEk1977', [58.41,15.62]),
    new Drinker('haythammed', [30.04,31.23]),
    new Drinker('Ljlchess', [40.9,-75.66]),
    new Drinker('careless__carlos', [48.78,9.17]),
    new Drinker('Ravellanim', [51.96,5.66]),
    new Drinker('sefanstien', [40.21,28.98]),
    new Drinker('gunfunkel', [47.88,12.41]),
    new Drinker('Morphy73', [43.12,5.92]),
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

