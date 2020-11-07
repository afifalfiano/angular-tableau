import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const tableau: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .vizCon {
      display: flex;
      justify-content: center;

    }
    `
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('vizContainer') vizContainer: ElementRef;
  viz: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.initViz();
  }

  initViz() {
    const contanerViz = this.vizContainer.nativeElement;

    const url = 'https://public.tableau.com/views/WordcupMap/Wordmap?:language=en&:display_count=y&publish=yes&:toolbar=n&:origin=viz_share_link';
    const options = {
      hideTabs: true,
      hideToolbar: true,
      width: '100%',
      height: '780px',
      onFirstInteractive: () => {

      }
    };
    this.viz = new tableau.Viz(contanerViz, url, options);
  }

}
