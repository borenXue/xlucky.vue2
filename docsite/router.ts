import { camelCase } from 'camel-case';
import Design from './component/Design';
import Layout from './component/Layout';
import Components from './component/Components';
import Document from './component/Document';
import componentsJson from '../components.json';
import { RouteConfigSingleView } from 'vue-router/types/router';

function CamelCase(str: string) {
  let keyName = camelCase(str);
  return keyName[0].toUpperCase() + keyName.substring(1);
}

// 生成组件文档相关路由
const componentsRouterList: RouteConfigSingleView[] = [];
for (const key in componentsJson) {
  componentsRouterList.push({
    path: `/components/${key}`,
    component: Components,
    meta: {
      title: {
        'zh-CN': CamelCase(key),
        'en-US': CamelCase(key),
      },
    },
    props: {
      markdownFile: `components/${key}/${key}`,
      currentComponentName: key,
    },
  });
}

const config = [
  {
    path: '/user-guide',
    redirect: '/user-guide/quickstart',
    component: Layout,
    meta: {
      title: {
        'zh-CN': '用户指南',
        'en-US': 'User Guide',
      },
    },
    children: [
      {
        path: '/user-guide/changelog',
        meta: {
          title: {
            'zh-CN': '更新日志',
            'en-US': 'Changelog',
          },
        },
        component: Document,
        props: { markdownFile: 'CHANGELOG' },
      },
      {
        path: '/user-guide/quickstart',
        meta: {
          title: {
            'zh-CN': '快速入门',
            'en-US': 'Quick Start',
          },
        },
        component: Document,
        props: { markdownFile: 'docs/quickstart' },
      },
      {
        path: '/user-guide/vue-filters',
        meta: {
          title: {
            'zh-CN': 'Vue 过滤器',
            'en-US': 'Vue Filters',
          },
        },
        component: Document,
        props: { markdownFile: 'docs/vue-filters' },
      },
      {
        path: '/user-guide/custom-theme',
        meta: {
          title: {
            'zh-CN': '自定义主题',
            'en-US': 'Custom Theme',
          },
        },
        component: Document,
        props: { markdownFile: 'docs/custom-theme' },
      },
    ],
  },
  {
    path: '/components',
    component: Layout,
    meta: {
      title: {
        'zh-CN': '组件',
        'en-US': 'Components',
      },
    },
    children: componentsRouterList,
  },
];

// 多语言支持 - 左侧栏
function getSidebarListAll(lang: string) {
  function getSidebarItem(routerItem: any, lang: string) {
    return {
      title: routerItem?.meta && routerItem.meta.title ? routerItem.meta.title[lang] : '',
      path: `/${lang}${routerItem.path}`,
      children: (routerItem.children || []).map((item: any) => getSidebarItem(item, lang)),
    };
  }
  return config.map((item) => getSidebarItem(item, lang));
}

// 多语言支持 - 路由
function toRouterConfig(item: RouteConfigSingleView, langs: string[], sidebarList: any): RouteConfigSingleView[] {
  const children = [];
  for (const ii of item.children || []) {
    children.push(...toRouterConfig(ii, langs, sidebarList));
  }
  const result = [];
  for (const lang of langs) {
    const langItem = {
      path: `/${lang}${item.path}`,
      component: item.component,
      props: {
        lang,
        sidebarList,
        currentComponentName: item.props ? (item.props as any).currentComponentName : '',
        markdownFile: item.props ? (item.props as any).markdownFile + `.${lang}.md` : '',
      },
      children,
      meta: {
        title: !item.meta || !item.meta.title ? '' : item.meta.title[lang],
      },
    };
    if (item.redirect) {
      (langItem as any).redirect = `/${lang}${item.redirect}`;
    }
    result.push(langItem);
  }
  return result;
}

export interface SidebarItem {
  title: string;
  path: string;
  children: SidebarItem[];
}

export default function createRouterConfig(lang: string) {
  const routerConfig: RouteConfigSingleView[] = [];
  const sidebarList = getSidebarListAll(lang);
  for (const item of [
    ...config,
    {
      path: '/synopsis',
      meta: {
        title: {
          'zh-CN': '设计',
          'en-US': 'Design',
        },
      },
      component: Design,
    },
  ]) {
    routerConfig.push(...toRouterConfig(item, [lang], sidebarList));
  }
  return routerConfig;
}
