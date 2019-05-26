var hoveredStateId = null;
var check = "";

var position = [
    [0, 0],
    [0, 0],
    [-10, 4],
    [-16, 6],
    [-22, 8],
    [-27, 10],
    [-32, 12],
    [-38, 15],
    [-44, 17],
    [-50, 19],
    [-56, 21],
    [-61, 23],
    [-67, 25],
    [-73, 27],
    [-79, 29],
    [-85, 31],
    [-90, 33],
    [-95, 35],
    [-100, 37],
    [-106, 39],
    [-112, 41],
];

// The feature-state dependent fill-opacity expression will render the hover effect
// when a feature's hover state is set to true.
        var stateFills = {
            "id": "state-fills",
            "type": "fill",
            "source": "territories",
            "layout": {},
            "paint": {
                "fill-color": "#627BC1",
                "fill-opacity": ["case",
                    ["boolean", ["feature-state", "hover"], false],
                    1,
                    0.5
                ]
            }
        };

        var stateBorders = {
            "id": "state-borders",
            "type": "line",
            "source": "territories",
            "layout": {},
            "paint": {
                "line-color": "#627BC1",
                "line-width": 2
            }
        };

// When the user moves their mouse over the state-fill layer, we'll update the
// feature state for the feature under the mouse.
        map.on("mousemove", "state-fills", function (e) {
            map.getCanvas().style.cursor = 'pointer';
            customLayer.model.scale.set(3, 3, 3);
            if (e.features.length > 0) {
                if (hoveredStateId && hoveredStateId !== check) {
                    map.setFeatureState({source: 'territories', id: hoveredStateId}, {hover: false});
                }
                hoveredStateId = e.features[0].id;
                map.setFeatureState({source: 'territories', id: hoveredStateId}, {hover: true});
            }
        });

// When the mouse leaves the state-fill layer, update the feature state of the
// previously hovered feature.
        map.on("mouseleave", "state-fills", function () {
            map.getCanvas().style.cursor = '';
            customLayer.model.scale.set(1, 1, 1);
            if (hoveredStateId) {
                if(hoveredStateId !== check){
                    map.setFeatureState({source: 'territories', id: hoveredStateId}, {hover: false});
                }

            }
        });


        map.on('click', 'state-fills', function (e) {
            hoveredStateId = e.features[0].id;
            customLayer.animateP(position[hoveredStateId][0], position[hoveredStateId][1]);
            // customLayer(position);
            // if (hoveredStateId == 2){
            //     customLayer.animateP(-10, 3)
            // } else if( hoveredStateId == 3){
            //     customLayer.animateP(-20, 3)
            // }
            map.setFeatureState({source: 'territories', id: check}, {hover: false});
        if (!check){
            $('#item_'+ hoveredStateId).css('display','block');
            map.setFeatureState({source: 'territories', id: hoveredStateId}, {hover: true});
            check = hoveredStateId;
        } else if (check !== hoveredStateId) {
            $('#item_'+ check).css('display','none');
            $('#item_'+ hoveredStateId).css('display','block');
            check = hoveredStateId;
        }

        $('#charms').charms('showSection', 'theme-charms-section');
        $('#charms').append('<div class="close__modal"></div>');
});