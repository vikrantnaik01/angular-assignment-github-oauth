import { Component, OnInit } from '@angular/core';
import { IRepoModel } from 'src/app/models/repo.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'lib-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {

  public userRepoDetails: IRepoModel[] = [];
  public userFollowingList: any[] =[];
  public userFollowersList: any[] =[];
  public userName = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public getUserData(userName: string){
    this.userFollowingList = [];
    this.userFollowersList = [];
    this.userService.getUserRepos(userName).subscribe((userRepos: IRepoModel[]) => {
      console.log(userRepos);
      this.userRepoDetails = userRepos;
    });
  }

  public getUserFollowings () {
    this.userRepoDetails = [];
    this.userFollowersList = [];
    this.userService.getUserFollowings(this.userName).subscribe(users => {
      this.userFollowingList = users;
    })
  }

  public getUserFollowers () {
    this.userRepoDetails = [];
    this.userFollowingList = [];
    this.userService.getUserFollowers(this.userName).subscribe(users => {
      this.userFollowersList = users;
    })
  }

}
