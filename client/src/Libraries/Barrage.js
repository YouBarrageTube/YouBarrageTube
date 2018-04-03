import $ from 'jquery';

var Barrage = function(el){
    this.el = $(el);
    //console.log(this.el);
}

Barrage.prototype.newComment = function(comment){
    var newElement = document.createElement('span');
    var leftPosition = 650;//this.el.offsetLeft + this.el.offsetWidth;
    var topPosition = Math.floor(Math.random() * 315) + 0;//Math.floor(Math.random() * this.el.offsetHeight) + this.el.offsetTop;
    newElement.innerText = comment;
    newElement.style.cssText = 'color:white; position:absolute; left:' + leftPosition + 'px; top:' + topPosition +'px;';
    this.el.append(newElement);
    var newComment = $(newElement);
    //console.log(newComment);
    newComment.animate({
        left:'0px',
    },3000);
}

export default Barrage;