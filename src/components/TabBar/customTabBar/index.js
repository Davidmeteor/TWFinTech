'use strict';

import React, {Component} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import MainStyle from '../../../styles'

class CustomTabBar extends Component {

	static propTypes = {
		goToPage: React.PropTypes.func, // jump to the corresponding func of tab
		activeTab: React.PropTypes.number, // current selected tab
		tabs: React.PropTypes.array, // the set of all tab
		tabNames: React.PropTypes.array, // tab name
		tabIconNames: React.PropTypes.array, // tab icon
	}

	setAnimationValue({value}) {
		//console.log(value);
	}

	componentDidMount() {
		// Animated.Value range [0, # of tabs - 1]
		this.props.scrollValue.addListener(this.setAnimationValue);
	}

	renderTabOption(tab, i) {
		let color = this.props.activeTab == i ? MainStyle.color.main : "#ADADAD"; // check the # i, if it's the current selected one, change the color
		return (
            <TouchableOpacity key={this.props.tabIconNames[i]} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
				<View style={styles.tabItem}>
					<Icon
						name={this.props.tabIconNames[i]} // icon
						size={30}
						color={color}/>
					<Text style={{color: color}}>
						{this.props.tabNames[i]}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={styles.tabs}>
				{this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
			</View>
		);
	}
}

export default CustomTabBar;