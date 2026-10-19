var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADM_Kota_Semarang_1 = new ol.format.GeoJSON();
var features_ADM_Kota_Semarang_1 = format_ADM_Kota_Semarang_1.readFeatures(json_ADM_Kota_Semarang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_Kota_Semarang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_Kota_Semarang_1.addFeatures(features_ADM_Kota_Semarang_1);
var lyr_ADM_Kota_Semarang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_Kota_Semarang_1, 
                style: style_ADM_Kota_Semarang_1,
                popuplayertitle: 'ADM_Kota_Semarang',
                interactive: true,
                title: '<img src="styles/legend/ADM_Kota_Semarang_1.png" /> ADM_Kota_Semarang'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADM_Kota_Semarang_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADM_Kota_Semarang_1];
lyr_ADM_Kota_Semarang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADM_Kota_Semarang_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADM_Kota_Semarang_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_ADM_Kota_Semarang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});