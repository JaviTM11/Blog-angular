import { Post } from './../interfaces/post.interface';
import { Injectable } from '@angular/core';
import { posts } from '../db/post.db';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  Post: Post[] = posts;
  getAll(): import("../interfaces/post.interface").Post[] {
    return this.Post
  }

  insert(post: Post){
    this.Post.push(post)
  }

  

  
}
