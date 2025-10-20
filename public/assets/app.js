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
    $("img").bind("contextmenu", function(event) {
        return false;
    });
    
    // CHANGING NAVBAR BACKGORUND COLOR ON SCROLL
    function changeNavbarBGOnScroll() {
        if(window.scrollY == 0) {            
            $(".navbar").css("background", "rgb(0, 0, 0, 0)");
        }
        else {
            $(".navbar").css("background", "rgb(0, 0, 0, 0.7)");
        }
    };

    // INITIALIZE ON PAGE LOAD
    changeNavbarBGOnScroll();

    // CALL FUNCTION TO CHANCGE NAVBAR BG ON SCROLL
    window.addEventListener('scroll', function() {
        changeNavbarBGOnScroll();
    });

    // MyPortfolio INDEX PAGE LINK
    $(".brand_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // DASHBOARD INDEX PAGE LINK
    $(".dashboard_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    $("#dev_nickname").text("Dianne");
    $(".dev_name").text("Dianne Russel Ocampo");

    // GITHUB PAGES DOC WEBSITE LINK
    $("#github_pages_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // Ateneo de Naga University WEBSITE LINK
    $(".adnu_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });
    $(".about_me_course").text("Bachelor of Science in Information Technology");

    // LIVERWIRE WEBSITE LINK
    $("#livewire_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // YAJRA DATATABLES WEBSITE LINK
    $("#yajra_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // LARAVEL EXCEL WEBSITE LINK
    $("#excel_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // LARAVEL ELOQUENT ORM DOC PAGE LINK
    $("#eloquent_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // LARAVEL NOTIFICATIONS DOC PAGE LINK
    $("#notif_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // Ateneo de Naga University Library WEBSITE LINK
    $(".adnu_lib_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // Ateneo de Naga University SHS Library FB LINK
    $("#adnu_shs_lib_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // SDW Web Solutions, Inc. WEBSITE LINK
    $("#sdw_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // CAPSTONE PROJECT LINK
    $("#capstone_project_link").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // GITHUB ACCOUNT LINK
    $("#dev_github_accnt").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        // OPEN THE LINK TO A NEW TAB
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    // GITLAB ACCOUNT LINK
    $("#dev_gitlab_accnt").click(function(event) {
        event.preventDefault(); // PREVENT DEFAULT ACTION TO OPEN LINK IN CURRENT WINDOW
        // OPEN THE LINK TO A NEW TAB
        window.open(this.href, "_blank"); // GET THE URL FROM href ATTRIB AND SPECIFY OPENING NEW TAB
    });

    $("#dev_email").text("diannerusselocampo@gmail.com");

    /*  COMPARING PASSWORDS  */
    // ON PASSWORD KEYUP
    $('#password').on("keyup", function() {
        var passwordVal = $('#password').val();
        var confirmPasswordVal = $('#confirm_password').val();

        if(passwordVal === confirmPasswordVal) {
            $('#password').removeClass("error-border");
            $('#confirm_password').removeClass("error-border");
            $('#password').addClass("valid-border");
            $('#confirm_password').addClass("valid-border");

        }
        else {
            $('#password').removeClass("valid-border");
            $('#confirm_password').removeClass("valid-border");
            $('#password').addClass("error-border");
            $('#confirm_password').addClass("error-border");
        }
    });
    // ON CINFIRM PASSWORD KEYUP
    $('#confirm_password').on("keyup", function() {
        var passwordVal = $('#password').val();
        var confirmPasswordVal = $('#confirm_password').val();

        if(confirmPasswordVal === passwordVal) {
            $('#password').removeClass("error-border");
            $('#confirm_password').removeClass("error-border");
            $('#password').addClass("valid-border");
            $('#confirm_password').addClass("valid-border");

        }
        else {
            $('#password').removeClass("valid-border");
            $('#confirm_password').removeClass("valid-border");
            $('#password').addClass("error-border");
            $('#confirm_password').addClass("error-border");
        }
    });
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
            $("#sidebarContent").hide();
            // SHOW NAVBAR
            $(".dash-nav").removeClass("d-none");

            // ADJUST CONTAINER TO NEW WINDOW SIZE
            $(".dash-container").css("left", "0");
            $(".dash-container").css("width", "100vw");
        }
        // IF  WINDOW SIZE IS GREATER THAN BREAKPOINT
        else {            
            // HIDE NAVBAR
            $(".dash-nav").addClass("d-none");

            // SHOW SIDEBAR FOR BIGGER SCREENS
            $("#sidebarContent").show();

            // ADJUST DASH CONTAINER TO ITS ORIGINAL SIZE
            $(".dash-container").css("left", "20vw");
            $(".dash-container").css("width", "80vw");
        }
    }

    // INITIAL CHECK ON PAGE LOAD
    applyCollapseSideBar(); 

    // CALL FUNCTIONS ON RESIZE
    $(window).on("resize", function() {
        applyCollapseSideBar();
    });

    // SHOW RATING VALUE FOR PROGRAMMING LANGUAGE
    $('.prog_ratingValue').text($('.prog_ratings').val());

    // SHOW UPDATED RATING VALUE FOR PROGRAMMING LANGUAGE UPON SLIDING
    $('.prog_ratings').on('input', function() {
        // UPDATE VALUE RATING VALUE
        $('.prog_ratingValue').text($(this).val());
    })

    // SHOW RATING VALUE FOR PROGRAMMING LANGUAGE
    $('.web_tools_ratingValue').text($('.web_tools_ratings').val());

    // SHOW UPDATED RATING VALUE FOR PROGRAMMING LANGUAGE UPON SLIDING
    $('.web_tools_ratings').on('input', function() {
        // UPDATE VALUE RATING VALUE
        $('.web_tools_ratingValue').text($(this).val());
    })
});