import { Injectable, Inject } from "@angular/core";
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  private mensagem: firebase.messaging.Messaging;

  constructor(
    @Inject(FirebaseApp) private firebaseApp: firebase.app.App
  ) {
    this.mensagem = firebase.messaging(this.firebaseApp);
    this.mensagem.requestPermission()
      .then(() => this.mensagem.getToken())
      .then(token => console.log(token));
  }
}