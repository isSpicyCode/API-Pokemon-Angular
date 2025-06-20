import { Directive, ElementRef, HostListener, input } from '@angular/core';

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
    const color = this.getBorderColor();
    this.setBorder(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialColor;
    this.setBorder(color);
  }
  private setBorder(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }

  private getBorderColor() {
    switch (this.pokemonType()) {
      case 'Feu':
        return '#EF5350';
      case 'Feu2':
        return '#d67d4f';
      case 'Eau':
        return '#8fc3d0';
      case 'Plante':
        return '#8bc6ac';
      case 'Insecte':
        return '#8d6e63';
      case 'Vol':
        return '#90CAF9';
      case 'Poison':
        return '#89607f';
      case 'Poison2':
        return '#9e81aa';
      case 'Fée':
        return '#f8bbd0';
      case 'Electrik':
        return '#f4ff81';
      case 'Yellow':
        return '#ebd9a5';
      default:
        return '#303030';
    }
  }
}
