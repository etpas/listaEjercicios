import { Component, OnInit } from '@angular/core';
import { Ejercicio} from '../ejercicio';
import {EjercicioService} from '../ejercicio.service'

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  /*ejercicio: Ejercicio={
    id:1,
    name:"Flexiones"
  };*/

  //Ejercicios toma el valor de la collection
 // ejercicios=EJERCICIOS;

  ejercicios:Ejercicio[];

  ejercicioSeleccionado:Ejercicio;

  constructor(private ejercicioService:EjercicioService) { }

  ngOnInit(): void {
    this.ejercicios=this.ejercicioService.getEjercicios();
  }

  onSelectEjercicio(ejercicio:Ejercicio):void{
    console.log("Ejercicio seleccionado=" + ejercicio.id);
    this.ejercicioSeleccionado=ejercicio;
  }
}
