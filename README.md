# Angularhttp

Angular Http API 
In this project  we have a service  with http calls inside 
 am trying to use Http API to manipulate datas and the following actions:
Configuration In App.module.ts is following:
HttpClientModule //2
And later for interceptors we also need :
import { TestInterceptor } from './interceptor/test.interceptor';

providers: [{ provide :HTTP_INTERCEPTORS, useClass:TestInterceptor ,multi: true}],

Free fakeAPI for testing and protptyping :  www.jsonplaceholder.typicode.com 
To transform types we can use :  www.transform.tools  we use to make json for Typescript.

Almost all Angular applications need to make HTTP requests to a back-end web API to retrieve, save, update, and delete data (CRUD Operations). POST − Create GET − Read PUT − Update DELETE – Delete , Patch

Prerequisites 
RESTful CRUD Operations 
 Angular HTTP API 
Angular Services 
Injecting HTTP Client 
JSON Placeholder 
Mapping HTTP Response
Subscribing to Observables 
HTTP Headers 
HTTP Events
Data Manipulation 
Reactive Programming 
 Error Catch and Replace
 Angular Interceptor 


