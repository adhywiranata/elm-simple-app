import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "marginTop": 1,
        "marginRight": "auto",
        "marginBottom": 1,
        "marginLeft": "auto",
        "maxWidth": 600
    },
    "blockquote": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "jumbotron": {
        "marginTop": 2,
        "marginRight": "auto",
        "marginBottom": 2,
        "marginLeft": "auto",
        "maxWidth": 400
    },
    "jumbotron h2": {
        "marginTop": 0
    },
    "jumbotron help-block": {
        "fontSize": 14
    }
});