if (window.location.pathname == '/about/' && (window.location.search != '' || window.location.hash != '')) {
	var resume = '<a target="view_window" href="/custom/resume.html">查看简历</a>';
	document.getElementById("resume_yeemin_wx").innerHTML = resume;
}