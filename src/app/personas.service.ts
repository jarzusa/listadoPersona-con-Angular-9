import { Persona } from './persona.model';
import { LogginService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService {
    personas: Persona[] = [
        new Persona("Juan", "Perez"), 
        new Persona("Laura", "Juarez")
    ];

    saludar = new EventEmitter<number>();

    constructor(private logginService: LogginService){

    }
    agregarPersona(persona: Persona) {
        this.logginService.enviaMensajConsola("Agregamos persona: " + persona.nombre + " " + persona.apellido)
        this.personas.push(persona)
    }
}