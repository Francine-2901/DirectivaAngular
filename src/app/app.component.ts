import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;
  title: any;
  nome = 'Francine Almeida'
  text: string = '';

  pessoas = [
    {
        nome: 'Francine',
        sobrenome: 'Almeida'
    },
    {
        nome: 'Harry',
        sobrenome: 'Potter'
    },
    {
        nome: 'Hermione',
        sobrenome: 'Granger'
    },
    {
        nome: 'Rony',
        sobrenome: 'Weasley'
    }
  ];

  constructor() {

  }

  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval(() => {
        this.count++;
        if(this.count === 10) {
            clearInterval(interval);
        }
    }, 1000)
  }

  clicou(nome: string): void{
    console.log('Clicou em mim', nome)
  }
}