import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: (string|undefined)[] = ['Spiderman', 'Ironman', 'Hulk', 'Ant-Man', 'Thor']
  heroesBorrados: (string|undefined)[] = []
  cont: number = 0;

  
  borrarHeroe() {
    this.heroesBorrados[this.cont] =  this.heroes.pop();
    this.cont ++;
    console.log('heroes borrados',this.heroesBorrados);
    console.log('heroes',this.heroes);
    console.log(this.cont);
  }

  agregarHeroe() {
    this.heroes.push(this.heroesBorrados[this.cont - 1]);
    this.cont --;
  }
}
