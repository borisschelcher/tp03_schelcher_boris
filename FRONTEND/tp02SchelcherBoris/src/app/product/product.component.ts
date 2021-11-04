import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonservService } from '../monserv.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private monservService: MonservService) { }

  produit$: Observable<Array<Produit>> | undefined;
  ngOnInit(): void {
    this.produit$ = this.monservService.getCatalogue();
  }

}
