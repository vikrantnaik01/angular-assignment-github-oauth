import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileDataComponent } from './profile-data.component';



@NgModule({
  declarations: [ProfileDataComponent],
  imports: [
    FormsModule
  ],
  exports: [ProfileDataComponent]
})
export class ProfileDataModule { }
