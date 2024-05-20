/**
 * @author Cheng
 */
import {
  showToast,
  navigateTo, redirectTo,
} from '@tarojs/taro';

export const toast = (msg: string): void => {
  showToast({
    title: msg,
    icon: 'none',
  });
};

export const isH5 = (): boolean => {
  return process.env.TARO_ENV === 'h5';
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
