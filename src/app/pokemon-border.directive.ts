import { Directive, ElementRef, HostListener, input } from '@angular/core';
import {getPokemonColor} from './pokemon.model';

@Directive({
  selector: '[appPokemonBorder]',
})
export class PokemonBorderDirective {
  private readonly initialColor: string;
  pokemonType = input.required<string>()

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor = 'transparent';
    this.el.nativeElement.style.borderWidth = '2px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    const color = getPokemonColor(this.pokemonType());
    this.setBorder(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialColor;
    this.setBorder(color);
  }
  private setBorder(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }
}
