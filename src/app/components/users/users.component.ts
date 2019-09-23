import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    quote: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
   
      this.users = [
        {
          firstName: 'Nelson',
          lastName: 'Mandela',
// tslint:disable-next-line: max-line-length
          quote: 'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.',
          isActive: true,
          posted: new Date('01/02/1994 19:36:00'),
          hide: true
        },
        {
          firstName: 'Albert',
          lastName: 'Einstein',
          quote: 'Insanity: doing the same thing over and over again and expecting different results.',
          isActive: false,
          posted: new Date('8/3/1916 03:16:00'),
          hide: true
        },
        {
          firstName: 'Mario',
          lastName: 'Puzo "The Godfather"',
          quote: 'Great men are not born great, they grow great',
          isActive: true,
          posted: new Date('03/09/1971 12:43:00'),
          hide: true
        }
      ];

      this.loaded = true;
  }


  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.posted = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }


}
