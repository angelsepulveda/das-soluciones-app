export type MenuItem = {
  to?: string;
  icon?: string;
  title?: string;
  titleId?: string;
  section?: string;
  items?: MenuItem[];
  subItems?: MenuItem[];
  external?: boolean;
};
