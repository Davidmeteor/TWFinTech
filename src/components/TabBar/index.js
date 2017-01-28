// https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/DefaultTabBar.js
'use strict'
import React, { PropTypes } from 'react'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import styles from './styles'
import MainStyle from '../../styles'
import { View, Text } from 'react-native'
import CustomTabBar from './customTabBar'

const TabBar = ({
  tabBarPosition,
  activeTextColor,
  underline,
  tabStyle,
  style,
  textStyle,
  onChangeTab,
  initialPage,
  tabNames,
  tabIconNames,
  children,
}) => (
  <ScrollableTabView
    tabBarPosition = {tabBarPosition}
    onChangeTab={onChangeTab}
    initialPage={initialPage}
    renderTabBar={() =>
      <CustomTabBar
        tabNames={tabNames} 
        tabIconNames={tabIconNames}
      />}
  >
    {children}
  </ScrollableTabView>
)

TabBar.propTypes = {
  tabBarPosition: PropTypes.string,
  activeTextColor: PropTypes.string,
  underline: View.propTypes.style,
  tabStyle: View.propTypes.style,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  onChangeTab: PropTypes.func,
  initialPage: PropTypes.number,
}
TabBar.defaultProps = {
  tabBarPosition: 'bottom',
  activeTextColor: MainStyle.color.main,
  underline: styles.underline,
  tabStyle: styles.tabStyle,
  style: styles.tabBar,
  textStyle: styles.text,
  onChangeTab: () => {},
  initialPage: 0,
}

export default TabBar
