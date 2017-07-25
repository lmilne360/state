import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

	cards = [
	{category: "Some Category", title: "Some title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis purus sed dolor varius aliquet in ut nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque purus leo, aliquam a eleifend quis, convallis in diam. Sed eu velit a odio rhoncus viverra in vitae quam. Maecenas eu lorem nisl." },
	{category: "Some Category", title: "Some title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis purus sed dolor varius aliquet in ut nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque purus leo, aliquam a eleifend quis, convallis in diam. Sed eu velit a odio rhoncus viverra in vitae quam. Maecenas eu lorem nisl." },
	{category: "Some Category", title: "Some title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis purus sed dolor varius aliquet in ut nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque purus leo, aliquam a eleifend quis, convallis in diam. Sed eu velit a odio rhoncus viverra in vitae quam. Maecenas eu lorem nisl." }
	]

  constructor() { }

  ngOnInit() {
  }

}
