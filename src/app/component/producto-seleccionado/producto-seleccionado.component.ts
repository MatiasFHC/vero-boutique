import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../../service/app-service.service';

@Component({
  selector: 'app-producto-seleccionado',
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    NavbarComponent
  ],
  templateUrl: './producto-seleccionado.component.html',
  styleUrl: './producto-seleccionado.component.css'
})
export class ProductoSeleccionadoComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute, 
    private productService: AppServiceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const productId = id ? +id : 0;
    this.product = this.productService.getProductById(productId);
  }
}