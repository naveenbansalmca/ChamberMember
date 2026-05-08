import { DashboardModel } from '../models/dashboard.model';
import { IconsEnum } from './IconsEnum';

export const DASHBOARD_DATA: DashboardModel = {
  chamberName: 'Pinellas Park/Gateway Chamber',
  memberName: 'David McMurrin',
  memberLocation: 'Barbara S. Ponce Library',
  welcomeText:
    'ChamberMaster is your direct connection to the Pinellas Park/Gateway Chamber of Commerce. As a member of the Pinellas Park/Gateway Chamber of Commerce you have the opportunity to market your business to consumers visiting pinellaspark.com by enhancing your information home page with pictures and text, add an also post hot deals, job openings and events, add keywords to help consumers find you when they run searches, and run reports to see hit statistics for your home page and other advertised items.',
  topTabs: [
    { label: 'Home', icon: IconsEnum.Home, path: '/' },
    { label: 'Events', icon: IconsEnum.Events, path: '/events' },
    { label: 'Resources', icon: IconsEnum.Resources, path: '/resources' },
    { label: 'News', icon: IconsEnum.NewsRelease, path: '/news' },
    { label: 'Settings', icon: IconsEnum.Settings, path: '/account/personal' }
  ],

  menuItems: [
    { label: 'Personal Information', icon: IconsEnum.PersonalInformation, path: '/personal-information' },
    { label: 'Company Information', icon: IconsEnum.CompanyInformation, path: '/company-information' },
    { label: 'Hot Deals', icon: IconsEnum.HotDeals, path: '/hot-deals' },
    { label: 'Member To Member Deals', icon: IconsEnum.MemberToMemberDeal, path: '/member-to-member-deals' },
    { label: 'News Releases', icon: IconsEnum.NewsRelease, path: '/news-releases' },
    { label: 'Job Postings', icon: IconsEnum.JobPostings, path: '/job-postings' },
    { label: 'MarketSpace', icon: IconsEnum.MarketSpaceItems, path: '/marketspace' },
    { label: 'Request for Proposals', icon: IconsEnum.RequestsForProposal, path: '/request-for-proposals' }
  ],

  hotLinks: [
    { label: 'Chamber Forums' },
    { label: 'Additional Links' },
    { label: 'Additional Links - 2' }
  ],

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
      comments: 1,
      typeId: 1,
      isfavourite: true

    },
    {
      author: 'Paul Haskins AAMS, CEPA',
      company: 'Edward Jones',
      message: 'Four reasons a 529 plan might make sense for your family.',
      time: 'Tuesday, April 21, 2026 2:41 PM',
      likes: 0,
      comments: 0,
      typeId: 1,
      isfavourite: true
    },
    {
      author: 'Paul Haskins AAMS, CEPA',
      company: 'Edward Jones',
      message: 'Help your graduate use credit and debit cards wisely.',
      time: 'Tuesday, April 21, 2026 2:41 PM',
      likes: 0,
      comments: 0,
      typeId: 2,
      isfavourite: false
    },
    {
      author: 'Paul Haskins AAMS, CEPA',
      company: 'Edward Jones',
      message: 'Ten financial steps to take before and after your wedding day.',
      time: 'Tuesday, April 21, 2026 2:41 PM',
      likes: 0,
      comments: 0,
      typeId: 1,
      isfavourite: true
    },
    {
      author: 'Paul Haskins AAMS, CEPA',
      company: 'Edward Jones',
      message: 'Saving for Retirement: Are You Guessing or Planning?',
      time: 'Tuesday, April 21, 2026 2:41 PM',
      likes: 0,
      comments: 0,
      typeId: 2,
      isfavourite: false
    }
  ]
};
