//
//  PushNotificationRegister.h
//  SocialLearningApp
//
//  Created by Shishir Choudhary on 3/5/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#ifndef PushNotificationRegister_h
#define PushNotificationRegister_h


#import <Google/CloudMessaging.h>
#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"
#import "RCTEventDispatcher.h"

@interface GCM: NSObject <RCTBridgeModule>
@end


#endif /* PushNotificationRegister_h */
