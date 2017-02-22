# TWFinTech

## How to draw the chart in the React-Native

* will try this one https://github.com/redpandatronicsuk/arty-charty

* 02/21: Try this approach, https://github.com/tomauty/react-native-chart
- does not work. The functionality is not complete

* 02/19: Blocked by one crash issue, no solution yet
- https://github.com/react-native-community/react-native-svg/issues/246
- https://github.com/oblador/react-native-progress/issues/40#issue-200216423

* Install the react-native-svg and react-native-pathjs-charts

```
npm install react-native-svg --save
react-native link react-native-svg
npm install react-native-pathjs-charts --save
```

* If you meet the "No component found for view with name RNSVGxxxx" error
- https://github.com/react-native-community/react-native-svg/issues/79
- RNSVG.xcodeproj in "Libraries"
- libRNSVG.a in "Link Binary With Libraries"
- $(SRCROOT)/../node_modules/react-native-svg/ios in "Header Search Paths"

## update to the react-native 0.4x

~~not working
Test the react-native-git-upgrade<br>
https://facebook.github.io/react-native/blog/2016/12/05/easier-upgrades.html~~

- Update package.json
```
"react": "15.4.2",
"react-native": "0.41.2",
```

- Follow this thread 
http://stackoverflow.com/questions/41477241/react-native-xcode-upgrade-and-now-rctconvert-h-not-found

To solve the issue, you have to do the following:

* In Xcode, go to the project scheme (Product -> Scheme -> Manage Scheme -> double click your project).
* Click on the 'Build' option at the left pane.
* Uncheck 'Parallelize Build' under Build Options.
* Then in Targets section, click '+' button then search for 'React'. Select it and click 'Add'.
* 'React' should now appear under Targets section. Click and drag it to the top so that it will be the first item in the list (before your project).
* Clean the project and build.

```
// RNVectorIconsManager.h
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>

// RNVectorIconsManager.m
#import "RNVectorIconsManager.h"
#import <React/RCTConvert.h>
#import <React/RCTBridge.h>
#import <React/RCTUtils.h>

// RCTFBLogin.h
#import <React/RCTView.h>

// RCTFBLogin.m
#import <React/RCTLog.h>

// RCTFBLoginManager.h
#import <React/RCTViewManager.h>

// RCTFBLoginManager.m
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>
#import <React/RCTLog.h>

#import "RCTFBLogin.h"
#import "RCTFBLoginManager.h"
```
## How to solve "React Native--Animated:`useNativeDriver`is not supported because the native animated module is missing"
* http://www.jianshu.com/p/4fb927395d3b

