'use strict';

(function () {

	$("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
	$("#menu").click(function(){
		$("#nav").toggle();
	});
	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$("#nav").removeAttr("style");
		}
	});

	var articles = [];

	function Article (obj) {
	  this.title = obj.title;
	  this.link = obj.link;
	  this.image = obj.image;
	  this.deployedOn = obj.deployedOn;
	  this.body = obj.body;
	}

	Article.prototype.toHtml = function() {
	  var template = $('#article-template').html();
	  var render = Handlebars.compile(template);
	  this.daysAgo = parseInt((new Date() - new Date(this.deployedOn))/60/60/24/1000);
		this.publishStatus = this.deployedOn ? 'published ${this.daysAgo} days ago' : '(draft)';
	  return render(this);
	};

	projectData.sort(function(a,b) {
	  return (new Date(b.deployedOn)) - (new Date(a.deployedOn));
	});

	projectData.forEach(function(articleObject) {
	  articles.push(new Article(articleObject));
	});

	articles.forEach(function(article) {
	  $('#projects').append(article.toHtml());
	});

	$(document).on('click', 'a', function(event){
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});

	$(window).bind("scroll", function() {
	    if ($(this).scrollTop() > 520) {
	        $("#me").fadeIn(1500);
	    } else {
	        $("#me").stop().fadeOut();
	    }
	});

})();
