import React from 'react';
import { useIntl } from 'react-intl';
import { MenuItem } from './types/menuItem.ts';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub.tsx';
import { AsideMenuItem } from './AsideMenuItem.tsx';
import { menuItems } from './utils/menuItems.ts';

export function AsideMenuMain() {
  const intl = useIntl();

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => {
      if (item.section) {
        return (
          <div key={index} className="menu-item">
            <div className="menu-content pt-8 pb-2">
              <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                {item.section}
              </span>
            </div>
            {item.items && renderMenuItems(item.items)}
          </div>
        );
      }

      if (item.subItems) {
        return (
          <AsideMenuItemWithSub
            key={index}
            to={item.to!}
            title={item.title!}
            icon={item.icon}
          >
            {renderMenuItems(item.subItems)}
          </AsideMenuItemWithSub>
        );
      }

      return (
        <AsideMenuItem
          key={index}
          to={item.to!}
          icon={item.icon}
          title={
            item.titleId
              ? intl.formatMessage({ id: item.titleId })
              : item.title!
          }
        />
      );
    });
  };

  return <>{renderMenuItems(menuItems)}</>;
}
