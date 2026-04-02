import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCasePipe],
  templateUrl: 'app.html',
  styleUrl: 'app.css',
})
export class App {
  quotes: Quote[] = [
    {
      id: 1,
      quote:
        "I've learned that people will forget what you said, but people will never forget how you made them feel.",
      author: 'Maya Angelou',
    },
    {
      id: 2,
      quote: 'If you have some power, then your job is to empower somebody else.',
      author: 'Toni Morrison',
    },
    {
      id: 3,
      quote: 'Nothing in life is to be feared, it is only to be understood.',
      author: 'Marie Curie',
    },
    { id: 4, quote: 'I never painted dreams. I painted my own reality.', author: 'Frida Kahlo' },
    {
      id: 5,
      quote: 'You must never be fearful about what you are doing when it is right.',
      author: 'Rosa Parks',
    },
    {
      id: 6,
      quote: 'One child, one teacher, one book, one pen can change the world.',
      author: 'Malala Yousafzai',
    },
    { id: 7, quote: 'When they go low, we go high.', author: 'Michelle Obama' },
    {
      id: 8,
      quote: "The most important thing about a person is always the thing you don't know.",
      author: 'Chimamanda Ngozi Adichie',
    },
    { id: 9, quote: 'You cannot find peace by avoiding life.', author: 'Virginia Woolf' },
    { id: 10, quote: 'One is not born a woman, one becomes one.', author: 'Simone de Beauvoir' },
    {
      id: 11,
      quote:
        'It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.',
      author: 'Audre Lorde',
    },
    {
      id: 12,
      quote:
        'Fight for the things that you care about, but do it in a way that will lead others to join you.',
      author: 'Ruth Bader Ginsburg',
    },
    { id: 13, quote: 'Every great dream begins with a dreamer.', author: 'Harriet Tubman' },
    {
      id: 14,
      quote: 'The most courageous act is still to think for yourself. Aloud.',
      author: 'Coco Chanel',
    },
    {
      id: 15,
      quote: 'The biggest adventure you can take is to live the life of your dreams.',
      author: 'Oprah Winfrey',
    },
    {
      id: 16,
      quote:
        'The most radical revolutionary will become a conservative the day after the revolution.',
      author: 'Hannah Arendt',
    },
    {
      id: 17,
      quote: 'The most difficult thing is the decision to act. The rest is merely tenacity.',
      author: 'Amelia Earhart',
    },
    { id: 18, quote: 'Love is an action, never simply a feeling.', author: 'bell hooks' },
    {
      id: 19,
      quote:
        'In the course of history, there comes a time when humanity is called to shift to a new level of consciousness.',
      author: 'Wangari Maathai',
    },
    {
      id: 20,
      quote: "I don't want to go to heaven. None of my friends are there.",
      author: 'Astrid Lindgren',
    },
  ];

  favQuotes: Quote = this.quotes.filter((quote) => quote.id == 14)[0];
}

interface Quote {
  id: number;
  author: string;
  quote: string;
}
