/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import <Google/CloudMessaging.h>
#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"
#import "RCTEventDispatcher.h"
#import "GCM.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeModule, GGLInstanceIDDelegate, GCMReceiverDelegate>

@property (nonatomic, strong) UIWindow *window;
@property(nonatomic, readonly, strong) NSString *registrationKey;
@property(nonatomic, readonly, strong) NSString *messageKey;
@property(nonatomic, readonly, strong) NSString *gcmSenderID;
@property(nonatomic, readonly, strong) NSDictionary *registrationOptions;
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;
@property(nonatomic, readonly, strong) GCM *myGCMScript;

@end

RCTEventDispatcher * bridge;
