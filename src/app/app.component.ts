import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NinjaGold';
  total = 0;
  activity = [];

  addFarm(){
    console.log("farm")
    let value = Math.floor((Math.random() * 5) + 1);
    this.total += value;
    this.activity.push(`You earned ${value} at the farm`);
  }

  addCave() {
    console.log("cave")
    let value = Math.floor((Math.random() * (10-5+1)) + 5);
    this.total += value;
    this.activity.push(`You earned ${value} at the cave`);
  }

  addHouse() {
    console.log("house")
    let value = Math.floor((Math.random() * (15-7+1)) + 7);
    this.total += value;
    this.activity.push(`You earned ${value} at the house`);
  }
8
  addCasino() {
    console.log("casino")
    let value = Math.floor((Math.random() * (100+100+1)) + -100);
    this.total += value;
    this.activity.push(value > 0 ? `You earned ${value} at the casino` : `You lost ${value} at the casino`)
  }

}
