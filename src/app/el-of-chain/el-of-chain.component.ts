import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-el-of-chain',
  templateUrl: './el-of-chain.component.html',
  styleUrls: ['./el-of-chain.component.scss']
})
export class ElOfChainComponent implements OnInit {
  @Input() name: string;
  imageSrc: string;
  isLoaded: boolean = false;
  constructor() { }
  getImage(){

    fetch("https://pokeapi.co/api/v2/pokemon/"+this.name).then(res => res.json()).then(r =>{
      this.imageSrc = r.sprites.front_default
      this.isLoaded = true
    })
  }
  ngOnInit(): void {
    this.getImage()
  }

}
