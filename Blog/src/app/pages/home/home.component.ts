import { PostService } from './../../services/post.service';
import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router) { }

  arrPost: Post [] = []

  PostService = inject(PostService);
posts: any;

  ngOnInit() {
    this.arrPost = this.PostService.getAll();
  }

  onSelectChange(event: Event) {
    const valor = (event.target as HTMLSelectElement).value;
    console.log('Cambió a:', valor);
    if (valor === 'All') {
      this.arrPost = this.PostService.getAll();
    } else {
      this.arrPost = this.PostService.getAll().filter((post) => post.category.title === valor);
    }
  }

  goToPost(id: number) {
    this.router.navigate(['/post', id]);
  }
  

}
