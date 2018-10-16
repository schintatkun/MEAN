import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cakeinfo',
  templateUrl: './cakeinfo.component.html',
  styleUrls: ['./cakeinfo.component.css']
})
export class CakeinfoComponent implements OnInit {
  @Input() displayCake: any;
  avg: number;
  constructor() { }

  ngOnInit() {
    // this.getAvgRating();
}
  //need this on every clicks, it would change
  ngOnChanges(){this.getAvgRating();}

  getAvgRating(){
    let totalRating = 0;
    for(let i = 0; i<this.displayCake.comment.length;i++){
        totalRating += this.displayCake.comment[i]['rating'];
    }
    if (totalRating!=0){
    this.avg= totalRating/this.displayCake.comment.length;
    }else{
      this.avg = 0;
    }
  }
}
