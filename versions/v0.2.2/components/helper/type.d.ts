import { RawLocation } from 'vue-router';
export interface MenuItemConfig {
    /**
     * 唯一 id
     */
    index: string | number;
    /**
     * 菜单中显示的文案
     */
    label: string;
    /**
     * 菜单中显示的图标
     */
    icon?: string;
    /**
     * 页面路由: 字符串(path) 或 路由对象 Location (vue-router 中的定义)
     *
     * 支持 url: 如果 path 为 http:// 或 https:// 或 // 开头的字符串, 会被视为一个新页面来打开
     */
    path?: RawLocation;
    children?: [MenuItemConfig];
}
export declare type MenuTreeConfig = MenuItemConfig[];
//# sourceMappingURL=type.d.ts.map