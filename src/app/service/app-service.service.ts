import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  products = [
    {
      id: 1,
      name: 'Monedero de Lana',
      price: 25.0,
      image: 'monedero.png',
      description: 'Monedero hecho a mano con lana de alta calidad.',
      additionalImages: ['monedero.png', 'monedero.png', 'monedero.png'],
    },
    {
      id: 2,
      name: 'Muñeco de Lana',
      price: 45.0,
      image: 'muñeca.png',
      description: 'Muñeco tejido con detalles encantadores.',
      additionalImages: ['muñeca.png', 'muñeca.png', 'muñeca.png'],
    },
    {
      id: 3,
      name: 'Bufanda de Lana',
      price: 35.0,
      image: 'bufanda.png',
      description: 'Bufanda suave y cómoda para el invierno.',
      additionalImages: ['bufanda.png', 'bufanda.png', 'bufanda.png'],
    },
  ];

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}