/* eslint-disable no-useless-escape */
export const REGEX_PHONE_NUMBER = /^\+?[\d-]+$/;
export const REGEX_EMAIL =
  /^(?!.*\.\.)[A-Za-z0-9_=\-+.]{4,64}@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,4}$/;
export const REGEX_URL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
export const REGEX_PASSWORD = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
export const URLREXGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
export const EXTRACT_DATA_IN_BRACES = /\[([^)]+)\]/g;
export const REGEX_SPACE = /\s/g;
