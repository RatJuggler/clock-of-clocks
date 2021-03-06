const DIGITS = {
    ":": {
        "width": 2,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 15}, {"hh": 45, "mm": 45},
            {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45},
            {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45},
            {"hh": 15, "mm": 15}, {"hh": 45, "mm": 45}
        ]
    },
    "0": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}
        ]
    },
    "1": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 0,  "mm": 0}, {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 0}, {"hh": 0,  "mm": 15}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0}, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0}, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0}, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0}, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}
        ]
    },
    "2": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}
        ]
    },
    "3": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}
        ]
    },
    "4": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45}, {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}
        ]
    },
    "5": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}
        ]
    },
    "6": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}
        ]
    },
    "7": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 0 }, {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}
        ]
    },
    "8": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}
        ]
    },
    "9": {
        "width": 4,
        "height": 6,
        "hhDirection": "clockwise",
        "mmDirection": "clockwise",
        "shape": [
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45},
            {"hh": 0,  "mm": 30}, {"hh": 15, "mm": 30}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 30}, {"hh": 0,  "mm": 15}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 30, "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 15, "mm": 30}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}, {"hh": 0,  "mm": 30},
            {"hh": 0,  "mm": 15}, {"hh": 15, "mm": 45}, {"hh": 15, "mm": 45}, {"hh": 0,  "mm": 45}
        ]
    }
}
