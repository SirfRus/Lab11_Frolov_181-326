import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {        

  ngOnInit() {
    this.addIndics();
  }
  @ViewChild('idinput') idinput: ElementRef;
  @ViewChild('nameinput') nameinput: ElementRef;
  @ViewChild('indicinput') indicinput: ElementRef;
  
  checker: boolean = false;
  counter: number = 0;    

  //Default 10 indics
  addIndics() {    
    
    while(this.counter<10) {      
      let indic: string = Math.random() >= 0.5 ? '#6ee755':'#f05959';
      let name: string = this.names[Math.floor(Math.random()*this.names.length)];
      this.cardsholder.push({ id: this.counter.toString(), color: indic, name: name }); 
      console.log(this.cardsholder);         
      this.counter++;                   
    } 
  }

  //Button action
  addIndic() {       
        
    let indic: string = this.indicinput.nativeElement.checked ? '#6ee755':'#f05959';
    let name: string = this.nameinput.nativeElement.value;
    let id: string = this.idinput.nativeElement.value;                  
      
    for(let i=0; i<this.cardsholder.length; i++) {
      if(id != this.cardsholder[i].id) {
        continue
      }
      else {
        this.idinput.nativeElement.value = '';     
        return this.idinput.nativeElement.placeholder = 'Этот ID уже занят'
      }
    }
    if(!id.match(/^[0-9]+$/)) {
      this.idinput.nativeElement.value = '';
      return this.idinput.nativeElement.placeholder = 'Некорректный ID'
    }
    if(!name.match(/^[a-zA-Z0-9а-яА-Я]+$/)) {
      this.nameinput.nativeElement.value = '';
      return this.nameinput.nativeElement.placeholder = 'Некорректное имя'
    }     

    this.cardsholder.push({ id: id, color: indic, name: name });    
    this.checker = true;
    this.checker = false;    
  }

  //Delete indicator
  deleteIndic(delid: string) {
    this.cardsholder.forEach((item, i) => {
      if(delid === item.id) {        
        this.cardsholder.splice(i, 1);
      }
    })        
  }

  //Data arrays
  names: string[] = ['Rock', 'Paper', 'Fortune', 'Drama', 'Version', 'Writer', 'Trainer', 'Chocolate', 'Drawer', 'Blood', 'Safety', 'Secretary', 'Ability', 'Bread', 'Currency', 'Temperature'];  
  cardsholder: {id: string, name: string, color: string}[] = [];
}

