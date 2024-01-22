import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects = [
    {
      id: 1,
      projectName: 'Potterpedia',
      projectImg: 'assets/portfolio-img/Potterpedia.png',
      projectLink:'https://potterpedia-ten.vercel.app'
    },
    {
      id: 2,
      projectName: 'Pokedex',
      projectImg: 'assets/portfolio-img/pokedex.png',
      projectLink:'https://pokedex-ochre-alpha.vercel.app'
    },
    {
      id: 3,
      projectName: 'Potter Quiz',
      projectImg: 'assets/portfolio-img/trivia.png',
      projectLink:'https://potter-quiz.vercel.app'
    },
    {
      id: 4,
      projectName: 'Reloj Digital',
      projectImg: 'assets/portfolio-img/reloj_digital.png',
      projectLink:'https://reloj-digital-nine.vercel.app'
    },
    {
      id: 5,
      projectName: 'Clouds',
      projectImg: 'assets/portfolio-img/clouds.png',
      projectLink:'https://clouds-seven.vercel.app'
    },
    {
      id: 6,
      projectName: 'Banco Gringotts',
      projectImg: 'assets/portfolio-img/banco_gringotts.png',
      projectLink:'https://banco-gringotts.vercel.app'
    },
  ];
}
