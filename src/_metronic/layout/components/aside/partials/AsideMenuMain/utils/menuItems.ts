import { MenuItem } from '../types/menuItem.ts';

export const menuItems: MenuItem[] = [
  {
    to: '/dashboard',
    icon: 'element-11',
    titleId: 'MENU.DASHBOARD',
  },
  {
    section: 'Sistema POS',
    items: [
      {
        to: '/crafted/pages',
        title: 'Almacén',
        icon: 'home-2',
        subItems: [
          {
            to: '/crafted/pages/profile',
            title: 'Categorías',
            icon: 'minus',
          },
          {
            to: '/crafted/pages/profile',
            title: 'Marcas',
            icon: 'minus',
          },
          {
            to: '/crafted/pages/profile',
            title: 'Productos',
            icon: 'minus',
          },
          {
            to: '/crafted/pages/profile',
            title: 'Unidades de medidas',
            icon: 'minus',
          },
        ],
      },
      {
        to: '/crafted/pages',
        title: 'Configuraciones',
        icon: 'setting-2',
        subItems: [
          {
            to: '/crafted/pages/profile',
            title: 'Tipos de documentos',
            icon: 'minus',
          },
          {
            to: '/crafted/pages/profile',
            title: 'Tipos de Comprobantes',
            icon: 'minus',
          },
          {
            to: '/crafted/pages/profile',
            title: 'Productos',
            icon: 'minus',
          },
          {
            to: '/crafted/pages/profile',
            title: 'Unidades de medidas',
            icon: 'minus',
          },
        ],
      },
    ],
  },
];
