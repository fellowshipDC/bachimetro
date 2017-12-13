import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

let dataArray = [69.9, 80.9];

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.styl']
})
export class GraphBarComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  var svg = d3.select('.barChart').append('svg')
              .attr("height", "200px")
              .attr("width", "100%");

      svg.selectAll("rect")
         .data(dataArray)
         .enter().append("rect")
         .attr("height", function(d,i){return d * 2})
         .attr("width","50")
         .attr("class","bar")
         .attr("fill","#e39203")
         .attr("stroke","#3d3624")
         .attr("stroke-width","3")
         .attr("x", function(d, i) {return (i * 70)})
         .attr("y", function (d,i) {return (200 - (d * 2))});
  }
}