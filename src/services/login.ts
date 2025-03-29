import { sendPost, sendPut } from './api';

export const login = (params: any) => sendPost(`token/`, params);

export const register = (params: any) => sendPost(`register/`, params);

export const sendOtpRegister = (params: any) => sendPost(`send-otp-register/`, params);

export const sendOtpforgotPass = (params: any) => sendPost(`send-otp-forgot-password/`, params);

export const sendForgotPass = (params: any) => sendPut('forgot-password/', params);