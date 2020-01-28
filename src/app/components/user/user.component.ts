import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent implements OnInit {
  public users: Array<User>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.get();
  }
}
