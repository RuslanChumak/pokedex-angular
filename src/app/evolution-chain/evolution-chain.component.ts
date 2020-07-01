import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evolution-chain',
  templateUrl: './evolution-chain.component.html',
  styleUrls: ['./evolution-chain.component.scss']
})
export class EvolutionChainComponent implements OnInit {
  @Input() speciesUrl: string;
  evoChain: string[] = [];
  isLoaded: boolean = false;
  getSpecies(){
    fetch(this.speciesUrl).then(res => res.json()).then(r =>{
      this.getEvoChain(r.evolution_chain.url)
    })
  }
  getEvoChain(url){
    fetch(url).then(res => res.json()).then(r =>{
      let el = r.chain
      do{
        this.evoChain.push(el.species.name)
        el = el.evolves_to[0]
    }while(el !== undefined)
    this.isLoaded = true
    })
  }
  constructor() { }

  ngOnInit(): void {
    this.getSpecies()
  }

}
