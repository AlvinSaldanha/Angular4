import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

    title: string = "This is a Player Component!!!!";
    imageSrc = "http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg";
    isDisabled: boolean = false;
    players: any;
    inputValue:string = "Default Value";


    constructor() {
        console.log('Constructor Called');

    }

    onButtonClick() {
        alert('Button clicked!');
    }

    ngOnInit() {
        console.log('Component Initialised');
        this.players = [
            { name: 'sachin', age: 44 },
            { name: 'dravid', age: 42 },
            { name: 'virat', age: 27 }
        ]
    }

}