import { MenuItem } from '../types/menuItem.ts';

export const menuItems: MenuItem[] = [
  {
    to: '/dashboard',
    icon: 'element-11',
    titleId: 'MENU.DASHBOARD',
  },
  {
    to: '/builder',
    icon: 'switch',
    title: 'Layout Builder',
  },
  {
    section: 'Crafted',
    items: [
      {
        to: '/crafted/pages',
        title: 'Pages',
        icon: 'gift',
        subItems: [
          {
            to: '/crafted/pages/profile',
            title: 'Profile',
            subItems: [
              { to: '/crafted/pages/profile/overview', title: 'Overview' },
              { to: '/crafted/pages/profile/projects', title: 'Projects' },
              { to: '/crafted/pages/profile/campaigns', title: 'Campaigns' },
              { to: '/crafted/pages/profile/documents', title: 'Documents' },
              {
                to: '/crafted/pages/profile/connections',
                title: 'Connections',
              },
            ],
          },
          {
            to: '/crafted/pages/wizards',
            title: 'Wizards',
            subItems: [
              { to: '/crafted/pages/wizards/horizontal', title: 'Horizontal' },
              { to: '/crafted/pages/wizards/vertical', title: 'Vertical' },
            ],
          },
        ],
      },
      {
        to: '/crafted/accounts',
        title: 'Accounts',
        icon: 'profile-circle',
        subItems: [
          { to: '/crafted/account/overview', title: 'Overview' },
          { to: '/crafted/account/settings', title: 'Settings' },
        ],
      },
    ],
  },
  {
    to: '/error',
    title: 'Errors',
    icon: 'cross-circle',
    subItems: [
      { to: '/error/404', title: 'Error 404' },
      { to: '/error/500', title: 'Error 500' },
    ],
  },
  {
    to: '/crafted/widgets',
    title: 'Widgets',
    icon: 'element-plus',
    subItems: [
      { to: '/crafted/widgets/lists', title: 'Lists' },
      { to: '/crafted/widgets/statistics', title: 'Statistics' },
      { to: '/crafted/widgets/charts', title: 'Charts' },
      { to: '/crafted/widgets/mixed', title: 'Mixed' },
      { to: '/crafted/widgets/tables', title: 'Tables' },
      { to: '/crafted/widgets/feeds', title: 'Feeds' },
    ],
  },
  {
    section: 'Apps',
    items: [
      {
        to: '/apps/chat',
        title: 'Chat',
        icon: 'message-text-2',
        subItems: [
          { to: '/apps/chat/private-chat', title: 'Private Chat' },
          { to: '/apps/chat/group-chat', title: 'Group Chat' },
          { to: '/apps/chat/drawer-chat', title: 'Drawer Chat' },
        ],
      },
      {
        to: '/apps/user-management/users',
        icon: 'shield-tick',
        title: 'User management',
      },
    ],
  },
  {
    to: import.meta.env.VITE_APP_PREVIEW_DOCS_URL + '/changelog',
    title: `Changelog ${import.meta.env.VITE_APP_VERSION}`,
    icon: 'document',
    external: true,
  },
];
