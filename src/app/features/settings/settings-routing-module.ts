import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Photo } from './components/photo/photo';
import { Groups } from './components/groups/groups';
import { Preferences } from './components/preferences/preferences';
import { Profile } from './components/profile/profile';
import { ChangePassword } from './components/change-password/change-password';
import { SettingLayout } from './components/setting-layout';
import { AuthGuard } from '../../core/guards/auth-guard';


const routes: Routes = [

  {
    path: '', component: SettingLayout, data: { sidebarType: 'settings' },canActivate: [AuthGuard],
    children: [
      { path: '', component: Profile, data: { sidebarType: 'settings' }, canActivate: [AuthGuard] },
      { path: 'photo', component: Photo, data: { sidebarType: 'settings' }, canActivate: [AuthGuard] },
      { path: 'groups-interests', component: Groups, data: { sidebarType: 'settings' }, canActivate: [AuthGuard] },
      { path: 'display-preferences', component: Preferences, data: { sidebarType: 'settings' }, canActivate: [AuthGuard] },
      { path: 'change-password', component: ChangePassword, data: { sidebarType: 'settings' } },
      { path: 'profile', component: Profile, data: { sidebarType: 'settings' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
