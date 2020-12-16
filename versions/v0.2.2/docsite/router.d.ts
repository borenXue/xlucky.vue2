import { RouteConfigSingleView } from 'vue-router/types/router';
export interface SidebarItem {
    title: string;
    path: string;
    children: SidebarItem[];
}
export default function createRouterConfig(lang: string): RouteConfigSingleView[];
//# sourceMappingURL=router.d.ts.map