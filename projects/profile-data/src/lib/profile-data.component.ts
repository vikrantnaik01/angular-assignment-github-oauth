import { Component, OnInit } from '@angular/core';
import { IRepoModel } from 'src/app/models/repo.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'lib-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent {

  public userRepoDetails: IRepoModel[] = [];
  public userFollowingList: any[] =[];
  public userFollowersList: any[] =[];
  public userName = '';
  constructor(private userService: UserService) { }

}
