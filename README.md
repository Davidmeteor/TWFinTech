# TWFinTech
~~not working
Test the react-native-git-upgrade
https://facebook.github.io/react-native/blog/2016/12/05/easier-upgrades.html~~

- Update package.json
```
"react": "15.4.2",
"react-native": "0.41.2",
```

- Follow this thread 
http://stackoverflow.com/questions/41477241/react-native-xcode-upgrade-and-now-rctconvert-h-not-found
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

