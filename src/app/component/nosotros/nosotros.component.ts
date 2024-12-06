import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from "../navbar/navbar.component";
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-nosotros',
  imports: [
    NavbarComponent,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatGridListModule,
  ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  team = [
    { name: 'Ana López', role: 'Fundadora', photo: 'assets/team/ana.jpg' },
    { name: 'Carlos Pérez', role: 'Diseñador', photo: 'assets/team/carlos.jpg' },
    { name: 'Luisa Fernández', role: 'Gerente de Producción', photo: 'assets/team/luisa.jpg' },
  ];
}
