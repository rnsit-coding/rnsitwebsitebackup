var currentPageURL = window.location.href;    
var subMenu = $(".dropdown-menu a[href='"+currentPageURL+"']");
if(subMenu.length==0){
  $(".navbar_li li a[href='"+currentPageURL+"']").addClass('active-menu');
  $(".sidebar-nav li a[href='"+currentPageURL+"']").addClass('active-menu');
} else {
  subMenu.addClass('active-menu-maindropmenu');        
  subMenu.closest("li.dropdown").find("a:first").addClass('active-menu'); 
  /*========== FOR VERTICAL MENU =============*/
  $(".leftsidebar li a[href='"+currentPageURL+"']").addClass('active-menu-leftsidebar'); 
       
}
