map.on('load', function() {
    // addSource

    map.addSource("territories", {
        "type": "geojson",
        "data": "polygons.geojson"
    });


    // add Layers

    map.addLayer(customLayer);
    map.addLayer(stateBorders);
    map.addLayer(stateFills);

    map.moveLayer('state-fills', '3d-model');
    map.moveLayer('state-borders', '3d-model');



});