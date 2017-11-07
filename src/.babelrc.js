module.exports = {

    "sourceMaps": true,
    "plugins": [
        [ "@babel/transform-runtime" ]
    ],
    "presets": [

        [ "@babel/env", {

            "exclude": [
                "transform-regenerator"
            ],
            "loose": true,
            "targets": {
                "node": 4
            },
            "useBuiltIns": "usage"

        } ],
        "@babel/stage-0"

    ]

};
