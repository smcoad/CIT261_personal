function Blog(body, date) {
//assign the properties
this.body = body;
this.date = date;
}

//Return a string representation of the blog entry
Blog.prototype.toString = function() {
return "[" + (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" +
 this.date.getFullYear() + "] " + this.body;
};

//Return a formatted html representation of the blog entry
Blog.prototype.toHTML = function(highlight) {
//use background as a highlight if specified 
var blogHTML = "";
blogHTML += highlight ? "<p style ='background-color:#EEEEEE'>" : "<p>";

//generate the formatted blog html code
blogHTML += "<strong>" + (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" +
 this.date.getFullYear() + "</strong><br />" + this.body + "</p>";
return blogHTML;
};

//see if blog blody contains string of text
Blog.prototype.containsText = function(text) {
return (this.body.toLowerCase().indexOf(text.toLowerCase()) != -1);
};﻿