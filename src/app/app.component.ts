import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(private loggingService: LogginService, private personasService: PersonasService) {

  }

  /**
   * Se ejecuta despues del constructor
   */
  ngOnInit():void {
    this.personas = this.personasService.personas;
  }
}
