module.exports = {

    "sourceMaps": true,
    "plugins": [
        [ "transform-runtime" ]
    ],
    "presets": [

        [ "env", {

            "exclude": [
                "transform-regenerator",
                "transform-async-to-generator"
            ],
            "loose": true,
            "targets": {
                "node": 4
            },
            "useBuiltIns": "usage"

        } ],
        "stage-0"

    ]

};
