//
//  LocalNotificationManager.m
//  LocalNotificationDemo
//
//  Created by Priyal
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "LocalNotificationManager.h"
#import <React/RCTLog.h>

@interface LocalNotificationManager ()


@end

@implementation LocalNotificationManager


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(fireNotification:(NSString *)name)
{
 
  UILocalNotification *notification = [[UILocalNotification alloc] init];
  notification.fireDate = [NSDate dateWithTimeIntervalSinceNow:5];
  notification.alertBody = name;
  notification.timeZone = [NSTimeZone defaultTimeZone];
  notification.soundName = UILocalNotificationDefaultSoundName;
  
  [[UIApplication sharedApplication] scheduleLocalNotification:notification];
  
  RCTLogInfo(@"Pretending to create an event %@ at", name);
}


@end
