
export function ajax(url: string) {
  return new Promise((resolve, reject) => {
    (window as any).markdownContentCached = (window as any).markdownContentCached || {};
    const cache = (window as any).markdownContentCached;
    if (cache && cache[url]) {
      resolve(cache[url]);
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = (e: any) => {
      if (e.currentTarget.status === 200) {
        if (xhr.responseText && typeof xhr.responseText === 'string') {
          cache[url] = xhr.responseText;
          resolve(xhr.responseText);
        } else {
          reject(new Error('responseText not string or is empty string.'));
        }
      } else { reject(e); }
    }
    xhr.send();
  });
}
