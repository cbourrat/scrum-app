import { Component, OnInit } from '@angular/core';
import { QueteService } from '../_services/quete.service';

@Component({
  selector: 'quete',
  templateUrl: './quete.component.html',
  providers: [QueteService],
  styleUrls: ['./quete.component.css']
})
export class QueteComponent {

  tittle = "quete works! ;)";
  quetes: Array<any>;

  constructor(private queteService: QueteService) {
      queteService.getQuetes().subscribe(response => {
          this.quetes = response
      })
  }

  viewQuete(){
      console.log('in component quete');
      this.queteService.getQuetes().subscribe(data => {
          //this.specificHumanAge = data.age;
          //this.specificHumanName = data.name;
      });
  }

}
