import {Component} from 'angular2/core';
import {RouteConfig, Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {FirebaseService, FirebaseArray} from 'firebase-angular2/core';
import { CollectionService, Collection } from '../services/collection.service'
import { DataTableComponent } from '../_widgets/data-table';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'hello-world',
  // Location of the template for this component
  templateUrl: 'app/hello_world/hello_world.html'
  providers: [CollectionService]
  directives: [DataTableComponent]
})
export class HelloWorld {
  // Declaring the variable for binding with initial value
  private yourName: string = '';
  private email: string = '';
  private pwd: string = '';
  private login_error: string = '';

  private firebaseService: FirebaseService;
  collections: Collection[];

  constructor(
    firebaseService: FirebaseService,
    private _router: Router,
    private routeParams: RouteParams
    private _collectionService: CollectionService
   ){
      //console.log(_router);
      //super();
      this.firebaseService = firebaseService;

      this.title = 'Collections';
      this.collections = this._collectionService.getCollections();
      this.columns = this._collectionService.getColumns();
    };

  public save(){
    return this.firebaseService.child('data').asArray().add({
      name: this.yourName
    });
  }

  public connect(){
    let base = new Firebase('https://luminous-heat-6510.firebaseio.com/');//this.firebaseService.firebase();

    base.authWithPassword({
      email    : this.email,
      password : this.pwd
    },(error, authData)=>{
      if (error) {
        console.log("Login Failed!", error);
        this.login_error = error;
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  }

}
