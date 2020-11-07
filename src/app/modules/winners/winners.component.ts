import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const tableau: any;
@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styles: [
    `
    .vizCon {
      display: flex;
      justify-content: center;

    }
    `
  ]
})
export class WinnersComponent implements OnInit, AfterViewInit {
  @ViewChild('vizContainer') vizContainer: ElementRef;
  viz: any;

  constructor() { }

  ngOnInit(): void {
  }



  ngAfterViewInit() {

    this.initViz();
  }

  initViz() {
    const contanerViz = this.vizContainer.nativeElement;

    const url = 'https://public.tableau.com/views/WordcupMap/WinnerRunners-Up?:language=en&:display_count=y&publish=yes&:toolbar=n&:origin=viz_share_link';
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
