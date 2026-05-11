import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconsEnum } from '../../../dashboard/data/IconsEnum';

interface CommunityCard {
  title: string;
  description: string;
  countText: string;
  iconClass: string;
  tone: 'pink' | 'green' | 'blue' | 'purple' | 'orange' | 'cyan';
}

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class NewsComponent {
  readonly cards: CommunityCard[] = [
    {
      title: 'Hot Deals',
      description: 'Check out the latest hot deals from our members and community partners.',
      countText: '2 Deals',
      iconClass: IconsEnum.HotDeals,
      tone: 'pink'
    },
    {
      title: 'Member To Member Deals',
      description: 'Exclusive deals and offers available only to chamber members.',
      countText: '2 Deals',
      iconClass: 'bi bi-people',
      tone: 'green'
    },
    {
      title: 'News Releases',
      description: 'Stay informed with the latest news and announcements.',
      countText: '25 Releases',
      iconClass: 'bi bi-newspaper',
      tone: 'blue'
    },
    {
      title: 'Job Postings',
      description: 'Find job opportunities posted by our members and local businesses.',
      countText: 'No Openings',
      iconClass: 'bi bi-briefcase',
      tone: 'purple'
    },
    {
      title: 'MarketSpace Items',
      description: 'Browse products and services offered by our member businesses.',
      countText: 'No Items',
      iconClass: 'bi bi-shop',
      tone: 'orange'
    },
    {
      title: 'Requests for Proposal',
      description: 'View and respond to open requests for proposals.',
      countText: 'No Requests',
      iconClass: 'bi bi-file-earmark-text',
      tone: 'cyan'
    }
  ];
}
