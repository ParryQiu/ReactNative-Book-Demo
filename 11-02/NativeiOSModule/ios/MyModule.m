#import "MyModule.h"

@implementation MyModule

// 需要包含的宏定义
RCT_EXPORT_MODULE()

// 定义了一个返回的字符串
- (NSDictionary *)constantsToExport {
  return @{@"hello": @"你好，这是我编写的第一个 iOS 原生模块！"};
}

// 定义了一个可被调用的函数
RCT_EXPORT_METHOD(squareMe:(NSString *)number:(RCTResponseSenderBlock)callback) {
  int num = [number intValue];
  callback(@[[NSNull null], [NSNumber numberWithInt:(num*num)]]);
}

@end
