/**
 * Purpose: Showcase skills using web development tools for Github Pages
 *      - HTML
 *      - CSS
 *      - BOOTSTRAP
 *      - JAVASCRIPT/JQUERY
 *      
 * Developer:       Dianne Russel P. Ocampo
 * Github Account:  abitsurrel
 * Email:           dianerusselocampo@gmail.com
 * 
 * This file includes: Customize Javascript/JQuery for personal portfolio
 * Sources used:
 *      - https://w3schools.com
 *      - https://jquery.com/download/
 *      - https://getbootstrap.com/
 *  GIF:    
 *      - https://emojiterra.com/waving-hand-medium-light-skin-tone/
 *  IMG:
 *      - ATENEO DE NAGA UNIVERSITY: 
 *        https://postgradaustralia.com.au/institutions/ateneo-de-naga-university
 * DO NOT COPYRIGHT
 */
// document.getElementById("dev_name").innerText = "Dianne";
$(document).ready(function(){
    /**
     * 
     *  PORTFOLIO LANDING PAGE
     * 
     */

    // PREVENT USERS TO DOWNLOAD IMAGES
    $('img').bind('contextmenu', function(event) {
        return false;
    });

    // DASHBOARD INDEX PAGE LINK
    $(".dashboard_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    $("#dev_nickname").text("Dianne");
    $(".dev_name").text("Dianne Russel Ocampo");

    // GITHUB PAGES DOC WEBSITE LINK
    $("#github_pages_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // Ateneo de Naga University WEBSITE LINK
    $(".adnu_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });
    $(".about_me_course").text("Bachelor of Science in Information Technology");

    // LIVERWIRE WEBSITE LINK
    $("#livewire_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // YAJRA DATATABLES WEBSITE LINK
    $("#yajra_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // LARAVEL EXCEL WEBSITE LINK
    $("#excel_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // LARAVEL ELOQUENT ORM DOC PAGE LINK
    $("#eloquent_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // LARAVEL NOTIFICATIONS DOC PAGE LINK
    $("#notif_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // Ateneo de Naga University Library WEBSITE LINK
    $(".adnu_lib_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // Ateneo de Naga University SHS Library FB LINK
    $("#adnu_shs_lib_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // SDW Web Solutions, Inc. WEBSITE LINK
    $('#sdw_link').click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // CAPSTONE PROJECT LINK
    $('#capstone_project_link').click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // GITHUB ACCOUNT LINK
    $('#dev_github_accnt').click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        // OPEN THE LINK TO A NEW TAB
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // GITLAB ACCOUNT LINK
    $('#dev_gitlab_accnt').click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        // OPEN THE LINK TO A NEW TAB
        window.open(this.href, '_blank'); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    $("#dev_email").text("diannerusselocampo@gmail.com");
    
    /**
     * 
     *  PORTFOLIO DASHBOARD
     * 
     */

    // INITIALIZE BREAKPOINT
    var breakpoint = 768;

    // CHECK FOR WINDOW RESIZE
    function applyCollapseSideBar() {
        // CHECK IF WINDOW SIZE IS LESS THAN THE BREAKPOINT
        if($(window).width() < breakpoint) {
            // HIDE SIDEBAR
            $('#sidebarContent').hide();
            // SHOW NAVBAR
            $('.dash-nav').show();

            // ADJUST CONTAINER TO NEW WINDOW SIZE
            $('.dash-container').css("left", "10px");
            $('.dash-container').css("width", "95vw");
        }
        // IF  WINDOW SIZE IS GREATER THAN BREAKPOINT
        else {            
            // HIDE NAVBAR FOR SMALL SCREENS
            $('.dash-nav').hide();
            // SHOW SIDEBAR FOR BIGGER SCREENS
            $('#sidebarContent').show();

            // ADJUST DASH CONTAINER TO ITS ORIGINAL SIZE
            $('.dash-container').css("left", "20vw");
            $('.dash-container').css("width", "80vw");
        }
    }

    // INITIAL CHECK ON PAGE LOAD
    applyCollapseSideBar(); 

    // function resizeHomeContent() {
    //     var windowWidth = $(window).width();
    //     $('#home').width(windowWidth);
    // }

    // INITIAL CHECK ON PAGE LOAD
    // resizeHomeContent();

    // CALL FUNCTIONS ON RESIZE
    $(window).on('resize', function() {
        applyCollapseSideBar();
    });

});