import {Injectable} from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private _notifications = [
    {
      name: 'Vlad',
      text: 'Vlad posted a new article.',
      time: '1 min ago'
    },
    {
      name: 'Kostya',
      text: 'Kostya changed his contact information.',
      time: '2 hrs ago'
    },
    {
      image: 'assets/img/shopping-cart.svg',
      text: 'New orders received.',
      time: '5 hrs ago'
    }
  ];

  private _messages = [
    {
      name: 'Nasta',
      text: 'After you get up and running, you can place Font Awesome icons just about...',
      time: '1 min ago'
    },
    {
      name: 'Vlad',
      text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
      time: '2 hrs ago'
    }
  ];

  public getMessages():Array<Object> {
    return this._messages;
  }

  public getNotifications():Array<Object> {
    return this._notifications;
  }
}
