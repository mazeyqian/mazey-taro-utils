/**
 * @author Cheng
 */

// / <reference types="@tarojs/taro" />

declare namespace NodeJS {
  interface ProcessEnv {
    /** NODE 内置环境变量, 会影响到最终构建生成产物 */
    NODE_ENV: "development" | "production",
    /** 当前构建的平台 */
    TARO_ENV: "weapp" | "swan" | "alipay" | "h5" | "rn" | "tt" | "quickapp" | "qq" | "jd",
  }
}
