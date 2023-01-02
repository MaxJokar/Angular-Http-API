import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  // private user:User = {
    private user:any = {
    // 'id':2, // for update we need to use  id  add it here
    // 'name': 'Max Jokar',
    // 'username': 'Maxim',
    // 'email': 'maksimSSSjokar@gamil.biz',
    // 'address': {
    //   'street': 'Kulas Light',
    //   'suite': 'Apt. 778787877777',
    //   'city': 'Gwenborough',
    //   'zipcode': '92998-3874',
    //   'geo': {
    //     'lat': '-37.3159',
    //     'lng': '81.1496'
    //   }
    // },
    // 'phone': '1-770-736-8031 x56442',
    // 'website': 'hildegard.org',
    // 'company': {
    //   'name': 'Angular ',
    //   'catchPhrase': 'Multi-layered client-server neural-net',
    //   'bs': 'harness real-time e-markets'

    // }
  };


  constructor(private userService: UserService) {}


  ngOnInit(): void{
    //this.onUpdateUser();
    //this.onPatchUser();
    // this.onDeleteUser();
    //this.onGetUsers();
    //  this.onGetUser();
    //this.onCreateUser();
    // this.onTextFile();  we can see the content of our text.txt from assets in Browser

  }

  // to call the service and subscribe to the function
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      //(error: any) => console.log(error),
      // () =>console.log('Done getting users'),

    );

  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      //(error: any) => console.log(error),
      // () =>console.log('Done getting users'),
    );
    }


  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
    //(error: any) => console.log(error),
    // () =>console.log('Done getting users'),
    );

  }

  // we add id  to our pyload above
  // source will not be really updated on the server but it will be faked as if
  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
    //(error: any) => console.log(error),
    // () =>console.log('Done getting users'),
    );
  }

  onPatchUser(): void {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      //(error: any) => console.log(error),
      // () =>console.log('Done getting users'),
      );
  }

  onDeleteUser(): void {
      this.userService.deleteUser(9).subscribe(
        (response) => console.log('Response for Delete :',response),
        //(error: any) => console.log(error),
        // () =>console.log('Done getting users'),
      );
  }



  onTextFile(): void {
      this.userService.getTextFile().subscribe(
        (response) => console.log('Response:',response),
        //(error: any) => console.log(error),
        // () =>console.log('Done getting users'),
      );

  }









}
