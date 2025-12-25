var APP_DATA = {
  "scenes": [
    {
      "id": "0-heaven-hotel",
      "name": "Heaven Hotel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 3.029631481139373,
        "pitch": -0.41217028327262284,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.1242430409690876,
          "pitch": 0.2435814655547528,
          "rotation": 18.84955592153877,
          "target": "1-walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-walkway",
      "name": "Walkway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.3811913568208363,
        "pitch": 0.13223798080849392,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.4355780732614782,
          "pitch": 0.2473659333101974,
          "rotation": 0,
          "target": "0-heaven-hotel"
        },
        {
          "yaw": 3.12353480937204,
          "pitch": 0.29077906038132895,
          "rotation": 7.853981633974483,
          "target": "2-enterance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-enterance",
      "name": "Enterance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 3.1171309574354984,
        "pitch": -0.22157461282628788,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.0253256039363414,
          "pitch": 0.013531309479143161,
          "rotation": 0,
          "target": "3-entrance-door"
        },
        {
          "yaw": -1.6774741597926859,
          "pitch": 0.23253327191049422,
          "rotation": 0,
          "target": "1-walkway"
        },
        {
          "yaw": -0.5086687569515185,
          "pitch": 0.14995256798425416,
          "rotation": 19.63495408493622,
          "target": "0-heaven-hotel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrance-door",
      "name": "Entrance Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.993624490333996,
        "pitch": 0.07584351294745062,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.034739671905816394,
          "pitch": 0.577454155328958,
          "rotation": 0,
          "target": "2-enterance"
        },
        {
          "yaw": -2.7595975363022216,
          "pitch": 0.3505853040574092,
          "rotation": 1.5707963267948966,
          "target": "4-reception"
        },
        {
          "yaw": -2.992049921796607,
          "pitch": 0.17246000654802884,
          "rotation": 0,
          "target": "5-lobby-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.7597173881535202,
        "pitch": 0.09237947426731274,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.7775769413028915,
          "pitch": 0.35662029240965865,
          "rotation": 5.497787143782138,
          "target": "3-entrance-door"
        },
        {
          "yaw": 1.7067913076417796,
          "pitch": 0.2748125301495197,
          "rotation": 0,
          "target": "5-lobby-lift"
        },
        {
          "yaw": 1.1090484896491688,
          "pitch": 0.11629137801344847,
          "rotation": 0,
          "target": "11-lobby-stairs"
        },
        {
          "yaw": -0.25280763531981165,
          "pitch": 0.2744876424882712,
          "rotation": 0.7853981633974483,
          "target": "9-cafe--restaurant"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lobby-lift",
      "name": "Lobby Lift",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.097966503649026,
        "pitch": -0.024107706829234132,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.12219468651579746,
          "pitch": 0.22609825216489554,
          "rotation": 0,
          "target": "3-entrance-door"
        },
        {
          "yaw": -0.22308761477988703,
          "pitch": 0.35759821200612407,
          "rotation": 4.71238898038469,
          "target": "4-reception"
        },
        {
          "yaw": 0.4160776198165461,
          "pitch": 0.1681399858848991,
          "rotation": 0.7853981633974483,
          "target": "9-cafe--restaurant"
        },
        {
          "yaw": 1.58195818415592,
          "pitch": 0.39401175083804496,
          "rotation": 0.7853981633974483,
          "target": "11-lobby-stairs"
        },
        {
          "yaw": -2.4453929988442162,
          "pitch": -0.034075247338090975,
          "rotation": 0,
          "target": "6-1st-floor-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-1st-floor-lift",
      "name": "1st Floor Lift",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.722389009522524,
        "pitch": 0.08186744738241813,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.4612429455242157,
          "pitch": 0.2795126096303626,
          "rotation": 0,
          "target": "26-1st-floor-rooms-1"
        },
        {
          "yaw": -2.5282478491788716,
          "pitch": -0.06975343099128395,
          "rotation": 0,
          "target": "7-2nd-floor-lift"
        },
        {
          "yaw": -2.534660166180281,
          "pitch": 0.16022517798223745,
          "rotation": 3.141592653589793,
          "target": "5-lobby-lift"
        },
        {
          "yaw": 1.7344586523552756,
          "pitch": 0.25908979411195965,
          "rotation": 0,
          "target": "23-1st-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2nd-floor-lift",
      "name": "2nd Floor Lift",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.3392283957927145,
        "pitch": 0.15385848578330474,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.3598080056965287,
          "pitch": -0.09506618810451073,
          "rotation": 0,
          "target": "8-3rd-floor-lift"
        },
        {
          "yaw": -2.3573419629153918,
          "pitch": 0.24041912440494073,
          "rotation": 9.42477796076938,
          "target": "6-1st-floor-lift"
        },
        {
          "yaw": 1.594121957478496,
          "pitch": 0.3432662198293688,
          "rotation": 1.5707963267948966,
          "target": "29-2nd-floor"
        },
        {
          "yaw": 1.4154938542794273,
          "pitch": 0.16509632665642293,
          "rotation": 0,
          "target": "30-2nd-floor-rooms"
        },
        {
          "yaw": -1.5137984286343809,
          "pitch": 0.2621193202279244,
          "rotation": 6.283185307179586,
          "target": "31-2nd-floor-rooms-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3rd-floor-lift",
      "name": "3rd Floor Lift",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.9150947803535345,
        "pitch": 0.07438261920807321,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.3134247923061935,
          "pitch": 0.23893550173011135,
          "rotation": 3.141592653589793,
          "target": "7-2nd-floor-lift"
        },
        {
          "yaw": -1.5279646452751603,
          "pitch": 0.2867989968055671,
          "rotation": 18.06415775814132,
          "target": "36-3rd-floor-rooms-1"
        },
        {
          "yaw": 1.3408432344604346,
          "pitch": 0.18438382322658597,
          "rotation": 0,
          "target": "35-3rd-floor-rooms"
        },
        {
          "yaw": 1.5324349950275193,
          "pitch": 0.3148586524038812,
          "rotation": 7.0685834705770345,
          "target": "34-3rd-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cafe--restaurant",
      "name": "Cafe & Restaurant",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.8119737487345233,
        "pitch": 0.10597464107533483,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.0785910265169214,
          "pitch": 0.009077834955999009,
          "rotation": 0,
          "target": "10-resturant-2"
        },
        {
          "yaw": 1.2400541719524263,
          "pitch": 0.07792031317890569,
          "rotation": 0,
          "target": "4-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-resturant-2",
      "name": "Resturant 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.870790831888865,
        "pitch": 0.034421037611574334,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.903442265320483,
          "pitch": 0.17210410199243853,
          "rotation": 0,
          "target": "9-cafe--restaurant"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-lobby-stairs",
      "name": "Lobby Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.085490361311596,
        "pitch": 0.16007927161777147,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.2243055209475262,
          "pitch": 0.3262528841221055,
          "rotation": 5.497787143782138,
          "target": "5-lobby-lift"
        },
        {
          "yaw": -0.21137185925703683,
          "pitch": 0.2491271895227456,
          "rotation": 5.497787143782138,
          "target": "4-reception"
        },
        {
          "yaw": 0.19780913340146888,
          "pitch": 0.1971979144795295,
          "rotation": 6.283185307179586,
          "target": "3-entrance-door"
        },
        {
          "yaw": -2.7304791760653764,
          "pitch": 0.28318413891045857,
          "rotation": 7.0685834705770345,
          "target": "12-lobby-stairs-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lobby-stairs-1",
      "name": "Lobby Stairs 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.5080561497040783,
        "pitch": 0.13755092214719156,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.6717451803471928,
          "pitch": 0.28474675390908466,
          "rotation": 5.497787143782138,
          "target": "11-lobby-stairs"
        },
        {
          "yaw": 3.071243171203915,
          "pitch": -0.0889547763252736,
          "rotation": 0,
          "target": "13-lobby-stairs-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-lobby-stairs-2",
      "name": "Lobby Stairs 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.999844882478495,
        "pitch": 0.1568907002787796,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.7927543366882457,
          "pitch": 0.5917082827003934,
          "rotation": 0,
          "target": "12-lobby-stairs-1"
        },
        {
          "yaw": 3.020033342665389,
          "pitch": -0.02293111542297055,
          "rotation": 0,
          "target": "15-1st-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-1st-floor-stairs-1",
      "name": "1st Floor Stairs 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.018756302439712,
        "pitch": 0.329729452172284,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.912413541982586,
          "pitch": 0.523181237128389,
          "rotation": 5.497787143782138,
          "target": "15-1st-floor-stairs"
        },
        {
          "yaw": 3.006594381802448,
          "pitch": 0.022971705354525085,
          "rotation": 0,
          "target": "16-2nd-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-1st-floor-stairs",
      "name": "1st Floor Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.056439351693875,
        "pitch": 0.23909363571233833,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.875808703025637,
          "pitch": 0.5739774090937324,
          "rotation": 0,
          "target": "13-lobby-stairs-2"
        },
        {
          "yaw": 3.026223113458073,
          "pitch": -0.029294779025317297,
          "rotation": 0,
          "target": "14-1st-floor-stairs-1"
        },
        {
          "yaw": -1.1597528639483112,
          "pitch": 0.3813738687640722,
          "rotation": 7.0685834705770345,
          "target": "23-1st-floor-lobby"
        },
        {
          "yaw": -1.3182909754545342,
          "pitch": 0.23218774021154864,
          "rotation": 0,
          "target": "24-bord-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-2nd-floor-stairs",
      "name": "2nd Floor Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.0322523342671523,
        "pitch": 0.33398667757878897,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.0809026684658445,
          "pitch": -0.05881313532502119,
          "rotation": 0,
          "target": "17-2nd-floor-stairs-1"
        },
        {
          "yaw": -2.8319129803239615,
          "pitch": 0.4248243225879982,
          "rotation": 5.497787143782138,
          "target": "14-1st-floor-stairs-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-2nd-floor-stairs-1",
      "name": "2nd Floor Stairs 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.02387032457501448,
        "pitch": 0.41876668388366767,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.18792159487217575,
          "pitch": 0.5757664394384285,
          "rotation": 5.497787143782138,
          "target": "16-2nd-floor-stairs"
        },
        {
          "yaw": -0.22400340423098797,
          "pitch": 0.031092454720184293,
          "rotation": 0,
          "target": "18-3rd-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-3rd-floor-stairs",
      "name": "3rd Floor Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.18699956271367668,
        "pitch": 0.256970361793428,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.23446165845053812,
          "pitch": 0.6796372319249215,
          "rotation": 18.06415775814132,
          "target": "17-2nd-floor-stairs-1"
        },
        {
          "yaw": -0.3817512676086263,
          "pitch": -0.003018595924938694,
          "rotation": 0,
          "target": "19-3rd-floor-stairs-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-3rd-floor-stairs-1",
      "name": "3rd Floor Stairs 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.1050759447629126,
        "pitch": 0.27986871086412535,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.4041631926037539,
          "pitch": 0.5498033171497578,
          "rotation": 5.497787143782138,
          "target": "18-3rd-floor-stairs"
        },
        {
          "yaw": -0.14436472750557883,
          "pitch": -0.04410333211399475,
          "rotation": 0,
          "target": "20-roof-1-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-roof-1-stairs",
      "name": "Roof 1 Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.369875421545867,
        "pitch": 0.16653010005330415,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.956644956300428,
          "pitch": 0.5749903600472521,
          "rotation": 5.497787143782138,
          "target": "19-3rd-floor-stairs-1"
        },
        {
          "yaw": 2.9278518210157616,
          "pitch": -0.10961812679244076,
          "rotation": 0,
          "target": "21-roof-1-stairs-1"
        },
        {
          "yaw": -1.5347170120549833,
          "pitch": 0.2133207233846477,
          "rotation": 0,
          "target": "57-roof-1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-roof-1-stairs-1",
      "name": "Roof 1 Stairs 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.8898853056831086,
        "pitch": 0.15293835613889684,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.7894901112543486,
          "pitch": 0.6054582295489368,
          "rotation": 5.497787143782138,
          "target": "20-roof-1-stairs"
        },
        {
          "yaw": 3.124264445958109,
          "pitch": -0.13912161255468192,
          "rotation": 0,
          "target": "22-roof-2-gym"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-roof-2-gym",
      "name": "Roof 2 Gym",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.931718074724433,
        "pitch": -0.04584872478713464,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.6824581816359441,
          "pitch": 0.6142745196231445,
          "rotation": 5.497787143782138,
          "target": "21-roof-1-stairs-1"
        },
        {
          "yaw": 0.19677711060926129,
          "pitch": 0.10192341708261665,
          "rotation": 0,
          "target": "62-roof-2-start"
        },
        {
          "yaw": -3.0522349071103996,
          "pitch": 0.35726056853155796,
          "rotation": 0,
          "target": "63-gym-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-1st-floor-lobby",
      "name": "1st Floor Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.050639716247232514,
        "pitch": 0.1824898961191117,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.0413920927129325,
          "pitch": 0.2268416561585127,
          "rotation": 0.7853981633974483,
          "target": "24-bord-room-1"
        },
        {
          "yaw": -1.163895069087891,
          "pitch": 0.2911339628231193,
          "rotation": 0.7853981633974483,
          "target": "14-1st-floor-stairs-1"
        },
        {
          "yaw": -0.06567778753274389,
          "pitch": 0.21536964859691743,
          "rotation": 4.71238898038469,
          "target": "23-1st-floor-lobby"
        },
        {
          "yaw": 0.049431948066960274,
          "pitch": 0.08856597968846458,
          "rotation": 0,
          "target": "26-1st-floor-rooms-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bord-room-1",
      "name": "Bord Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19793068863307717,
          "pitch": 0.19669150061561425,
          "rotation": 4.71238898038469,
          "target": "25-bordroom-2"
        },
        {
          "yaw": -3.0459940376292955,
          "pitch": 0.368630297222472,
          "rotation": 0,
          "target": "23-1st-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bordroom-2",
      "name": "BordRoom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.3116673967476125,
        "pitch": 0.0991412450141631,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.3665524767596757,
          "pitch": 0.1206947926124009,
          "rotation": 0,
          "target": "24-bord-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-1st-floor-rooms-1",
      "name": "1st Floor rooms 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.8545522035982867,
        "pitch": 0.1728411362985014,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.7372065985820422,
          "pitch": 0.23555243921136793,
          "rotation": 1.5707963267948966,
          "target": "6-1st-floor-lift"
        },
        {
          "yaw": 1.6658604788921707,
          "pitch": 0.03353225406616289,
          "rotation": 0,
          "target": "23-1st-floor-lobby"
        },
        {
          "yaw": 0.9002433465519566,
          "pitch": 0.25751987212693095,
          "rotation": 0,
          "target": "42-deluxe-twin"
        },
        {
          "yaw": -0.7172056782333733,
          "pitch": 0.31897921157963616,
          "rotation": 0,
          "target": "39-deluxe-king"
        },
        {
          "yaw": 2.195892216579862,
          "pitch": 0.23396669674971093,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": -2.2921914500199847,
          "pitch": 0.2998220481908085,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": -1.5285993140778587,
          "pitch": 0.18331788206671185,
          "rotation": 0,
          "target": "27-1st-floor-rooms-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-1st-floor-rooms-2",
      "name": "1st Floor Rooms 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6808801711462884,
          "pitch": 0.18256465072204264,
          "rotation": 0,
          "target": "28-1st-floor-rooms-3"
        },
        {
          "yaw": -1.478290195737241,
          "pitch": 0.1989564072479233,
          "rotation": 0,
          "target": "26-1st-floor-rooms-1"
        },
        {
          "yaw": -0.7180860809390701,
          "pitch": 0.3202152583563098,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": 1.0515637493357097,
          "pitch": 0.28191905229101444,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": -2.2720926863638145,
          "pitch": 0.3167323352278313,
          "rotation": 0,
          "target": "42-deluxe-twin"
        },
        {
          "yaw": 2.3362287984200805,
          "pitch": 0.2728321059779919,
          "rotation": 0,
          "target": "42-deluxe-twin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-1st-floor-rooms-3",
      "name": "1st Floor Rooms 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -1.6581899999815022,
        "pitch": 0.12743088131620617,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.6701406061782649,
          "pitch": 0.1745145629387821,
          "rotation": 0,
          "target": "27-1st-floor-rooms-2"
        },
        {
          "yaw": -2.4577284638497776,
          "pitch": 0.3103061928114421,
          "rotation": 0,
          "target": "42-deluxe-twin"
        },
        {
          "yaw": 2.1639809388693685,
          "pitch": 0.2813503707638816,
          "rotation": 0,
          "target": "51-executive-premium"
        },
        {
          "yaw": 0.7982374943370658,
          "pitch": 0.3225348234765093,
          "rotation": 0,
          "target": "45-execuitive-king"
        },
        {
          "yaw": -1.019130542812828,
          "pitch": 0.29436858782980124,
          "rotation": 0,
          "target": "54-standard-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-2nd-floor",
      "name": "2nd Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.810742124910245,
          "pitch": 0.31013026300849766,
          "rotation": 5.497787143782138,
          "target": "7-2nd-floor-lift"
        },
        {
          "yaw": 3.06414787131392,
          "pitch": 0.147078515696073,
          "rotation": 0,
          "target": "31-2nd-floor-rooms-1"
        },
        {
          "yaw": -0.035035386581741434,
          "pitch": 0.3068762855732423,
          "rotation": 0,
          "target": "30-2nd-floor-rooms"
        },
        {
          "yaw": 1.5232759189682064,
          "pitch": 0.2680040863795554,
          "rotation": 1.5707963267948966,
          "target": "16-2nd-floor-stairs"
        },
        {
          "yaw": -0.7852214096684733,
          "pitch": 0.3396627227622879,
          "rotation": 0,
          "target": "42-deluxe-twin"
        },
        {
          "yaw": -2.746356973001731,
          "pitch": 0.23256895427464386,
          "rotation": 0,
          "target": "45-execuitive-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-2nd-floor-rooms",
      "name": "2nd Floor Rooms",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.496307460921809,
        "pitch": 0.2074776597182577,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.7133971832279897,
          "pitch": 0.28333074869722275,
          "rotation": 4.71238898038469,
          "target": "29-2nd-floor"
        },
        {
          "yaw": -1.6056000825901222,
          "pitch": 0.16096859449406864,
          "rotation": 0,
          "target": "7-2nd-floor-lift"
        },
        {
          "yaw": 2.5476741964807967,
          "pitch": 0.37298948713769065,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": 0.07206738627532516,
          "pitch": 0.47505450509298264,
          "rotation": 0,
          "target": "42-deluxe-twin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-2nd-floor-rooms-1",
      "name": "2nd Floor Rooms 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.8841109646180882,
        "pitch": 0.1742746822381811,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.650921797190426,
          "pitch": 0.25594330983829394,
          "rotation": 1.5707963267948966,
          "target": "7-2nd-floor-lift"
        },
        {
          "yaw": 1.50488696935962,
          "pitch": 0.09113975045716316,
          "rotation": 0,
          "target": "29-2nd-floor"
        },
        {
          "yaw": -1.636291809166618,
          "pitch": 0.18024322790893343,
          "rotation": 0,
          "target": "32-2nd-floor-rooms-2"
        },
        {
          "yaw": -0.9861163052664459,
          "pitch": 0.30452760702475956,
          "rotation": 0,
          "target": "42-deluxe-twin"
        },
        {
          "yaw": 0.8519322327686751,
          "pitch": 0.3165434998566994,
          "rotation": 0,
          "target": "42-deluxe-twin"
        },
        {
          "yaw": -2.3288982656614223,
          "pitch": 0.2922398179119323,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": 2.1862888448393427,
          "pitch": 0.31605563402132475,
          "rotation": 0,
          "target": "54-standard-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-2nd-floor-rooms-2",
      "name": "2nd Floor Rooms 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.4685265986810112,
        "pitch": -0.017809827054971805,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.6964520620826598,
          "pitch": 0.20751861765813473,
          "rotation": 0,
          "target": "33-2nd-floor-rooms-3"
        },
        {
          "yaw": 1.4434668794703596,
          "pitch": 0.17948591057101382,
          "rotation": 0,
          "target": "31-2nd-floor-rooms-1"
        },
        {
          "yaw": -1.0134287377514042,
          "pitch": 0.2981101338788559,
          "rotation": 0,
          "target": "42-deluxe-twin"
        },
        {
          "yaw": 0.777772048821344,
          "pitch": 0.31165710291634063,
          "rotation": 0,
          "target": "42-deluxe-twin"
        },
        {
          "yaw": -2.4557271749595966,
          "pitch": 0.30665919004333375,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": 2.094741825079244,
          "pitch": 0.30418675013397056,
          "rotation": 0,
          "target": "54-standard-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-2nd-floor-rooms-3",
      "name": "2nd Floor Rooms 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.2437667021717544,
        "pitch": -0.0010586687578939546,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.2673231472639959,
          "pitch": 0.19657735434828183,
          "rotation": 0,
          "target": "32-2nd-floor-rooms-2"
        },
        {
          "yaw": -1.1772463548854013,
          "pitch": 0.3158912867814294,
          "rotation": 0,
          "target": "51-executive-premium"
        },
        {
          "yaw": 0.5715751256166914,
          "pitch": 0.32534896937794855,
          "rotation": 0,
          "target": "42-deluxe-twin"
        },
        {
          "yaw": -2.583927043545563,
          "pitch": 0.30648841358864765,
          "rotation": 0,
          "target": "45-execuitive-king"
        },
        {
          "yaw": 1.9063307729959496,
          "pitch": 0.3033206709804279,
          "rotation": 0,
          "target": "54-standard-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-3rd-floor",
      "name": "3rd Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.8175113888792751,
        "pitch": 0.18344751121821545,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.817088161038491,
          "pitch": 0.15061754348875311,
          "rotation": 0,
          "target": "36-3rd-floor-rooms-1"
        },
        {
          "yaw": 1.4910658429128958,
          "pitch": 0.37602980782191153,
          "rotation": 4.71238898038469,
          "target": "8-3rd-floor-lift"
        },
        {
          "yaw": -1.3497588177592394,
          "pitch": 0.24265570352259758,
          "rotation": 0,
          "target": "35-3rd-floor-rooms"
        },
        {
          "yaw": -0.06640546615250287,
          "pitch": 0.3399951623639552,
          "rotation": 0.7853981633974483,
          "target": "18-3rd-floor-stairs"
        },
        {
          "yaw": 2.627422103383056,
          "pitch": 0.31436570919926865,
          "rotation": 0,
          "target": "48-executive-premium-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-3rd-floor-rooms",
      "name": "3rd Floor Rooms",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.6795613785773442,
        "pitch": 0.1246687893849483,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.5157805535696545,
          "pitch": 0.0386383035118989,
          "rotation": 0,
          "target": "36-3rd-floor-rooms-1"
        },
        {
          "yaw": 1.372055401206092,
          "pitch": 0.17813016075838561,
          "rotation": 10.995574287564278,
          "target": "8-3rd-floor-lift"
        },
        {
          "yaw": 1.2479180586747685,
          "pitch": 0.39483170789868893,
          "rotation": 4.71238898038469,
          "target": "34-3rd-floor"
        },
        {
          "yaw": -2.2555852799564953,
          "pitch": 0.30136732266960387,
          "rotation": 0,
          "target": "39-deluxe-king"
        },
        {
          "yaw": 2.1669983661074603,
          "pitch": 0.3073230021500919,
          "rotation": 0,
          "target": "39-deluxe-king"
        },
        {
          "yaw": -1.1364138010784135,
          "pitch": 0.22855336169458695,
          "rotation": 0,
          "target": "54-standard-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-3rd-floor-rooms-1",
      "name": "3rd Floor rooms 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -1.4458457948393377,
        "pitch": 0.19913138878756875,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.3476992219603403,
          "pitch": 0.19022274456317412,
          "rotation": 0,
          "target": "37-3rd-floor-rooms-2"
        },
        {
          "yaw": -1.6220990151910577,
          "pitch": 0.27162375275948136,
          "rotation": 1.5707963267948966,
          "target": "8-3rd-floor-lift"
        },
        {
          "yaw": -1.7604357961890926,
          "pitch": 0.146300423602872,
          "rotation": 0,
          "target": "35-3rd-floor-rooms"
        },
        {
          "yaw": -1.0615450691594823,
          "pitch": 0.3031918194478962,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": 0.6747926695851767,
          "pitch": 0.27786256987248414,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": -2.4434353067571557,
          "pitch": 0.33085543268026996,
          "rotation": 0,
          "target": "39-deluxe-king"
        },
        {
          "yaw": 1.963647602648395,
          "pitch": 0.32447204474791036,
          "rotation": 0,
          "target": "39-deluxe-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-3rd-floor-rooms-2",
      "name": "3rd Floor Rooms 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.8795905357272993,
        "pitch": 0.04918904615189845,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.5971315012481444,
          "pitch": 0.17103101769222206,
          "rotation": 0,
          "target": "38-3rd-floor-rooms-3"
        },
        {
          "yaw": -1.5345761066102277,
          "pitch": 0.19042881459304084,
          "rotation": 0,
          "target": "36-3rd-floor-rooms-1"
        },
        {
          "yaw": -0.8703256314238565,
          "pitch": 0.2879258382384471,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": 0.9379992970511317,
          "pitch": 0.3049292231085303,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": -2.2091711010628092,
          "pitch": 0.3060005955195688,
          "rotation": 0,
          "target": "39-deluxe-king"
        },
        {
          "yaw": 2.266984943512103,
          "pitch": 0.28149249860578074,
          "rotation": 0,
          "target": "39-deluxe-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-3rd-floor-rooms-3",
      "name": "3rd Floor Rooms 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -1.6278658617827872,
        "pitch": 0.03260426005916983,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.5431220826579786,
          "pitch": 0.18004153960448122,
          "rotation": 0,
          "target": "37-3rd-floor-rooms-2"
        },
        {
          "yaw": -2.193144614422362,
          "pitch": 0.300668809953617,
          "rotation": 0,
          "target": "39-deluxe-king"
        },
        {
          "yaw": 2.2298248622229178,
          "pitch": 0.2831486967863359,
          "rotation": 0,
          "target": "51-executive-premium"
        },
        {
          "yaw": 0.907182116956669,
          "pitch": 0.2947637791141311,
          "rotation": 0,
          "target": "54-standard-king"
        },
        {
          "yaw": -0.8608188864228126,
          "pitch": 0.3032898738844416,
          "rotation": 0,
          "target": "54-standard-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-deluxe-king",
      "name": "Deluxe King",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.0933798411622604,
        "pitch": 0.1528401375361561,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.4786673478790462,
          "pitch": 0.3946427125457532,
          "rotation": 0,
          "target": "40-deluxe-room-window"
        },
        {
          "yaw": 1.3930295118191918,
          "pitch": 0.32368906638266637,
          "rotation": 0,
          "target": "32-2nd-floor-rooms-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-deluxe-room-window",
      "name": "Deluxe Room Window",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.015171409396789,
        "pitch": 0.2696916668326992,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.6636666302279703,
          "pitch": 0.1808622162454121,
          "rotation": 0,
          "target": "41-deluxe-king-washroom"
        },
        {
          "yaw": 1.0285114889446234,
          "pitch": 0.4171527952786036,
          "rotation": 0.7853981633974483,
          "target": "39-deluxe-king"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-deluxe-king-washroom",
      "name": "Deluxe King Washroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "42-deluxe-twin",
      "name": "Deluxe Twin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.569545166410382,
        "pitch": 0.1817266611389563,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.7389761042824086,
          "pitch": 0.34775360934445665,
          "rotation": 5.497787143782138,
          "target": "43-deluxe-twin-window"
        },
        {
          "yaw": -1.8571326676146036,
          "pitch": 0.28975977852322465,
          "rotation": 0,
          "target": "30-2nd-floor-rooms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-deluxe-twin-window",
      "name": "Deluxe twin window",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.587889073910725,
        "pitch": 0.1704654875263305,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.8908976069516665,
          "pitch": 0.16049159234323085,
          "rotation": 0,
          "target": "44-deluxe-twin-washroom"
        },
        {
          "yaw": 2.316927646886474,
          "pitch": 0.30429630347946457,
          "rotation": 5.497787143782138,
          "target": "42-deluxe-twin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-deluxe-twin-washroom",
      "name": "Deluxe twin Washroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.5430668423191323,
        "pitch": 0.18586387759252432,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.40357638885485514,
          "pitch": 0.3828994634805003,
          "rotation": 0,
          "target": "43-deluxe-twin-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-execuitive-king",
      "name": "Execuitive King",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.037308241367466,
        "pitch": 0.09328957028804652,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.402649744840728,
          "pitch": 0.31700790865413353,
          "rotation": 0.7853981633974483,
          "target": "46-execuitive-king-window"
        },
        {
          "yaw": 0.9920969913145683,
          "pitch": 0.16810475165324767,
          "rotation": 0,
          "target": "38-3rd-floor-rooms-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-execuitive-king-window",
      "name": "Execuitive King Window",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.6533023919510494,
        "pitch": 0.05125695046345058,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.010030531460627,
          "pitch": 0.34769514823544156,
          "rotation": 5.497787143782138,
          "target": "45-execuitive-king"
        },
        {
          "yaw": 3.1004461032316,
          "pitch": 0.4630127861285622,
          "rotation": 0,
          "target": "47-execuitive-king-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-execuitive-king-washroom",
      "name": "Execuitive King Washroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.8165464506295113,
        "pitch": 0.3689774359634548,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.9800036907142484,
          "pitch": 0.46886904765960224,
          "rotation": 0,
          "target": "46-execuitive-king-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-executive-premium-2",
      "name": "Executive Premium 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.8364434987923284,
        "pitch": 0.090250058131641,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.3996809909368793,
          "pitch": 0.2910290836718481,
          "rotation": 5.497787143782138,
          "target": "49-execuitive-premium-window-2"
        },
        {
          "yaw": -1.8606712191114188,
          "pitch": 0.157283234386,
          "rotation": 0,
          "target": "28-1st-floor-rooms-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-execuitive-premium-window-2",
      "name": "Execuitive Premium Window 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.2387636607976376,
        "pitch": 0.17442022257740675,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.0799784283660543,
          "pitch": 0.27739464580338513,
          "rotation": 0,
          "target": "48-executive-premium-2"
        },
        {
          "yaw": 3.05544256061253,
          "pitch": 0.26499100801088815,
          "rotation": 0,
          "target": "50-execuitive-premium-washroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-execuitive-premium-washroom-2",
      "name": "Execuitive Premium Washroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.7212832543953951,
        "pitch": 0.30276705993482267,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.3360672388069883,
          "pitch": 0.5342644843937485,
          "rotation": 1.5707963267948966,
          "target": "49-execuitive-premium-window-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-executive-premium",
      "name": "Executive Premium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 3.0002927806662267,
        "pitch": 0.3759193321311596,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.1709633301102444,
          "pitch": 0.36398114824544336,
          "rotation": 5.497787143782138,
          "target": "52-executive-window"
        },
        {
          "yaw": -2.2722046796409696,
          "pitch": 0.11809100314035881,
          "rotation": 0,
          "target": "33-2nd-floor-rooms-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-executive-window",
      "name": "Executive window",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.6479457514229985,
        "pitch": 0.08526564723811347,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.9686751934745157,
          "pitch": 0.3066025699517141,
          "rotation": 0,
          "target": "53-executive-washroom"
        },
        {
          "yaw": 1.8059366147438078,
          "pitch": 0.2551505002550982,
          "rotation": 5.497787143782138,
          "target": "51-executive-premium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-executive-washroom",
      "name": "Executive washroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.1074632071805244,
        "pitch": 0.13791649325342092,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.121304500948945,
          "pitch": 0.14888665703038484,
          "rotation": 0,
          "target": "52-executive-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-standard-king",
      "name": "Standard King",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.926001546049381,
        "pitch": 0.3079015234477609,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.3634239302117255,
          "pitch": 0.47710659415385237,
          "rotation": 0,
          "target": "55-standard-king-window"
        },
        {
          "yaw": -1.5545734369333921,
          "pitch": 0.3733943362228196,
          "rotation": 0,
          "target": "27-1st-floor-rooms-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-standard-king-window",
      "name": "Standard King Window",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.5993128613821694,
        "pitch": 0.06156215385542119,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.128584416181834,
          "pitch": 0.5032532651953954,
          "rotation": 4.71238898038469,
          "target": "54-standard-king"
        },
        {
          "yaw": 1.6231595680160709,
          "pitch": 0.232370672289278,
          "rotation": 0,
          "target": "56-standard-king-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-standard-king-washroom",
      "name": "Standard King Washroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.25664882799501854,
        "pitch": 0.3538495982980798,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.888763307990061,
          "pitch": 0.20381648968754362,
          "rotation": 0,
          "target": "55-standard-king-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-roof-1-entrance",
      "name": "Roof 1 Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 3.10333012387337,
        "pitch": 0.043252437133546096,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.8861330667819356,
          "pitch": 0.41761206721765376,
          "rotation": 0,
          "target": "58-roof-1-bar-and-bbq"
        },
        {
          "yaw": -0.0766899206932603,
          "pitch": 0.21080524845087467,
          "rotation": 0.7853981633974483,
          "target": "20-roof-1-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-roof-1-bar-and-bbq",
      "name": "Roof 1 Bar and BBQ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.640959907024353,
        "pitch": -0.03538798122621856,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.071921336547856,
          "pitch": 0.26263637786944827,
          "rotation": 0,
          "target": "59-roof-1"
        },
        {
          "yaw": 1.4306807316222407,
          "pitch": 0.26525742849277023,
          "rotation": 0,
          "target": "57-roof-1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-roof-1",
      "name": "Roof 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.515876479138985,
          "pitch": 0.1581075208215701,
          "rotation": 0,
          "target": "60-roof-1-end"
        },
        {
          "yaw": -0.8337059395166619,
          "pitch": 0.13778779076532466,
          "rotation": 0.7853981633974483,
          "target": "61-roof-1-view"
        },
        {
          "yaw": 1.59416476768099,
          "pitch": 0.2164324360407086,
          "rotation": 0,
          "target": "58-roof-1-bar-and-bbq"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-roof-1-end",
      "name": "Roof 1 End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.181563524641371,
        "pitch": -0.09063935810527113,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.5780749334563922,
          "pitch": 0.16367925701883834,
          "rotation": 0,
          "target": "59-roof-1"
        },
        {
          "yaw": 0.2310096384831155,
          "pitch": 0.1414389639011251,
          "rotation": 0,
          "target": "61-roof-1-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-roof-1-view",
      "name": "Roof 1 View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.9852281779608898,
        "pitch": -0.08213234377275569,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.5759305159173262,
          "pitch": 0.29395255024585865,
          "rotation": 10.995574287564278,
          "target": "60-roof-1-end"
        },
        {
          "yaw": 2.261854023426837,
          "pitch": 0.0980985441396598,
          "rotation": 5.497787143782138,
          "target": "59-roof-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-roof-2-start",
      "name": "Roof 2 Start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.1484329008911125,
        "pitch": 0.06625090876113404,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.5915713944851575,
          "pitch": 0.44638870722959645,
          "rotation": 0,
          "target": "22-roof-2-gym"
        },
        {
          "yaw": 2.0555057955482594,
          "pitch": 0.21348039109008177,
          "rotation": 0,
          "target": "65-roof-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-gym-1",
      "name": "Gym 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.1059688423351695,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.5736361013276543,
          "pitch": 0.283751994447508,
          "rotation": 0.7853981633974483,
          "target": "22-roof-2-gym"
        },
        {
          "yaw": 0.25349594573779655,
          "pitch": 0.12708033864823243,
          "rotation": 0,
          "target": "22-roof-2-gym"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-gym-2",
      "name": "Gym 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.822348409299245,
        "pitch": 0.08422053753261594,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.0015086571907545,
          "pitch": 0.2555859681665016,
          "rotation": 0,
          "target": "63-gym-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-roof-2",
      "name": "Roof 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -1.4152962902589117,
        "pitch": -0.05824863292525251,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.4497490352008082,
          "pitch": 0.03739387165051866,
          "rotation": 0.7853981633974483,
          "target": "66-roof-2-view"
        },
        {
          "yaw": 2.310997682414432,
          "pitch": 0.23086846516950033,
          "rotation": 0,
          "target": "62-roof-2-start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-roof-2-view",
      "name": "Roof 2 View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.11227995699441,
        "pitch": -0.07062530152876967,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.4815689063890733,
          "pitch": 0.4237349874133116,
          "rotation": 5.497787143782138,
          "target": "65-roof-2"
        },
        {
          "yaw": 0.9244606110033118,
          "pitch": 0.09361300292603758,
          "rotation": 4.71238898038469,
          "target": "62-roof-2-start"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
