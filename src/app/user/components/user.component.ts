import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../core/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: Array<User>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.get();
  }
}
