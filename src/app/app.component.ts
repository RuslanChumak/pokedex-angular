import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';
import {PokemonComponent} from './pokemon/pokemon.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})

export class AppComponent {
  result: Object[];
  totalPages: number
  searchValue: string = '';
  title = 'Pokemons';
  allPokemons: any;
  filteredPokemons: any;
  pokemonsOfType: any;
  pageIndex: number = 0;
  pageSize: number = 10;
  type: string = 'none'
  types: any = [];
  getAllPokemons(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=999&offset=0`).then(res => res.json()).then(r =>{
      this.allPokemons = r.results
      this.pokemonsOfType = r.results
      this.totalPages = r.count
      this.handleSearch()
      this.itemsInPage(0, 10)
    })
  }
  getTypes(){
    fetch(`https://pokeapi.co/api/v2/type`).then(res => res.json()).then(r =>{
        this.types = r.results
      })
  }
  typeOnChange(){
    
    if(this.type == 'none'){
      this.pokemonsOfType = this.allPokemons
      this.handleSearch()
    }
    else{
      fetch(`https://pokeapi.co/api/v2/type/${this.type}`).then(res => res.json()).then(r =>{
        this.pokemonsOfType = r.pokemon.map(item => item.pokemon)
        this.handleSearch()
      })
    }  
  }
  itemsInPage(page, limit){
    this.result = this.filteredPokemons.slice(page * limit, (page + 1) * limit)
  }
  
  page(obj: any){
    this.pageIndex = obj.pageIndex
    this.pageSize = obj.pageSize
    this.itemsInPage(obj.pageIndex, obj.pageSize)
    
  }
  ngOnInit(){
    this.getTypes()
    this.getAllPokemons()
  }
  handleSearch(){
    
      this.filteredPokemons = this.pokemonsOfType.filter(item =>item.name.indexOf(this.searchValue) === -1 ? false : true)
      this.totalPages = this.filteredPokemons.length
      this.pageIndex = 0
      this.pageSize = 10
      this.itemsInPage(this.pageIndex, this.pageSize)
    }
      
}
