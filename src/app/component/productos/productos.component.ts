import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [
    NavbarComponent,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  products = [
    {
      id: 1,
      name: 'Monedero de Lana',
      price: 25.0,
      image: 'monedero.png',
      description: 'Monedero hecho a mano con lana de alta calidad.',
      additionalImages: ['monedero1.png', 'monedero2.png', 'monedero3.png']
    },
    {
      id: 2,
      name: 'Muñeco de Lana',
      price: 45.0,
      image: 'muñeca.png',
      description: 'Muñeco tejido con detalles encantadores.',
      additionalImages: ['muñeca1.png', 'muñeca2.png', 'muñeca3.png']
    },
    {
      id: 3,
      name: 'Bufanda de Lana',
      price: 35.0,
      image: 'bufanda.png',
      description: 'Bufanda suave y cómoda para el invierno.',
      additionalImages: ['bufanda1.png', 'bufanda2.png', 'bufanda3.png']
    },
  ];
}
