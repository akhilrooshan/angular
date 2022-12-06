import { JsonPipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import testj from './test.json'
@Component({
  selector: 'app-testingjson',
  templateUrl: './testingjson.component.html',
  styleUrls: ['./testingjson.component.scss']
})
export class TestingjsonComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  appk:any=testj
}
