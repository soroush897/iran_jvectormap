document.addEventListener("DOMContentLoaded", function (event) {
    const jvm_map = $('#iran_map');
    jvm_map.vectorMap({
        map: 'ir_mill',
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
                "stroke-width": 2,
                "stroke-opacity": 1
            }
        },
        onRegionClick: function (event, code) {
            if (code !== 'ir_kish') {
                const jvm_container = jvm_map.children('.jvectormap-container');
                jvm_container.addClass('ir_mill').hide();
                $('.jvm_back').show();
                setTimeout(function () {
                    jvm_map.vectorMap({
                        map: code,
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
                                "stroke-width": 2,
                                "stroke-opacity": 1
                            }
                        }
                    });
                }, 300);
            } else {
                event.stopImmediatePropagation();
            }
        }
    });
    $('.jvm_back').click(function () {
        $(this).hide();
        $('.jvectormap-container:not(.ir_mill)').remove();
        $('.jvectormap-container.ir_mill').removeClass('ir_mill').show();
    });
});