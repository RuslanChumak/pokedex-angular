import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {
  @Input() url: string;
  isLoaded: boolean = false;
  ability: any;
  constructor() { }
  getAbility(){
    fetch(this.url).then(res => res.json()).then(r =>{
      this.ability = r.effect_entries.filter(item => item.language.name == 'en')
      
      this.isLoaded = true
    })
  }
  ngOnInit(): void {
    this.getAbility()
  }

}
