import { formatDate, formatMoney } from 'xtools_js';

// eslint-disable-next-line max-params
export function filterArray(id: any, arr: any[], key = 'id', name = 'name', emptyDesc = '') {
  if (id === null || id === undefined) return emptyDesc;

  for (const item of arr) {
    if (item[key] === id) return item[name];
  }

  return emptyDesc || id;
}

// eslint-disable-next-line max-params
export function filterArrayMulti(idList: any[], arr: any[], key = 'id', name = 'name', separator = ', ', emptyDesc = '') {
  let str = '';

  for (let i = 0; i < idList.length; i++) {
    const value = filterArray(idList[i], arr, key, name, emptyDesc);
    str += value;
    if (i !== idList.length - 1) {
      str += separator;
    }
  }

  return str;
}

export function filterTime(value: string | number | Date, format?: string) {
  return formatDate(value, format || 'YYYY-MM-DD HH:mm:ss');
}

export function filterMoney(value: string | number) {
  return Number.isNaN(Number(value)) ? value : formatMoney(Number(value));
}

export function filterBoolean(value: boolean, trueDesc = '是', falseDesc = '否') {
  return value ? trueDesc : falseDesc;
}
