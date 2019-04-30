import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberRegisterComponent } from './member/member-register/member-register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'register',
    component: MemberRegisterComponent,
    data: {
      breadcrumb: 'Register User'
    }
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'code-examples',
        loadChildren: './code-examples/code-examples.module#CodeExamplesModule',
        data: {
          breadcrumb: 'Code Examples'
        }
      },
      {
        path: 'admin',
        loadChildren: './member/admin.module#AdminModule',
        data: {
          breadcrumb: 'Admin'
        }
      },
      {
        path: 'store',
        loadChildren: './store/store.module#StoreModule',
        data: {
          breadcrumb: 'Store'
        }
      },
      {
        path: 'members',
        loadChildren: './member/member.module#MembersModule',
        data: {
          breadcrumb: 'Members'
        }
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
