import { Component } from '@angular/core';
import {Router} from '@angular/router';

declare var jQuery:any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent {

    constructor(private router: Router) {}

    ngAfterViewInit() {
        //jQuery('#side-menu').metisMenu();
    jQuery('#side-menu').metisMenu({
            toggle: true, // disable the auto collapse. Default: true.
    });

    jQuery('#side-menu ul li').click(function() {

         // remove active class
        //  jQuery('#side-menu li a').removeClass('active');
        //  // add active class
        //  jQuery(this).addClass('active');

        //   // remove active class
        //   jQuery('#side-menu li ul').removeClass('in');
        //   // add active class
        //   jQuery(this).addClass('in');

       // jQuery(this).parent().addClass('active').siblings().removeClass('active');

        // $('#side-menu').removeClass('in');
        // $(this).addClass("active");
        // $(this).closest('ul').addClass('in');
});
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }


}