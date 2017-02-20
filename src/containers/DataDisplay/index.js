/**
 * # DataDisplay.js
 *  The container to display the data
 */
'use strict'
import _ from 'lodash';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../reducers/auth/authActions'
import * as dataActions from '../../reducers/data/dataActions'
import { Map } from 'immutable'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import I18n from '../../lib/i18n'
import { Bar } from 'react-native-pathjs-charts'

const actions = [
  authActions,
  dataActions,
]

function mapStateToProps(state) {
  //console.log(state.global)
  const findata_MMF = _.map(state.global.findata.MMF)
  const findata_OnshoreAUM = _.map(state.global.findata.OnshoreAUM)
  const findata_pie = _.map(state.global.findata.pie)
  console.log(findata_pie)
  /*
  console.log(findata_MMF)
  console.log(findata_MMF[0].time)
  console.log(findata_MMF[1].value)
  */
  return {
    auth: state.auth,
    global: {
      currentUser: state.global.currentUser,     
    },
    /*    
    findata_MMF,
    findata_OnshoreAUM,
    findata_pie,
    */
  }
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject()

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  }
}

class DataDisplay extends React.Component {

componentWillMount() {
    console.log(this.props.global)
  }

  render() {
    let data = [
      [{
        "v": 49,
        "name": "apple"
      }, {
        "v": 42,
        "name": "apple"
      }],
      [{
        "v": 69,
        "name": "banana"
      }, {
        "v": 62,
        "name": "banana"
      }],
      [{
        "v": 29,
        "name": "grape"
      }, {
        "v": 15,
        "name": "grape"
      }]
    ]

    let options = {
      width: 300,
      height: 300,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#2980B9',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }
    return (
      <View style={styles.container}>
        
        <Text>username:</Text>
        <Text>{this.props.global.currentUser.username}</Text>
        <Text>email:</Text>
        <Text>{this.props.global.currentUser.email}</Text>
        <Text>uid:</Text>
        <Text>{this.props.global.currentUser.uid}</Text>
        <Text>avatar:</Text>
        <Text>{this.props.global.currentUser.avatar}</Text>
        <TouchableOpacity
          onPress={() => this.props.actions.logout()}
          style={[styles.btn, styles.normalBtn]}
          underlayColor="transparent"
          activeOpacity={0.7}
        >
          <Text style={[styles.btnText, styles.normalBtnText]}>{I18n.t('Setting.logout')}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDisplay)
