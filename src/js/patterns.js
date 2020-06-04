// Pattern sizes must be divisors of horizontal and vertical clock numbers.

const PATTERNS = {
    "templates": [
        {
            "height": 2,
            "layout": ["AAAAAAAAA", "AAAAAAAAA", "AAAAAAAAA", "AAAAAAAAA"]
        },
        {
            "height": 2,
            "layout": ["BBBBBBBBB", "BBBBBBBBB", "BBBBBBBBB", "BBBBBBBBB"]
        },
        {
            "height": 2,
            "layout": ["ABABABABA", "BABABABAB", "ABABABABA", "BABABABAB"]
        },
        {
            "height": 2,
            "layout": ["CCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCC"]
        },
        {
            "height": 2,
            "layout": ["DDDDDDDDDDDDDDDDDD", "DDDDDDDDDDDDDDDDDD", "DDDDDDDDDDDDDDDDDD", "DDDDDDDDDDDDDDDDDD"]
        },
        {
            "height": 4,
            "layout": ["EEEEEE", "EEEEEE"]
        },
        {
            "height": 4,
            "layout": ["FFF", "FFF"]
        },
        {
            "height": 2,
            "layout": ["ACADACADACAD", "DACADACADACA", "ACADACADACAD", "DACADACADACA"]
        }
    ],
    "A": {
        "width": 2,
        "height": 2,
        "hhDirection": "forward",
        "mmDirection": "backward",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}
        ]
    },
    "B": {
        "width": 2,
        "height": 2,
        "hhDirection": "forward",
        "mmDirection": "backward",
        "shape": [
            {"hh": 20, "mm": 25}, {"hh": 35, "mm": 40},
            {"hh": 5,  "mm": 10}, {"hh": 50, "mm": 55}
        ]
    },
    "C": {
        "width": 1,
        "height": 2,
        "hhDirection": "forward",
        "mmDirection": "backward",
        "shape": [
            {"hh": 15, "mm": 45},
            {"hh": 0,  "mm": 30}
        ]
    },
    "D": {
        "width": 1,
        "height": 2,
        "hhDirection": "backward",
        "mmDirection": "forward",
        "shape": [
            {"hh": 0,  "mm": 30},
            {"hh": 15, "mm": 45}
        ]
    },
    "E": {
        "width": 3,
        "height": 4,
        "hhDirection": "forward",
        "mmDirection": "backward",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 7,  "mm": 37}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 7,  "mm": 37}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}
        ]
    },
    "F": {
        "width": 6,
        "height": 4,
        "hhDirection": "forward",
        "mmDirection": "backward",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 7,  "mm": 37}, {"hh": 53, "mm": 23}, {"hh": 7,  "mm": 37}, {"hh": 53, "mm": 23}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 7,  "mm": 37}, {"hh": 53, "mm": 23}, {"hh": 7,  "mm": 37}, {"hh": 53, "mm": 23}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}
        ]
    }
}
