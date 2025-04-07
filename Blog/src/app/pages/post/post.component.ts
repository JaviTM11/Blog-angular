import { PostService } from './../../services/post.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  id!: string;
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('idpost')!;
    console.log('ID recibido:', this.id);
    this.postService.getAll()
      .filter((post) => post.id == Number(this.id))
      .forEach((post) => {
        this.post = post;
        console.log('Post encontrado:', this.post);
      });
}

}
