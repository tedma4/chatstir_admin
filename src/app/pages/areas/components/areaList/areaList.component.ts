import { Component, OnInit } from "@angular/core"
import { AreasService } from "../../areas.service"
import { Area } from "../../area"
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: "area-list",
	templateUrl: "./areaList.component.html",
	styleUrls: ["./areaList.component.scss"]

})

export class AreaList implements OnInit{
	singleArea: Area;

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
      id: {
        title: 'ID',
        type: 'number'
      },
      title: {
        title: 'Title',
        type: 'string'
      },
      level: {
        title: 'Level',
        type: 'string'
      },
      dot_count: {
        title: 'Dot Count',
        type: 'string'
      }
    }
  };
	source: LocalDataSource = new LocalDataSource();

	constructor(private areasService: AreasService) {

  }

	getAreas(): void {
		this.areasService.getAreas().then((data) => {
    	this.source.load(data);
      console.log(this.source)
    });
		// this.areasService
		// .getAreas()
		// .then(areas => this.source = areas)
	}
	ngOnInit() {
		this.getAreas()
		// Put things related to data and service calls in ngOnInit
		// this.getAreas()
	}

  ngAfterViewInit() {
  	// Place things that change the screen inside ngAfterViewInit
    
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
