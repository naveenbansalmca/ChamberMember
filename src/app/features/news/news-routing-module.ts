import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news';
import { NewsLayoutComponent } from './news-layout.component';
import { HotDealsComponent } from './components/hot-deals/hot-deals.component';
import { MembertoMemberComponent } from './components/memberto-member/memberto-member.component';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { MarketSpaceComponent } from './components/market-space/market-space.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';
import { RequestProposalComponent } from './components/request-proposal/request-proposal.component';

const routes: Routes = [

  {
    path: '', component: NewsLayoutComponent, data: { sidebarType: 'news' },
    children: [
      { path: '', component: NewsComponent, data: { sidebarType: 'news' } },
      { path: 'hot-deals', component: HotDealsComponent, data: { sidebarType: 'news' } },
      { path: 'member-to-member-deals', component: MembertoMemberComponent, data: { sidebarType: 'news' } },
      { path: 'job-postings', component: JobPostingComponent, data: { sidebarType: 'news' } },
      { path: 'marketspace', component: MarketSpaceComponent, data: { sidebarType: 'news' } },
      { path: 'social-feeds', component: SocialFeedComponent, data: { sidebarType: 'news' } },
      { path: 'request-for-proposal', component: RequestProposalComponent, data: { sidebarType: 'news' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
