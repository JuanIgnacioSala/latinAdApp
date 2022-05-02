import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType, Species } from '../../interface/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  public pokemons: Species[] = [];
  public selectedPokemon!: Pokemon;
  public nextValue: string = '';
  public previousValue: string = '';
  public total: number = 0;
  public counter: number = 10;

  constructor(
    private pokemonService: PokemonService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((resp: PokemonType) => {
      this.pokemons = resp.results;
      this.nextValue = resp.next;
      this.previousValue = resp.previous;
      this.total = resp.count;
    });
  }

  getNextOrPrevious(np: string, type: string) {
    this.pokemonService.getNPPokemons(np).subscribe((resp: PokemonType) => {
      this.pokemons = resp.results;
      this.nextValue = resp.next;
      this.previousValue = resp.previous;
      if (type == 'next') {
        this.counter = this.counter + 10;
      } else {
        this.counter = this.counter - 10;
      }
    });
  }

  open(content: any, url: string) {
    this.pokemonService.getPokemonByUrl(url).subscribe((resp: Pokemon) => {
      this.selectedPokemon = resp;
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    });
  }
}
