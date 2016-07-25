var React = require('react');
var {StyleSheet, PixelRatio, Text, TouchableOpacity} = require('react-native');

module.exports = {

    LeftButton: function (route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    &lt;Back
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: function (route, navigator, index, navState) {
        console.log('Right Button function for route=='+JSON.stringify(route));
        if(!route.RightActions || route.RightActions.length==0)return null;
        else {
            return <TouchableOpacity
                onPress={() => navigator.push(route.RightActions[0].route)}
                style={styles.navBarRightButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    {route.RightActions[0].name}
                </Text>
            </TouchableOpacity>;
        }
    },

    Title: function (route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.Title}
            </Text>
        );
    },

};


var styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'white',

        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 1 / PixelRatio.get(),
            width: 1 / PixelRatio.get()
        },
    },
    navBarTitleText: {
        color: '#373e4d',
        fontWeight: '500',
        marginVertical: 9,
    },
    navBarText: {
        fontSize: 16,
        marginVertical: 10,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        color: '#5890ff',
    }
});
