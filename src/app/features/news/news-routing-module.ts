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
import { NewReleaseComponent } from './components/new-release/new-release.component';
import { AuthGuard } from '../../core/guards/auth-guard';

const routes: Routes = [

  {
    path: '', component: NewsLayoutComponent, data: { sidebarType: 'news' }, canActivate: [AuthGuard],
    children: [
      { path: '', component: NewsComponent, data: { sidebarType: 'news' }, canActivate: [AuthGuard] },
      { path: 'hot-deals', component: HotDealsComponent, data: { sidebarType: 'news' }, canActivate: [AuthGuard] },
      { path: 'member-to-member-deals', component: MembertoMemberComponent, data: { sidebarType: 'news' }, canActivate: [AuthGuard] },
      { path: 'news-releases', component: NewReleaseComponent, data: { sidebarType: 'news' }, canActivate: [AuthGuard] },
      { path: 'job-postings', component: JobPostingComponent, data: { sidebarType: 'news' }, canActivate: [AuthGuard] },
      { path: 'marketspace', component: MarketSpaceComponent, data: { sidebarType: 'news' }, canActivate: [AuthGuard] },
      { path: 'social-feeds', component: SocialFeedComponent, data: { sidebarType: 'news' }, canActivate: [AuthGuard] },
      { path: 'request-for-proposals', component: RequestProposalComponent, data: { sidebarType: 'news' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
