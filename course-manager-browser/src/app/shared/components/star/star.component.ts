import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: 'star.component.html',
    styleUrls: ['start.component.css']
})
export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    startWidth: number;

    ngOnChanges(changes: SimpleChanges): void {
        this.startWidth = this.rating * 74 / 5;
    }
    
}