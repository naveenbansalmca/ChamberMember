import { DashboardModel } from '../models/dashboard.model';

export const DASHBOARD_DATA: DashboardModel = {
  chamberName: 'Pinellas Park/Gateway Chamber',
  memberName: 'David McMurrin',
  memberLocation: 'Barbara S. Ponce Library',
  welcomeText:
    'ChamberMaster is your direct connection to the Pinellas Park/Gateway Chamber of Commerce. As a member of the Pinellas Park/Gateway Chamber of Commerce you have the opportunity to market your business to consumers visiting pinellaspark.com by enhancing your information home page with pictures and text, add an also post hot deals, job openings and events, add keywords to help consumers find you when they run searches, and run reports to see hit statistics for your home page and other advertised items.',
  topTabs: ['Home', 'Events', 'Resources', 'News', 'Settings'],
  menuItems: [
    { label: 'Personal Information', icon: 'bi bi-person' },
    { label: 'Company Information', icon: 'bi bi-building' },
    { label: 'Hot Deals', icon: 'bi bi-gear' },
    { label: 'Member To Member Deals', icon: 'bi bi-alarm' },
    { label: 'News Releases', icon: 'bi bi-alarm' },
    { label: 'Job Postings', icon: 'bi bi-alarm' },
    { label: 'MarketSpace', icon: 'bi bi-alarm' },
    { label: 'Request for Proposals', icon: 'bi bi-alarm' }
  ],
  hotLinks: [{ label: 'Chamber Forums' }, { label: 'Additional Links' }, { label: 'Additional Links - 2' }],
  quickLinks: ['Hot Deals', 'Job Postings', 'MarketSpace', 'News Releases', 'Request for Proposals'],
  upcomingEvent: {
    month: 'May',
    day: '07',
    year: '2026',
    title: 'Ambassadors Meeting',
    subtitle: 'PPGCC Ambassadors Committee',
    details: 'Meeting The Ambassadors Committee'
  },
  memberProfilePercent: 25,
  posts: [
    {
      author: 'Melissa Alama',
      company: 'Pinellas Park/Gateway Chamber of Commerce',
      message: 'Pinellas Park/Gateway Chamber of Commerce has changed their information.',
      time: 'Monday, April 21, 2026 7:26 PM',
      likes: 0,
      comments: 1
    },
    {
      author: 'Paul Haskins AAMS, CEPA',
      company: 'Edward Jones',
      message: 'Four reasons a 529 plan might make sense for your family.',
      time: 'Tuesday, April 21, 2026 2:41 PM',
      likes: 0,
      comments: 0
    },
    {
      author: 'Paul Haskins AAMS, CEPA',
      company: 'Edward Jones',
      message: 'Help your graduate use credit and debit cards wisely.',
      time: 'Tuesday, April 21, 2026 2:41 PM',
      likes: 0,
      comments: 0
    },
    {
      author: 'Paul Haskins AAMS, CEPA',
      company: 'Edward Jones',
      message: 'Ten financial steps to take before and after your wedding day.',
      time: 'Tuesday, April 21, 2026 2:41 PM',
      likes: 0,
      comments: 0
    },
    {
      author: 'Paul Haskins AAMS, CEPA',
      company: 'Edward Jones',
      message: 'Saving for Retirement: Are You Guessing or Planning?',
      time: 'Tuesday, April 21, 2026 2:41 PM',
      likes: 0,
      comments: 0
    }
  ]
};
