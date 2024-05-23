/**
 * @author Cheng
 */
import {
  showToast, getWindowInfo, getSystemInfoSync, getCurrentInstance,
  navigateTo, redirectTo, login,
} from "@tarojs/taro";
import { convertObjectToQuery, getBrowserInfo } from "mazey";

export const getCurrentPage = () => {
  const ins = getCurrentInstance();
  if (ins && ins.router && ins.router.path) {
    return ins.router.path;
  }
  return "";
};

export const getWindowSize = () => {
  const { windowHeight, windowWidth } = getWindowInfo();
  const widthHeightRatio = windowWidth / windowHeight;
  const hwRatio = windowHeight / windowWidth;
  return {
    width: windowWidth,
    height: windowHeight,
    ratio: widthHeightRatio,
    hwRatio,
  };
};

export const getSystem = () => {
  const { system } = getSystemInfoSync();
  return system;
};

export const getEnv = (): string => {
  return process.env.TARO_ENV || "";
};

export const getLoginCodeAsync = async () => {
  const res = await new Promise<string>((resolve, reject) => {
    login({
      success: (res) => {
        resolve(res.code);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
  const code = res || "";
  if (!code) {
    return Promise.reject("fail");
  }
  return code;
};

export const isWeb = (): boolean => {
  return process.env.TARO_ENV === "h5";
};

/**
 * Alias of `isWeb`.
 */
export const isH5 = (): boolean => {
  return isWeb();
};

export const isPC = (): boolean => {
  if (isH5()) {
    const info = getBrowserInfo();
    if (info.platform === "desktop") {
      return true;
    }
  }
  return false;
};

export const isWideScreen = (): boolean => {
  const { ratio } = getWindowSize();
  if (ratio > 0.7) {
    return true;
  }
  return false;
};

/**
 * Alias of `isWideScreen`.
 */
export const isMiddleScreen = (): boolean => {
  return isWideScreen();
};

export const isLongScreen = (): boolean => {
  const { hwRatio } = getWindowSize();
  if (hwRatio > 1.9) {
    return true;
  }
  return false;
};

export const isIOS = (): boolean => {
  const system = getSystem();
  if (system.toLowerCase().indexOf("ios") > -1) {
    return true;
  }
  return false;
};

export const isAndroid = (): boolean => {
  const system = getSystem();
  if (system.toLowerCase().indexOf("android") > -1) {
    return true;
  }
  return false;
};

export const quickToast = (msg: string): void => {
  showToast({
    title: msg,
    icon: "none",
  });
};

// const objToQuery = (obj: { [key: string]: string }): string => {
//   let res: string = '?';
//   for (const i in obj) {
//     res += `${i}=${obj[i]}&`;
//   }
//   return res.slice(0, -1);
// };

export const quickNavigateTo = (page: string, { params = {} } = {}): void => {
  const queryStr = convertObjectToQuery(params);
  navigateTo({
    url: `/pages/${page}/index${queryStr}`,
  });
};

export const quickRedirectTo = (page: string, { params = {} } = {}): void => {
  const queryStr = convertObjectToQuery(params);
  redirectTo({
    url: `/pages/${page}/index${queryStr}`,
  });
};
