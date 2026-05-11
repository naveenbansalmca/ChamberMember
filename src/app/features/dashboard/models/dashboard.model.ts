import { Event } from './event.model';
import { HotLink } from './hot-link.model';
import { MenuItem } from './menu-item.model';
import { Post } from './post.model';

export interface DashboardModel {
  chamberName: string;
  memberName: string;
  memberLocation: string;
  welcomeText: string;
  topTabs: MenuItem[];
  menuItems: MenuItem[];
  hotLinks: HotLink[];
  upcomingEvent: Event;
  memberProfilePercent: number;
  posts: Post[];
}
