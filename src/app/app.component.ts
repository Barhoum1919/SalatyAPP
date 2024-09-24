import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PrayerService } from './service/prayer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[PrayerService]
})
export class AppComponent implements OnInit{
  title = 'Salaty';
  cityName : string = '';
  countryName : string = '';
  date!:string;
  prayerData:any;
 constructor(private prayerservice:PrayerService){}
 ngOnInit(): void {
  this.setCurrentDate();
 }
 
 getprayer(date:string){

 this.prayerservice.getPrayer(this.cityName,this.countryName,date).subscribe(res =>
   {
  this.prayerData = res.data.timings;
  console.log(res.data);
  
  

 }) }

 setCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(today.getDate()).padStart(2, '0');

  this.date = `${year}-${month}-${day}`; // Format as YYYY-MM-DD
}



 onSubmit(){
  this.getprayer(this.date);
 }
  
}
