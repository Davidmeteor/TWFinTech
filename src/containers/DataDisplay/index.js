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
import { VictoryBar } from "victory-native";

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
    return (
      <VictoryBar />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDisplay)
