'use strict';

class Track {
    constructor(id, textOutput, speechOutput, searchName) {
        this.id = id;
        this.textOutput = textOutput;

        this.speechOutput = speechOutput ? speechOutput : textOutput;
        this.searchName = searchName ? searchName : textOutput;
    }
}

module.exports = {
    ZOLDER: new Track('ZOLDER', 'Zolder'),
    VALENCIA: new Track('VALENCIA', 'Valencia'),
    TOCKWITH: new Track('TOCKWITH', 'Tockwith'),
    THREE_SISTERS: new Track('THREE_SISTERS', 'Three Sisters'),
    SILVERSTONE_RALLY_SCHOOL: new Track(
        'SILVERSTONE_RALLY_SCHOOL',
        'Silverstone Rally School'
    ),
    SHAKESPEARE_COUNTY_RACEWAY: new Track(
        'SHAKESPEARE_COUNTY_RACEWAY',
        'Shakespeare County Raceway'
    ),
    SEIGHFORD_DRIVING_CENTRE: new Track(
        'SEIGHFORD_DRIVING_CENTRE',
        'Seighford Driving Centre'
    ),
    SANTA_POD_RACEWAY: new Track(
        'SANTA_POD_RACEWAY',
        'Santa Pod',
        'Santa Pod',
        'Santa Pod Raceway'
    ),
    RAF_WITTERING: new Track('RAF_WITTERING', 'RAF Wittering'),
    RAF_ODIHAM: new Track('RAF_ODIHAM', 'RAF Odiham'),
    PRESTWOLD_HALL: new Track('PRESTWOLD_HALL', 'Prestwold Hall'),
    NORTH_WEALD_AIRFIELD: new Track(
        'NORTH_WEALD_AIRFIELD',
        'North Weald Airfield'
    ),
    MUGELLO: new Track(
        'MUGELLO',
        'Mugello',
        'Mugello',
        '<phoneme alphabet="ipa" ph="ˈmud͡ʒɛlo">Mugello</phoneme>'
    ),
    MONZA: new Track('MONZA', 'Monza'),
    MONDELLO_PARK: new Track('MONDELLO_PARK', 'Mondello Park'),
    MISANO: new Track('MISANO', 'Misano'),
    MILBROOK_PROVING_GROUND: new Track(
        'MILBROOK_PROVING_GROUND',
        'Millbrook Proving Ground'
    ),
    METTET: new Track(
        'METTET',
        'Mettet',
        '<phoneme alphabet="ipa" ph="ˈmeˈteɪ">Mettet</phoneme>'
    ),
    MERCEDES_BENZ_WORLD: new Track(
        'MERCEDES_BENZ_WORLD',
        'Mercedes Benz World'
    ),
    MAGNY_COURS: new Track('MAGNY_COURS', 'Magny Cours'),
    LONDON_RALLY_SCHOOL: new Track(
        'LONDON_RALLY_SCHOOL',
        'London Rally School'
    ),
    LONDON_CIRCUIT_RUSHMOOR_ARENA: new Track(
        'LONDON_CIRCUIT_RUSHMOOR_ARENA',
        'London Circuit Rushmoor Arena'
    ),
    LLANDOW: new Track(
        'LLANDOW',
        'Llandow',
        '<phoneme alphabet="ipa" ph="ɬan.daʊ">Llandow</phoneme>'
    ),
    LEEDS_RACEWAY: new Track('LEEDS_RACEWAY', 'Leeds Raceway'),
    KNOCKHILL: new Track('KNOCKHILL', 'Knockhill'),
    KENILWORTH: new Track('KENILWORTH', 'Kenilworth'),
    KEEVIL: new Track(
        'KEEVIL',
        'Keevil',
        `<phoneme alphabet="ipa" ph="k'iv.ɪl">Keevil</phoneme>`
    ),
    JURBY: new Track(
        'JURBY',
        'Jurby',
        `<phoneme alphabet="ipa" ph="d͡ʒɜɜ'bi">Jurby</phoneme>`
    ),
    HULLAVINGTON: new Track(
        'HULLAVINGTON',
        'Hullavington',
        `<phoneme alphabet="ipa" ph="hʌləvɪngton">Hullavington</phoneme>`
    ),
    HEYFORD_PARK: new Track('HEYFORD_PARK', 'Heyford Park'),
    GUADIX: new Track('GUADIX', 'Guadix'),
    GREAT_TEW_ESTATE: new Track('GREAT_TEW_ESTATE', 'Great Tew Estate'),
    FOLEMBRAY: new Track('FOLEMBRAY', 'Folembray'),
    FAY_DE_BRETAGNE: new Track('FAY_DE_BRETAGNE', 'Fay de Bretagne'),
    ELVINGTON: new Track('ELVINGTON', 'Elvington'),
    ECUYERS: new Track('ECUYERS', 'Ecuyers'),
    DUNSFOLD_PARK: new Track('DUNSFOLD_PARK', 'Dunsfold Park'),
    CROIX_EN_TERNOIS: new Track('CROIX_EN_TERNOIS', 'Croix en Ternois'),
    COLERNE_AIRFIELD: new Track('COLERNE_AIRFIELD', 'Colerne Airfield'),
    CIRCUIT_PAUL_RICARD: new Track(
        'CIRCUIT_PAUL_RICARD',
        'Circuit Paul Ricard'
    ),
    CHOBHAM_TEST_TRACK: new Track('CHOBHAM_TEST_TRACK', 'Chobham Test Track'),
    BUCKMORE_PARK: new Track('BUCKMORE_PARK', 'Buckmore Park'),
    BRUNTINGTHORPE: new Track('BRUNTINGTHORPE', 'Bruntingthorpe'),
    BRNO_CIRCUIT: new Track('BRNO_CIRCUIT', 'Brno Circuit'),
    BOVINGDON_AIRFIELD: new Track('BOVINGDON_AIRFIELD', 'Bovingdon Airfield'),
    BICESTER_HERITAGE_CENTRE: new Track(
        'BICESTER_HERITAGE_CENTRE',
        'Bicester Heritage Centre'
    ),
    BASSINGBOURN: new Track('BASSINGBOURN', 'Bassingbourn'),
    ALMERIA: new Track('ALMERIA', 'Almeria'),
    ALBACETE: new Track('ALBACETE', 'Albacete'),
    ZANDVOORT: new Track(
        'ZANDVOORT',
        'Zandvoort',
        `<phoneme alphabet="ipa" ph="zand.vɔrt">Zandvoort</phoneme>`
    ),
    WOODBRIDGE: new Track('WOODBRIDGE', 'Woodbridge'),
    THRUXTON: new Track('THRUXTON', 'Thruxton'),
    TEESIDE_AUTODROME: new Track('TEESIDE_AUTODROME', 'Teeside Autodrome'),
    SPA_FRANCORCHAMPS: new Track(
        'SPA_FRANCORCHAMPS',
        'Spa-Francorchamps',
        `<phoneme alphabet="ipa" ph="spɑ frank,ɔ'ʃɔ">Spa-Francorchamps</phoneme>`,
        'Spa'
    ),
    SNETTERTON: new Track('SNETTERTON', 'Snetterton'),
    SILVERSTONE: new Track('SILVERSTONE', 'Silverstone'),
    ROCKINGHAM: new Track('ROCKINGHAM', 'Rockingham'),
    PORTIMAO: new Track('PORTIMAO', 'Portimao'),
    PEMBREY: new Track('PEMBREY', 'Pembrey'),
    OULTON_PARK: new Track('OULTON_PARK', 'Oulton Park'),
    NURBURGRING: new Track('NURBURGRING', 'Nurburgring'),
    MALLORY_PARK: new Track('MALLORY_PARK', 'Mallory Park'),
    LYDDEN_HILL: new Track('LYDDEN_HILL', 'Lydden Hill'),
    LE_MANS: new Track(
        'LE_MANS',
        'Le Mans',
        `<phoneme alphabet="ipa" ph="lə mɒ">Le Mans</phoneme>`
    ),
    KENDREW_BARRACKS: new Track('KENDREW_BARRACKS', 'Kendrew Barracks'),
    JEREZ: new Track('JEREZ', 'Jerez'),
    GOODWOOD: new Track('GOODWOOD', 'Goodwood'),
    ESTORIL: new Track(
        'ESTORIL',
        'Estoril',
        `<phoneme alphabet="ipa" ph="ɛstɔɹ,il">Estoril</phoneme>`
    ),
    DONINGTON_PARK: new Track('DONINGTON_PARK', 'Donington Park'),
    CROFT: new Track('CROFT', 'Croft'),
    CATALUNYA: new Track('CATALUNYA', 'Catalunya'),
    CASTLE_COMBE: new Track('CASTLE_COMBE', 'Castle Combe'),
    CARTAGENA: new Track(
        'CARTAGENA',
        'Cartagena',
        `<phoneme alphabet="ipa" ph="kɑtæ'heɪnə">Cartagena</phoneme>`
    ),
    CADWELL_PARK: new Track('CADWELL_PARK', 'Cadwell Park'),
    BRANDS_HATCH: new Track('BRANDS_HATCH', 'Brands Hatch'),
    BLYTON_PARK: new Track('BLYTON_PARK', 'Blyton Park'),
    BEDFORD_AUTODROME: new Track('BEDFORD_AUTODROME', 'Bedford Autodrome'),
    ARAGON: new Track('ARAGON', 'Aragon'),
    ANGLESEY: new Track('ANGLESEY', 'Anglesey'),
    ABINGDON: new Track('ABINGDON', 'Abingdon')
};
