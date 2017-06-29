import { Component, OnInit } from "@angular/core"
import { ChatsService } from "../../chats.service"
import { Chat } from "../../chat"
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: "chat-list",
	templateUrl: "./chatList.component.html",
	styleUrls: ["./chatList.component.scss"]

})

export class ChatList implements OnInit{
	singleChat: Chat;

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      title: {
        title: 'Title',
        type: 'string'
      },
      message_count: {
        title: 'Message Count',
        type: 'number'
      },
      user_id: {
        title: 'User Id',
        type: 'string'
      }
    }
  };
	source: LocalDataSource = new LocalDataSource();

	constructor(private chatsService: ChatsService) {

  }

	getChats(): void {
		this.chatsService.getChats().then((data) => {
    	this.source.load(data);
      console.log(this.source)
    });
	}
	ngOnInit() {
		this.getChats()
		// Put things related to data and service calls in ngOnInit
		// this.getChats()
	}

  ngAfterViewInit() {
  	// Place things that change the screen inside ngAfterViewInit
    
  }

  onEditConfirm(event): void {
  	if (window.confirm('Done?')){
  		event.confirm.resolve();
  	}else {
  		event.confirm.reject();
  	}
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
