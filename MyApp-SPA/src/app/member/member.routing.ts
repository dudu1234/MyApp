import { Routes, RouterModule } from '@angular/router';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberEditResolver } from '../_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from '../_guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  {
    path: '',
    component: MemberEditComponent
  },
  {
    path: 'edit',
    component: MemberEditComponent,
    data: {
      breadcrumb: 'User Details'
    },
    resolve: {
      user: MemberEditResolver
    },
    canDeactivate: [PreventUnsavedChanges]
  }
];

export const MembersRoutes = RouterModule.forChild(routes);
