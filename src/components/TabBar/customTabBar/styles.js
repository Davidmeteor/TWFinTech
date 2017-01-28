import { StyleSheet } from 'react-native'
import MainStyle from '../../../styles'

export default StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		height: 60,
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},
})