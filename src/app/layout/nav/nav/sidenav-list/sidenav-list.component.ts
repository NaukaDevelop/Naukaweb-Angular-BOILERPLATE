import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  selectedItem = '';

  listItems = [
    { linkTitle: 'Cuestionario', linIcon: 'dashboard', link: '/layout/nav/dashboard' },
    { linkTitle: 'Monitor de órdenes', linIcon: 'store', link: '/layout/nav/order-monitor' },
    { linkTitle: 'Verificar órdenes', linIcon: 'ballot', link: '/layout/nav/order-verification' },
    { linkTitle: 'Validar embarque', linIcon: 'local_shipping', link: '/layout/nav/shipping-validation' },
    { linkTitle: 'Reporte de órdenes', linIcon: 'assignment', link: '/layout/nav/order-report' },

    { linkTitle: 'Órdenes especiales', linIcon: 'visibility_off', link: '/layout/nav/order-special' },

    { linkTitle: 'Búsqueda de productos', linIcon: 'search', link: '/layout/nav/product-finder' },
    { linkTitle: 'Órdenes con split', linIcon: 'vertical_split', link: '/layout/nav/order-split' },
  ];

  handleClick(selectedItem) {
    this.selectedItem = selectedItem.linkTitle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
