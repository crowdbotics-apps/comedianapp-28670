import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f0a/8e2a/62935158a808e25731da2c176f70a5fa"
        }}
        style={styles.ImageBackground_0_93}
      />
      <View style={styles.View_0_707} />
      <View style={styles.View_0_715}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c9a/eb5a/3bfc4e009842f9671611ed0ddeda9053"
          }}
          style={styles.ImageBackground_0_717}
        />
      </View>
      <View style={styles.View_0_706}>
        <View style={styles.View_I0_706_0_124}>
          <Text style={styles.Text_I0_706_0_124}>Ridhwan Nordin</Text>
        </View>
        <View style={styles.View_I0_706_0_126}>
          <Text style={styles.Text_I0_706_0_126}>@ridzjcob</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6314/7201/a04470fbee08e1a76200f530938c8c1d"
          }}
          style={styles.ImageBackground_I0_706_0_127}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_0_93: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_707: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_715: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.73333333333333%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_0_717: {
    width: wp("2.8552286783854166%"),
    height: hp("1.4627197401119711%"),
    top: hp("1.4544502633516911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.839062499999997%")
  },
  View_0_706: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.284153005464481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_706_0_124: {
    flexGrow: 1,
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_706_0_124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_706_0_126: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("2.049180327868851%"),
    justifyContent: "center"
  },
  Text_I0_706_0_126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_706_0_127: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
