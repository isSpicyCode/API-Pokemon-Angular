import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PokemonService} from '../../pokemon.service';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-pokemon-edit',
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './pokemon-edit.component.html',
  styleUrl: './pokemon-edit.component.scss'
})
export class PokemonEditComponent {
  readonly route = inject(ActivatedRoute); /* injection de la route */
  readonly pokemonService = inject(PokemonService); /* injection du pokemon service */
  readonly pokemonId = Number(this.route.snapshot.paramMap.get('id')); /* récupère pokemon id */
  readonly pokemon = signal(this.pokemonService.getPokemonById(this.pokemonId)).asReadonly();
  /* Lire dans le service pokemon qui a l'id 1 */

  readonly pokemonForm = new FormGroup({
    name: new FormControl(this.pokemon().name),
    life: new FormControl(this.pokemon().life),
    damage: new FormControl(this.pokemon().damage),
    types: new FormArray(this.pokemon().types.map(type => new FormControl(type))),
  });

  get pokemonTypeList(): FormArray {
    return this.pokemonForm.get('types') as FormArray;
  }
  isPokemonTypeSelected(type: string): boolean {
    return !!this.pokemonTypeList.controls.find(control => control.value === type);
  };

  onPokemonTypeChange(type: string, isChecked: boolean) {
    if (isChecked) {
      const control = new FormControl(type);
      this.pokemonTypeList.push(control);
    } else {
      const index = this.pokemonTypeList.controls.map(control => control.value).indexOf(type);
      this.pokemonTypeList.removeAt(index);
    }
  }

  onSubmit(){
    console.log(this.pokemonForm.value);
  }
}

