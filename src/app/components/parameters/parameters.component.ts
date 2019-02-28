import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  name: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe( (params: ParamMap) => {
      if (params.has('name')) {
        this.name = params.get('name');
      }
    });

  }

  public back(): void {
    this.router.navigate(['/parameters']);
  }

}
