!(function (j) {
	j("#toggle-sidebar").on("click", function (e) {
		if (window.innerWidth <= 991.98){
			new bootstrap.Offcanvas(j('#offcanvaseSidebar')).toggle();
		}else{
			j("#layout-sidebar").toggleClass("sidebar-toggled");
		}		
	});
})(jQuery);