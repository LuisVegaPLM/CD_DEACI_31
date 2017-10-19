/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bandera',
                            display: 'block',
                            type: 'image',
                            rect: ['140px', '30px', '300px', '205px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bandera.png",'0px','0px']
                        },
                        {
                            id: 'Caratula',
                            display: 'none',
                            type: 'image',
                            rect: ['196px', '-80px', '300px', '384px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Caratula.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'eidicion',
                            display: 'none',
                            type: 'image',
                            rect: ['283px', '220px', '134px', '15px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"eidicion.png",'0px','0px']
                        },
                        {
                            id: 'plm-mex',
                            display: 'none',
                            type: 'image',
                            rect: ['99px', '272px', '194px', '26px', 'auto', 'auto'],
                            opacity: '0.95',
                            fill: ["rgba(0,0,0,0)",im+"plm-mex.png",'0px','0px']
                        },
                        {
                            id: 'text-uno',
                            display: 'none',
                            type: 'image',
                            rect: ['89px', '312px', '400px', '367px', 'auto', 'auto'],
                            opacity: '0.95',
                            fill: ["rgba(0,0,0,0)",im+"text-uno.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'text-dos',
                            display: 'none',
                            type: 'image',
                            rect: ['89px', '680px', '400px', '169px', 'auto', 'auto'],
                            opacity: '0.95',
                            fill: ["rgba(0,0,0,0)",im+"text-dos.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'text-tres',
                            display: 'none',
                            type: 'image',
                            rect: ['89px', '849px', '400px', '157px', 'auto', 'auto'],
                            opacity: '0.95',
                            fill: ["rgba(0,0,0,0)",im+"text-tres.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'text-cuatro',
                            display: 'none',
                            type: 'image',
                            rect: ['90px', '1016px', '400px', '203px', 'auto', 'auto'],
                            opacity: '0.95',
                            fill: ["rgba(0,0,0,0)",im+"text-cuatro.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'text-cinco',
                            display: 'none',
                            type: 'image',
                            rect: ['502px', '682px', '224px', '194px', 'auto', 'auto'],
                            opacity: '0.95',
                            fill: ["rgba(0,0,0,0)",im+"text-cinco.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '800px', '1227px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.75)"]
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: true,
                    data: [
                        [
                            "eid17",
                            "opacity",
                            750,
                            500,
                            "easeOutBack",
                            "${eidicion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${text-dos}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${text-dos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "left",
                            500,
                            500,
                            "easeOutBack",
                            "${Caratula}",
                            '196px',
                            '416px'
                        ],
                        [
                            "eid58",
                            "scaleX",
                            2000,
                            500,
                            "easeOutBack",
                            "${text-dos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${text-uno}",
                            'none',
                            'none'
                        ],
                        [
                            "eid31",
                            "display",
                            1750,
                            0,
                            "easeOutBack",
                            "${text-uno}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "scaleX",
                            2750,
                            500,
                            "easeOutBack",
                            "${text-cinco}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1250,
                            500,
                            "easeOutBack",
                            "${plm-mex}",
                            '0',
                            '0.95'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bandera}",
                            'block',
                            'block'
                        ],
                        [
                            "eid65",
                            "scaleY",
                            2250,
                            500,
                            "easeOutBack",
                            "${text-tres}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Caratula}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            500,
                            0,
                            "easeOutBack",
                            "${Caratula}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "opacity",
                            2750,
                            500,
                            "easeOutBack",
                            "${text-cinco}",
                            '0',
                            '0.95'
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            500,
                            "easeOutBack",
                            "${bandera}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            2000,
                            500,
                            "easeOutBack",
                            "${text-dos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            2250,
                            500,
                            "easeOutBack",
                            "${text-tres}",
                            '0',
                            '0.95'
                        ],
                        [
                            "eid68",
                            "opacity",
                            1750,
                            500,
                            "easeOutBack",
                            "${text-uno}",
                            '0',
                            '0.95'
                        ],
                        [
                            "eid24",
                            "top",
                            1250,
                            500,
                            "easeOutBack",
                            "${plm-mex}",
                            '202px',
                            '272px'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${text-cinco}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            2750,
                            0,
                            "easeOutBack",
                            "${text-cinco}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "scaleY",
                            2750,
                            500,
                            "easeOutBack",
                            "${text-cinco}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "scaleY",
                            2500,
                            500,
                            "easeOutBack",
                            "${text-cuatro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "left",
                            750,
                            500,
                            "easeOutBack",
                            "${eidicion}",
                            '283px',
                            '503px'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            2250,
                            500,
                            "easeOutBack",
                            "${text-tres}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "scaleY",
                            1750,
                            500,
                            "easeOutBack",
                            "${text-uno}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${eidicion}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            750,
                            0,
                            "easeOutBack",
                            "${eidicion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "scaleX",
                            2500,
                            500,
                            "easeOutBack",
                            "${text-cuatro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${plm-mex}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            1250,
                            0,
                            "easeOutBack",
                            "${plm-mex}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${text-tres}",
                            'none',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${text-tres}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "scaleY",
                            0,
                            500,
                            "easeOutBack",
                            "${bandera}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${text-dos}",
                            '0',
                            '0.95'
                        ],
                        [
                            "eid66",
                            "opacity",
                            2500,
                            500,
                            "easeOutBack",
                            "${text-cuatro}",
                            '0',
                            '0.95'
                        ],
                        [
                            "eid60",
                            "scaleX",
                            1750,
                            500,
                            "easeOutBack",
                            "${text-uno}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            500,
                            500,
                            "easeOutBack",
                            "${Caratula}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${text-cuatro}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${text-cuatro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "scaleX",
                            0,
                            500,
                            "easeOutBack",
                            "${bandera}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("contacto_edgeActions.js");
})("EDGE-1055353685");
