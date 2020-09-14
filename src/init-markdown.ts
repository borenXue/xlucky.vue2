import '../build/markdown/style.scss';
// @ts-ignore
import * as helper from '../build/markdown/browser.js';

(window as any).setupVueLiveDemoItem = helper.setupVueLiveDemoItem;
(window as any).classAdd = helper.classAdd;
(window as any).classRemove = helper.classRemove;
(window as any).classHas = helper.classHas;
