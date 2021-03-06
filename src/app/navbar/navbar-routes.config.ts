import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Scrum App', menuType: MenuType.BRAND },
  { path: 'quete', title: 'Quetes', menuType: MenuType.LEFT },
  { path: 'about', title: 'About Us', menuType: MenuType.RIGHT },
  { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
];