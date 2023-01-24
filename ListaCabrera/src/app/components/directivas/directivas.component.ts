import { Component } from '@angular/core';
import { Estudiante } from 'src/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  

  listaEstudiantes: Array<Estudiante> = [
    {
      nombre: 'María Emilia Cabrera',
      legajo: 112077,
      notaUno: 1,
      notaDos: 1,
      notaTres: 1,
      calcularPromedio() {
        return (this.notaUno + this.notaDos + this.notaTres) / 3
      },
      
    },
    {
      nombre: 'Gastón Agustin Contreras',
      legajo: 112080,
      notaUno: 5,
      notaDos: 10,
      notaTres: 3,
      calcularPromedio() {
        return (this.notaUno + this.notaDos + this.notaTres) / 3
      },
      
    },
    {
      nombre: 'Fatima del Rosario Cabrera',
      legajo: 113077,
      notaUno: 10,
      notaDos: 9,
      notaTres: 5,
      calcularPromedio() {
        return (this.notaUno + this.notaDos + this.notaTres) / 3
      },
      
    },
    {
      nombre: 'Priscila Amalia Frias',
      legajo: 125682,
      notaUno: 10,
      notaDos: 10,
      notaTres: 10,
      calcularPromedio() {
        return (this.notaUno + this.notaDos + this.notaTres) / 3
      },
      
    },
    {
      nombre: 'Alejandra Trinidad Gimenez',
      legajo: 20563,
      notaUno: 9,
      notaDos: 7,
      notaTres: 6,
      calcularPromedio() {
        return (this.notaUno + this.notaDos + this.notaTres) / 3
      },
      
    }
  ]
}
