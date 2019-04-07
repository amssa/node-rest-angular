import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'McDonalds near me';
  searchForm: FormGroup;
  message: string;
  hide: boolean = false;
  mcDonalds: any[] =[] ;
 //latitude = -28.68352;
//longitude = -147.20785;


/* markers = [

    { lat: 22.33159, long: 105.63233, alpha: 1 },
    { lat: 7.92658, long: -12.05228, alpha: 1 },
    
  ]; */


  constructor(private formBuilder: FormBuilder, 
              private searchService: SearchService, 
             ) { }

  ngOnInit() {
  	this.initForm();
  }
  initForm(){
  	this.searchForm = this.formBuilder.group({
 		search: ['', [Validators.required, Validators.pattern(/[A-Z]{2}/)]]
  	});
  }

  OnSubmit(){
  	const search = this.searchForm.get('search').value;
    
  	this.searchService.findMc(search).subscribe((response)=>{ 
    	this.mcDonalds =  Object.values(response);
    	this.message = this.mcDonalds.length<=0 ? "try again with an other city in the U.S" : search; 
      this.hide = false;
    },(error) => {
        console.log('error is ', error)
    });
  }
  
  onHide(){
    this.hide = true;
  }
}
