var geojson = {"type":"FeatureCollection",
    "features":[
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941932320594788,37.007826180517185]},"properties":{"title":'L1 = 1269m2',"description":'Washington, D.C.'},"id":1},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941996693611145,37.008048936424004]},"properties":{title:'L2',description:'Washington, D.C.'},"id":2},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941776752471924,37.008048936424004]},"properties":{title:'L3',description:'Washington, D.C.'},"id":3},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941900134086609,37.00821171917386]},"properties":{title:'L4',description:'Washington, D.C.'},"id":4},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941690921783447,37.008216002925714]},"properties":{title:'L5',description:'Washington, D.C.'},"id":5},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941803574562071,37.00836593408897]},"properties":{title:'L6',description:'Washington, D.C.'},"id":6},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941599726676941,37.00837878531779]},"properties":{title:'L7',description:'Washington, D.C.'},"id":7},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941707015037537,37.008541567361235]},"properties":{title:'L8',description:'Washington, D.C.'},"id":8},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941503167152405,37.00856726975729]},"properties":{title:'L9',description:'Washington, D.C.'},"id":9},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.94160509109497,37.008725767674186]},"properties":{title:'L10',description:'Washington, D.C.'},"id":10},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941433429718016,37.00874718628625]},"properties":{title:'L11',description:'Washington, D.C.'},"id":11},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941529989242554,37.00890568382799]},"properties":{title:'L12',description:'Washington, D.C.'},"id":12},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941347599029541,37.00891853496554]},"properties":{title:'L13',description:'Washington, D.C.'},"id":13},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941492438316345,37.00908131585307]},"properties":{title:'L14',description:'Washington, D.C.'},"id":14},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941256403923035,37.00910273436496]},"properties":{title:'L15',description:'Washington, D.C.'},"id":15},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.94138514995575,37.00925694747232]},"properties":{title:'L16',description:'Washington, D.C.'},"id":16},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941159844398499,37.00926551485802]},"properties":{title:'L17',description:'Washington, D.C.'},"id":17},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.94131004810333,37.00941116026683]},"properties":{title:'L18',description:'Washington, D.C.'},"id":18},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.941052556037903,37.0094154439511]},"properties":{title:'L19',description:'Washington, D.C.'},"id":19},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-8.940923810005188,37.009518252301156]},"properties":{title:'L20',description:'Washington, D.C.'},"id":20}
    ]};


geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });


