import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];

  constructor(private loggingService: LogginService) {

  }

  onPersonaAgregada(persona: Persona) {
    this.loggingService.enviaMensajConsola("Agregamos al arreglo la nueva persona: " + persona.nombre)
    this.personas.push(persona)
  }
}
