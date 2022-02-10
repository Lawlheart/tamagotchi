import { Component, Input, OnInit } from '@angular/core';
import { PetModel } from 'src/app/shared/pet.model';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {
  @Input() pet!: PetModel;

  constructor() { }

  ngOnInit(): void {
  }

}
