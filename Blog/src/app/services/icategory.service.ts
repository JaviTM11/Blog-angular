import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { posts } from '../db/post.db';

@Injectable({
  providedIn: 'root'
})
export class ICategoryService {
  getAll(): Post[] {
    return posts;
  }

  constructor() { }
}
