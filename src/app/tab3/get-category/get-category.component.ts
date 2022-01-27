import { Component, OnInit } from '@angular/core';
import { GetnewsService } from 'src/providers/Getnews/getnews.service';
import {RootObject,Article} from 'src/providers/Getnews/getnews.service'
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrls: ['./get-category.component.scss'],
})
export class GetCategoryComponent implements OnInit {

  constructor(public actionSheetController: ActionSheetController, private getnews:GetnewsService) { }

  

  categorized : Article[] = [];
  type: string = "general"

  

 async ngOnInit() {
  this.categorized = (await this.getnews.GetCategorizedNews(this.type)).articles;
 }


 async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Category',
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Business',
      icon: 'caret-forward-circle',
      handler: () => {
        this.categorized = [];
        this.type="business"
        this.ngOnInit();
      }
    },
    {
      text: 'Entertainment',
      icon: 'caret-forward-circle',
      handler: () => {
        this.categorized = [];
        this.type="entertainment"
        this.ngOnInit();
      }
    },
    {
      text: 'General',
      icon: 'caret-forward-circle',
      handler: () => {
        this.categorized = [];
        this.type="general"
        this.ngOnInit();
      }
    },
    {
      text: 'Health',
      icon: 'caret-forward-circle',
      handler: () => {
        this.categorized = [];
        this.type="health"
        this.ngOnInit();
      }
    },
    {
      text: 'Science',
      icon: 'caret-forward-circle',
      handler: () => {
        this.categorized = [];
        this.type="science"
        this.ngOnInit();
      }
    },
    {
      text: 'Sports',
      icon: 'caret-forward-circle',
      handler: () => {
        this.categorized = [];
        this.type="sports"
        this.ngOnInit();
      }
    },
    {
      text: 'Technology',
      icon: 'caret-forward-circle',
      handler: () => {
        this.categorized = [];
        this.type="technology"
        this.ngOnInit();
      }
    }

    
  ]
  });
  await actionSheet.present();

  const { role, data } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role and data', role, data);
}

}

