import { Component, OnInit } from '@angular/core';
import { ICompound, Compound } from '../compound.model';
import { CompoundService } from '../services/compound.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.scss']
})
export class CompoundDetailComponent implements OnInit {
  private theHtmlString: string;
  private currentCompound: ICompound = new Compound();
  private id: number;

  constructor(private compoundService: CompoundService, private route: ActivatedRoute) {
    this.theHtmlString = '<ul><li>aaa</li><li>bbb</li></ul>';
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = +params.get('id');
      this.getCompound();
    });
  }

  getCompound() {
    this.compoundService.getCompound(this.id).subscribe(data => {
      this.currentCompound = data;
    });
  }

}
