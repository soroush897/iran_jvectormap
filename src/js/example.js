document.addEventListener("DOMContentLoaded", function (event) {
    jQuery('#iran_map').vectorMap({
        map: 'iran_mill',
        enableZoom: false,
        backgroundColor: 'transparent',
        zoomOnScroll: true,
        normalizeFunction: "polynomial",
        hoverOpacity: .7,
        hoverColor: false,
        regionStyle: {
            initial: {
                fill: '#DCE3E8',
                "fill-opacity": 1,
                stroke: '#fff',
                "stroke-width": 1,
                "stroke-opacity": 1
            }
        }
    });
});