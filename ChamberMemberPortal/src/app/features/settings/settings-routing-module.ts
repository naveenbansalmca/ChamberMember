import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassword } from './components/change-password/change-password';
import { SettingComponent } from './components/setting/setting';

const routes: Routes = [

  { path: '', component: SettingComponent, data: { sidebarType: 'settings' } },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
