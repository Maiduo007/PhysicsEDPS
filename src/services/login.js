/**
 * Date：2018/4/3
 * Author：Wangtaidong
 */
import request from '../utils/request';

export async function adminLogin(params) {
  return request('/api/org/getAll', {
    method: 'post',
    body: params,
  });
}

export async function teacherLogin(params) {
  return request('/api/org/getStoreData', {
    method: 'post',
    body: params,
  });
}

export async function studentLogin(params) {
  return request('/api/org/updateStoreData', {
    method: 'post',
    body: params,
  });
}
