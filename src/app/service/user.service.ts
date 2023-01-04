import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse}  from '@angular/common/http'; //3
import { Observable, of, pipe, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl ;
  readonly moreParams = ['test' , 'test2'] //how to use from the object
  //4 injected http client in our  user service dependency injection
  readonly  defaultImage = 'https://robohash.org/'; // to get profile picture



  constructor( private http:HttpClient) { }


 //1. Displays the last id
  getUsers(): Observable <User[]> {
    //pipe. put all operatrs together
    // tap: to take a look at our data
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')

  }

    //2.
    getUsersPipeMapUpperCase(): Observable <User[]> {
    //pipe. put all operatrs together
    // tap: to take a look at our data
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
       tap(users => console.log(users)),//take the incoming Observable/source observable



      // map all users and change the info we want to take
      map(users =>users.map(user => ({
        ...user,//give me everything on that user(copy every attribute-spread operator)
           name:user.name.toUpperCase() // names become uppercase in our list
  //       // we also can filter important/necessary datas from our users & not all datas
        // email:user.email
        // name:user.name.toUpperCase(),
        // phone:user.phone,
        // image: '${this.defaultImage}/${user.username.toLowerCase()}'

       })) )
      );


  }


  //3
  getUser(): Observable <User> {
    //return this.http.get<User[]>('${this.apiUrl}/users/1');
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');
  }


    //4
  createUser(user:User): Observable <User> {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users',user);
  }

  //5
  updateUser(user:User): Observable <User> {
    return this.http.put<User>('https://jsonplaceholder.typicode.com/users/${user.id}',user); // check has error
  }
    //6
  patchUser(user:User): Observable <User> {
    return this.http.patch<User>('https://jsonplaceholder.typicode.com/users/${user.id}',user);
  }

  //7 we dont know what we get as mentioned in doc  so set to void
  deleteUser(id: number): Observable <User> {
    // void we bellow were trying to deserialize this response value to specific
    // type, we don't know that type yet so
    return this.http.delete<User>('https://jsonplaceholder.typicode.com/users/${user.id}');
  }


  //8
  getTextFile(): Observable <string> {
    // getTextFile() {
    return this.http.get('assets/text.txt' , {responseType: 'text'});

    // Different responseType here :body of httpsResponse will be blob info/binary data
  //   getTextFile(): Observable<HttpResponse<Blob>> {
  //     // get = we make a call then we set the responseType
  //   return this.http.get('assets/text.txt' , {responseType: 'blob' ,
  //    observe:'response'});
  }












    //  returns a  http event &its gonna have an array of users inside
  getUsersHttpEvent(): Observable <HttpEvent<User[]>> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users',
    //   //reportProgress :when we upload/download very large amount of data:console type 2
    {observe: 'events',reportProgress:true});
  }




   // observable is not gonna do anything - just rethrow error
  // private handleError(error: HttpResponse): Observable<never> {
  //   if(error.status === 404) return throwError({code: 404
  //     , message : 'Page Not Found'})
  // }

    // responseType is text so we must use string for observable





  // getUserParams(): Observable <User[]> {
  //   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  //   .pipe(
  //     //catchError(this.handleError) // this function gonna take Errors

  //   );

  // }






// //3
// getUserParams(): Observable<HttpEvent><User[]>> {
//   //   let myParams = new HttpParams().set('page' ,'5').set('sort','true');
//   //   myParams = myParams.append('name','Max');
//   //   // myParams = myParams.append('name','Philip'),

//   //   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users',{params:myParams});
//   // }



//   //     let myHeaders = new HttpHeaders({ 'myheader' : 'headervalue'})
//   //     myHeaders = myHeaders.set('id', '1234'); // to make it immutable
//   //     myHeaders = myHeaders.append('id', '0000');  //just appends to 1234 0000


//     //instance of myHeaders is immutable
//     const myHeaders = new HttpHeaders({ 'myheader' : 'headervalue'});
//    // after adding option headers check Network to if its there or not
//     return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users',{headers:myHeaders}); //check for environemt apiurl doesnt navigate
//   }














}
