import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public selectedPokemon!: Pokemon;
  public modalEnable: boolean = false;
  public modalError: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  open(content: any, name: string) {
    this.pokemonService.getPokemonByName(name).subscribe(
      (resp: Pokemon) => {
        this.modalError = false;
        this.modalEnable = true;
        this.selectedPokemon = resp;
        this.modalService.open(content, {
          ariaLabelledBy: 'modal-basic-title',
        });
      },
      (err) => {
        this.modalEnable = false;
        this.modalError = true;
        this.modalService.open(content, {
          ariaLabelledBy: 'modal-basic-title',
        });
      }
    );
  }
}
