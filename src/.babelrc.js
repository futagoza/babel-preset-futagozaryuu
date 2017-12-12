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
                "node": 6
            },
            "useBuiltIns": "usage"

        } ],
        "@babel/stage-0"

    ],

    shouldPrintComment( comment ) {

        return comment.trim().startsWith( "eslint", 0 ) === false;

    }

};
