# ReactNativeTemplate

# How to rename the project structure
* Remove the build folder in the IOS/Android folder
* Rename all the file name which is TWFinTech
* Search all "TWFinTech" and replace it by your project name
* Open the Xcode. Change the name of Scheme to your project

# History

01/16: Move the tab bar to the bottom and add the icon
- Class must be Capitalize, http://stackoverflow.com/questions/38038751/react-native-expected-a-component-class-got-object-object

- Reference, https://github.com/hiphonezhu/RN-Demos/tree/master/Demo7

01/09: Fix the error when user clicks the Login/SignUp button in the main page. 
```javascript
// in the src/components/LoginForm/index.js

<Form ref={ref => { this.form = ref }}
===>
<Form ref={ref => { t.form = ref }}
```

01/11: Add the following functionality
- Send the confirmation email if user creates the personal account (not use Facebook log in)
- Need to activate the account first
- Diable auto correct in the Email text input

01/14: Solve the "button can't click issue' in android
- https://github.com/FuYaoDe/react-native-app-intro/issues/14
- Root cause is caused by react-native-app-intro module
- Take the alternative approach:
	- Remove the button in the last page of App intro
	- Add the "Done" button in the last page
	- If user clicks it, App will jump to sign up/log in page
	- iOS/Android are both good

# TWFinTech
