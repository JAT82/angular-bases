import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesName: string[]=['Spiderman','Ironman','Hulk','Thor','She Hulk'];
  public deleteHeroe?: string;

  removeLastHeroe():void{
    this.deleteHeroe = this.heroesName.pop();
  }

}
