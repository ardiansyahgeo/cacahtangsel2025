var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googlehybrid_1 = new ol.layer.Tile({
            'title': 'google  hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_googleimagery_2 = new ol.layer.Tile({
            'title': 'google imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_AREATIDAKDISURVEY_3 = new ol.format.GeoJSON();
var features_AREATIDAKDISURVEY_3 = format_AREATIDAKDISURVEY_3.readFeatures(json_AREATIDAKDISURVEY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREATIDAKDISURVEY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREATIDAKDISURVEY_3.addFeatures(features_AREATIDAKDISURVEY_3);
var lyr_AREATIDAKDISURVEY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREATIDAKDISURVEY_3, 
                style: style_AREATIDAKDISURVEY_3,
                popuplayertitle: "AREA TIDAK DISURVEY",
                interactive: true,
    title: 'AREA TIDAK DISURVEY<br />\
    <img src="styles/legend/AREATIDAKDISURVEY_3_0.png" /> GREEN HILLS ESTATE (sudah di survey)<br />\
    <img src="styles/legend/AREATIDAKDISURVEY_3_1.png" /> Pelanggan Eksisting<br />\
    <img src="styles/legend/AREATIDAKDISURVEY_3_2.png" /> TAMAN KEDAUNG (sudah di survey)<br />\
    <img src="styles/legend/AREATIDAKDISURVEY_3_3.png" /> VILLA JOMBANG BARU (sudah di survey)<br />'
        });
var format_DMZ5DMZ6_4 = new ol.format.GeoJSON();
var features_DMZ5DMZ6_4 = format_DMZ5DMZ6_4.readFeatures(json_DMZ5DMZ6_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DMZ5DMZ6_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DMZ5DMZ6_4.addFeatures(features_DMZ5DMZ6_4);
var lyr_DMZ5DMZ6_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DMZ5DMZ6_4, 
                style: style_DMZ5DMZ6_4,
                popuplayertitle: "DMZ 5 & DMZ 6",
                interactive: true,
                title: '<img src="styles/legend/DMZ5DMZ6_4.png" /> DMZ 5 & DMZ 6'
            });
var format_DMZ9DMZ10_5 = new ol.format.GeoJSON();
var features_DMZ9DMZ10_5 = format_DMZ9DMZ10_5.readFeatures(json_DMZ9DMZ10_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DMZ9DMZ10_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DMZ9DMZ10_5.addFeatures(features_DMZ9DMZ10_5);
var lyr_DMZ9DMZ10_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DMZ9DMZ10_5, 
                style: style_DMZ9DMZ10_5,
                popuplayertitle: "DMZ 9 & DMZ 10",
                interactive: true,
                title: '<img src="styles/legend/DMZ9DMZ10_5.png" /> DMZ 9 & DMZ 10'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_googlehybrid_1.setVisible(false);lyr_googleimagery_2.setVisible(true);lyr_AREATIDAKDISURVEY_3.setVisible(true);lyr_DMZ5DMZ6_4.setVisible(true);lyr_DMZ9DMZ10_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_googlehybrid_1,lyr_googleimagery_2,lyr_AREATIDAKDISURVEY_3,lyr_DMZ5DMZ6_4,lyr_DMZ9DMZ10_5];
lyr_AREATIDAKDISURVEY_3.set('fieldAliases', {'fid_1': 'fid_1', 'ZONA_1': 'ZONA_1', 'Sub_DMA': 'Sub_DMA', 'Nomor': 'Nomor', });
lyr_DMZ5DMZ6_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'RW': 'RW', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'DMZ': 'DMZ', 'masuk_wil': 'masuk_wil', 'kodearea_f': 'kodearea_f', });
lyr_DMZ9DMZ10_5.set('fieldAliases', {'kodearea_f': 'kodearea_f', });
lyr_AREATIDAKDISURVEY_3.set('fieldImages', {'fid_1': 'TextEdit', 'ZONA_1': 'TextEdit', 'Sub_DMA': 'TextEdit', 'Nomor': 'TextEdit', });
lyr_DMZ5DMZ6_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'RW': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'DMZ': 'TextEdit', 'masuk_wil': 'TextEdit', 'kodearea_f': 'TextEdit', });
lyr_DMZ9DMZ10_5.set('fieldImages', {'kodearea_f': 'TextEdit', });
lyr_AREATIDAKDISURVEY_3.set('fieldLabels', {'fid_1': 'inline label - always visible', 'ZONA_1': 'inline label - always visible', 'Sub_DMA': 'inline label - always visible', 'Nomor': 'inline label - always visible', });
lyr_DMZ5DMZ6_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'RW': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'DMZ': 'inline label - always visible', 'masuk_wil': 'inline label - always visible', 'kodearea_f': 'inline label - always visible', });
lyr_DMZ9DMZ10_5.set('fieldLabels', {'kodearea_f': 'inline label - always visible', });
lyr_DMZ9DMZ10_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});