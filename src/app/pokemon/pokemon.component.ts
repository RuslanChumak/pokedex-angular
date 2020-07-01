import { Component, OnInit, Input } from '@angular/core';
import {PokemonModalComponent} from '../pokemon-modal/pokemon-modal.component'
import {MatDialog} from '@angular/material/dialog'


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss', '../colors.scss'],
  
})
export class PokemonComponent implements OnInit {
  @Input() info: any;
  pokemon: any
  isLoaded: boolean = false;
  isImg: boolean = false;
  constructor(public dialog: MatDialog) {}
  getPokemonInfo(){
    
    fetch(this.info.url).then(res => res.json()).then(r =>{
      this.pokemon = r
      this.isLoaded = true
      if(r.sprites.front_default != null)
        this.isImg = true
    })
  }
  ngOnInit(): void {
    this.getPokemonInfo()
  }

  handleDetails(){
    let dialogRef = this.dialog.open(PokemonModalComponent, {
      height: '520px',
      width: '600px',
      data: this.pokemon
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
