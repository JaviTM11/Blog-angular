import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(private postService: PostService, private router:Router) { }

  

  form: FormGroup = new FormGroup({
    title: new FormControl(),
    text: new FormControl(),
    author: new FormControl(),
    image: new FormControl(),
    date: new FormControl(),
    category: new FormControl({id: 0, name: ''}),
  });

  onSubmit(){
    console.log(this.form.value);
    this.postService.insert({...this.form.value, category: {id:0, title: this.form.value.category}});
    this.form.reset();
    this.router.navigate(['/home']);
  }
      

}
