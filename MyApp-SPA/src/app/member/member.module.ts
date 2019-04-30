import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersRoutes } from './member.routing';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MemberEditComponent
  ],
  imports: [CommonModule, MembersRoutes, FormsModule]
})
export class MembersModule {}
