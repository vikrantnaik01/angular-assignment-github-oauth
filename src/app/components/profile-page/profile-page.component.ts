import { Component, OnInit } from '@angular/core';
import { IRepoModel } from 'src/app/models/repo.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public userRepoDetails: IRepoModel[] = [];
  public userFollowingList: any[] =[];
  public userFollowersList: any[] =[];
  public userName = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public getUserData(){
    this.userFollowingList = [];
    this.userFollowersList = [];
    this.userService.getUserRepos(this.userName).subscribe((userRepos: IRepoModel[]) => {
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
