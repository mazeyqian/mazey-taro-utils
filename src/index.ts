/**
 * @author Cheng
 */
import {
  showToast, getWindowInfo,
  navigateTo, redirectTo,
} from '@tarojs/taro';
import { getBrowserInfo } from 'mazey';

export const quickToast = (msg: string): void => {
  showToast({
    title: msg,
    icon: 'none',
  });
};

export const getEnv = (): string => {
  return process.env.TARO_ENV || '';
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

export const isWeb = (): boolean => {
  return process.env.TARO_ENV === 'h5';
};

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

export const isMiddleScreen = (): boolean => {
  const { ratio } = getWindowSize();
  if (ratio > 0.7) {
    return true;
  }
  return false;
};

export const isLongScreen = (): boolean => {
  const { hwRatio } = getWindowSize();
  if (hwRatio > 1.9) {
    return true;
  }
  return false;
};
