import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // nombreInput:string;
  // apellidoInput:string;

  @ViewChild('nombreInput') nombreInput: ElementRef
  @ViewChild('apellidoInput') apellidoInput: ElementRef

  constructor(private LogginService: LogginService, private personasService: PersonasService,) {
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es: "+indice)
                );
               }

  ngOnInit(): void {
  }

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    // this.LogginService.enviaMensajConsola("Enviamos Persona con Nombre: " + persona1.nombre + " y Apellido: " + persona1.apellido);
    // this.personaCreada.emit(persona1); //-> Ahora

    this.personasService.agregarPersona(persona1);
  }

}
