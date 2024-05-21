/*!
 * mazey-taro-utils v0.0.1
 * (c) 2018-2024 Cheng https://www.npmjs.com/package/mazey-taro-utils
 * Released under the MIT License.
 */
import { showToast, navigateTo, redirectTo } from '@tarojs/taro';

/**
 * @author Cheng
 */
var toast = function toast(msg) {
  showToast({
    title: msg,
    icon: 'none'
  });
};
var isH5 = function isH5() {
  return process.env.TARO_ENV === 'h5';
};
var getEnv = function getEnv() {
  return process.env.TARO_ENV || '';
};
var quickNavigateTo = function quickNavigateTo(page) {
  navigateTo({
    url: "/pages/".concat(page, "/index")
  });
};
var quickRedirectTo = function quickRedirectTo(page) {
  redirectTo({
    url: "/pages/".concat(page, "/index")
  });
};

export { getEnv, isH5, quickNavigateTo, quickRedirectTo, toast };
