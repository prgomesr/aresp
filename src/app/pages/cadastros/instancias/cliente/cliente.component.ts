import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  selectedType: string;

    /*getClass() {
      return ['badge', 'badge-success'];
    }*/
    constructor() {}
  dados = [
    {id: '1', nome: 'João das Neves', cpf: '458.708.855-23', telefone: '17 3232-3232', email: 'joao@gmail.com', status: 'Em dia'},
    {id: '2', nome: 'Arya Stark', cpf: '486.307.304-63', telefone: '17 3232-3232', email: 'arya@gmail.com', status: 'Em dia'},
    {id: '1895', nome: 'Paulo Ricardo Gomes Rodrigues', cpf: '486.307.304-63', telefone: '17 99789-1990', email: 'prgomesr@gmail.com', status: 'Em dia'},
    {id: '3', nome: 'Bran Stark', cpf: '678.532.186-72', telefone: '17 3232-3232', email: 'bran@gmail.com', status: 'Em dia'},
    {id: '4', nome: 'Cersei Lannister', cpf: '947.632.614-01', telefone: '17 3232-3232', email: 'cersei@gmail.com', status: 'Inadimplente'},
    {id: '5', nome: 'Asha Greyjoy', cpf: '956.933.651-07', telefone: '17 3232-3232', email: 'asha@gmail.com', status: 'Em dia'},
    {id: '6', nome: 'Ned Stark', cpf: '583.772.451-67', telefone: '17 3232-3232', email: 'ned@gmail.com', status: 'Em dia'},
    {id: '7', nome: 'James Lannister', cpf: '551.895.858-75', telefone: '17 3232-3232', email: 'james@gmail.com', status: 'Em dia'},
    {id: '8', nome: 'Hoddor', cpf: '191.833.925-21', telefone: '17 3232-3232', email: 'hoddor@gmail.com', status: 'Cancelado'},
    {id: '9', nome: 'Sansa Stark', cpf: '736.317.189-00', telefone: '17 3232-3232', email: 'sansa@gmail.com', status: 'Cancelado'},
    {id: '10', nome: 'Robert Baratheon', cpf: '601.721.373-30', telefone: '17 3232-3232', email: 'robert@gmail.com', status: 'Inadimplente'},
    {id: '11', nome: 'Cão de Caça', cpf: '431.392.655-06', telefone: '17 3232-3232', email: 'cao@gmail.com', status: 'Cancelado'},
    {id: '12', nome: 'Night King', cpf: '787.951.982-37', telefone: '17 3232-3232', email: 'king@gmail.com', status: 'Cancelado'},
    {id: '13', nome: 'Daniela Dragão', cpf: '868.625.656-21', telefone: '17 3232-3232', email: 'daniela@gmail.com', status: 'Cancelado'},
    {id: '14', nome: 'Tyrion Lannister', cpf: '160.513.102-40', telefone: '17 3232-3232', email: 'tyrion@gmail.com', status: 'Inadimplente'}
  ]

  ngOnInit() {
  }

}
