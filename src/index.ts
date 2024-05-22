/**
 * @author Cheng
 */
import {
  showToast, getWindowInfo, getSystemInfoSync,
  navigateTo, redirectTo,
} from '@tarojs/taro';
import { getBrowserInfo } from 'mazey';

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
  return process.env.TARO_ENV || '';
};

export const isWeb = (): boolean => {
  return process.env.TARO_ENV === 'h5';
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
    if (info.platform === 'desktop') {
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
  if (system.toLowerCase().indexOf('ios') > -1) {
    return true;
  }
  return false;
};

export const isAndroid = (): boolean => {
  const system = getSystem();
  if (system.toLowerCase().indexOf('android') > -1) {
    return true;
  }
  return false;
};

export const quickToast = (msg: string): void => {
  showToast({
    title: msg,
    icon: 'none',
  });
};

export const quickNavigateTo = (page: string): void => {
  navigateTo({
    url: `/pages/${page}/index`,
  });
};

export const quickRedirectTo = (page: string): void => {
  redirectTo({
    url: `/pages/${page}/index`,
  });
};
