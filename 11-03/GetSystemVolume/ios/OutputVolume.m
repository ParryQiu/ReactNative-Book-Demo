#import "OutputVolume.h"
#import "React/RCTLog.h"
#import <AVFoundation/AVAudioSession.h>

@implementation OutputVolume

RCT_EXPORT_MODULE();

// We can send back a promise to our JavaScript environment :)
RCT_REMAP_METHOD(get,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  float volume = [AVAudioSession sharedInstance].outputVolume;
  NSString* volumeString = [NSString stringWithFormat:@"%f", volume];
  
  if (volumeString) {
    resolve(volumeString);
  } else {
    reject(@"get_error", @"获取系统音量错误", nil);
  }
  
}

@end