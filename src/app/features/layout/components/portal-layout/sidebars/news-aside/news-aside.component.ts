import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconsEnum } from '../../../../../dashboard/data/IconsEnum';

@Component({
  selector: 'app-news-aside',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './news-aside.component.html',
  styleUrl: './news-aside.component.css'
})
export class NewsAsideComponent {
  readonly menuItems = [
    { label: 'Hot Deals', icon: IconsEnum.HotDeals, path: '/hot-deals' },
    { label: 'Member To Member Deals', icon: IconsEnum.MemberToMemberDeal, path: '/member-to-member-deals' },
    { label: 'News Releases', icon: IconsEnum.NewsRelease, path: '/news-releases' },
    { label: 'Job Postings', icon: IconsEnum.JobPostings, path: '/job-postings' },
    { label: 'MarketSpace', icon: IconsEnum.MarketSpaceItems, path: '/marketspace' },
    { label: 'Social Feed', icon: IconsEnum.SocialFeed, path: '/personal-information' },
    { label: 'Request for Proposals', icon: IconsEnum.RequestsForProposal, path: '/request-for-proposals' }
  ];
}
