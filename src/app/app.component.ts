import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  // private user:User = {
    private user:any = {
    'id':2, // for update?/create/patch we need to use  id or following  add it here
    'name': 'Max Jokar Updated',
    'username': 'Maxim',
    'email': 'maksimSSSjokar@gamil.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 778787877777',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'Maxik.org',
    // 'company': {
    //   'name': 'Angular ',
    //   'catchPhrase': 'Multi-layered client-server neural-net',
    //   'bs': 'harness real-time e-markets'

    // }
  };


  constructor(private userService: UserService) {}

  //7 You can Test each of them but NOT together!
  ngOnInit(): void{
    //this.onGetUsers();
    this.OngetUsersPipeMapUpperCase(); // Uppser name in List
    // this.onGetUser();
    // this.onCreateUser();
    // this.onUpdateUser();
    // this.onPatchUser();
    // this.onDeleteUser();
    // this.onTextFile();
    //this.onGetHeader();    // we can see the content of our text.txt from assets in Browser
    //this.onGetUserParams()

  }

  //1. to call the service and subscribe to the function
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      //(error: any) => console.log(error),
      // () =>console.log('Done getting users'),

    );

  }

  //2.
  OngetUsersPipeMapUpperCase(): void {
    this.userService.getUsersPipeMapUpperCase().subscribe(
      (response) => console.table(response),
      //(error: any) => console.log(error),
      // () =>console.log('Done getting users'),

    );

  }



  //3
  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      //(error: any) => console.log(error),
      // () =>console.log('Done getting users'),
    );
    }



   //4
  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.table(response),
    //(error: any) => console.log(error),
    // () =>console.log('Done getting users'),
    );

  }

  //5 we add id  to our pyload above
  // source will not be really updated on the server but it will be faked as if
  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
    //(error: any) => console.log(error),
    // () =>console.log('Done getting users'),
    );
    }

    //6
  onPatchUser(): void {
      this.userService.patchUser(this.user).subscribe(
        (response) => console.table(response),
      //(error: any) => console.log(error),
      // () =>console.log('Done getting users'),
      );
    }

    //7
  onDeleteUser(): void {
      this.userService.deleteUser(2).subscribe(
        (response) => console.log('Response for Delete :',response),
        //(error: any) => console.log(error),
        // () =>console.log('Done getting users'),
      );
    }


  //8
  onTextFile(): void {
      this.userService.getTextFile().subscribe(
        (response) => console.log('Response:',response),
        //(error: any) => console.log(error),
        // () =>console.log('Done getting users'),
      );

    }


  //9 Get Header , Change or Append to it
  onGetHeader(): void {
      this.userService.changeUserHeaders().subscribe(
        (response) => console.table(response),
        //(error: any) => console.log(error),
        // () =>console.log('Done getting users'),

      );

  }






  //10 To pass additional information in URL  , good for filtering famous as  "query param"
  //https://jsonplaceholder.typicode.com/users?page=5&sort=true
  onGetUserParams(): void {
    this.userService.getUserParams().subscribe(
      (response) => console.log(response),
      //(error: any) => console.log(error),
      // () =>console.log('Done getting users'),
    );
    }






















}
