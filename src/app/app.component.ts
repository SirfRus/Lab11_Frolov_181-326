import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {        

  counter: number = 0;  

  //Default 10 indics
  addIndics() {
    let counter: number = 0;
    
    while(this.counter<10) {
      let indic: string = Math.random() >= 0.5 ? '#6ee755':'#f05959';
      let name: string = this.names[Math.floor(Math.random()*this.names.length)];
      let div = document.createElement('div');   
      div.id = this.counter.toString();   
    
      div.innerHTML = `      
        <div class="card" style="
          background-color: ` + indic + `; 
          width: 18rem;          
          margin: 1.5em;            
          float: left;
        ">
          <div class="card-body">
            <p class="card-text">ID: ` + this.counter + `.</p>
            <p class="card-text">Name: ` + name + `.</p>
            <button id="but`+ this.counter +`" type="button" class="btn btn-outline-secondary" style="
              border: 1.5px solid black; color: black;
            ">Удалить</button>                        
          </div>      
        </div>
      `;         
      document.getElementById('maind').appendChild(div);         

      document.getElementById('but'+this.counter).addEventListener('click', () => {
        this.deleteIndic(div.id);
      });                                  

      this.idholder.push(this.counter.toString());      
      this.counter++;      
    } 
  }

  //Button action
  addIndic() {       

    let checker = true;
    let indic: string = (<HTMLInputElement>document.getElementById('exampleCheck1')).checked ? '#6ee755':'#f05959';            
    let name = (<HTMLInputElement>document.getElementById("exampleInputName1")).value;  
    let id: string = (<HTMLInputElement>document.getElementById("exampleInputID")).value;        
      
    for(let i=0; i<this.idholder.length; i++) {
      if(id != this.idholder[i]) {
        continue
      }
      else {
        (<HTMLInputElement>document.getElementById("exampleInputID")).value = '';
        return (<HTMLInputElement>document.getElementById("exampleInputID")).placeholder = 'Такой ID уже имеется.' 
      }
    }       
    if(!(+id)) {  
      (<HTMLInputElement>document.getElementById("exampleInputID")).value = '';    
      return (<HTMLInputElement>document.getElementById("exampleInputID")).placeholder = 'Задайте ID.'
    }
    if(!name.match(/^[a-zA-Z0-9а-яА-Я]+$/)) {
      (<HTMLInputElement>document.getElementById("exampleInputName1")).value = '';
      return (<HTMLInputElement>document.getElementById("exampleInputName1")).placeholder = 'Задайте имя.'
    }

    let div = document.createElement('div');     
            
    div.id = id.toString();
    div.innerHTML = `      
      <div class="card" style="
      background-color: ` + indic + `; 
      width: 18rem;          
      margin: 1.5em;            
      float: left;
      ">
        <div class="card-body">
          <p class="card-text">ID: ` + id + `.</p>
          <p class="card-text">Name: ` + name + `.</p>
          <button id="but`+ id +`" type="button" class="btn btn-outline-secondary" style="
            border: 1.5px solid black; color: black;
          ">Удалить</button>
        </div>      
      </div>        
    `;          
    
    document.getElementById('maind').appendChild(div);

    document.getElementById('but'+id).addEventListener('click', () => {
      this.deleteIndic(div.id);
    });
    this.idholder.push(id);
               
  }

  //Delete indicator
  deleteIndic(delid: string): any {
    this.idholder.forEach((item) => {
      if(delid === item) {
        const i = this.idholder.indexOf(item);
        this.idholder.splice(i, 1);
      }
    })
    document.getElementById(delid.toString()).remove();
    console.log(this.idholder);
  }

  //Data arrays
  names: string[] = ['Rock', 'Paper', 'Fortune', 'Drama', 'Version', 'Writer', 'Trainer', 'Chocolate', 'Drawer', 'Blood', 'Safety', 'Secretary', 'Ability', 'Bread', 'Currency', 'Temperature'];
  idholder: string[] = [];

}

