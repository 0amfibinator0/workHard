'use strict';

let d = 0;
let r = 0;

const DomElement = function (selector, height, width, bg, fontSize)  {
    this.selector = selector;
    this.height = height + 'px';
    this.width = width + 'px';
    this.bg = bg;
    this.fontSize = fontSize + 'px';
    
    this.createEl = function() {
        if(this.selector[0] === '.') {
            this.element = document.createElement('div');
            this.element.style.position = 'absolute';
            this.element.classList.add(this.selector.slice(1));
        } else if(this.selector[0] === '#') {
            this.element = document.createElement('p');
            this.element.id = this.selector.slice(1);
        }
        this.element.style.height = this.height;
        this.element.style.width = this.width;
        this.element.style.background = this.bg;
        this.element.style.fontSize = this.fontSize;

        
        let body = document.querySelector('body');
        body.append(this.element);
    };
    this.down = () => {
        d = d + 10;
        this.element.style.marginTop = `${d}px`;
    };
    this.up = () => {
        d = d - 10;
        this.element.style.marginTop = `${d}px`;
    };
    this.right = () => {
        r = r + 10;
        this.element.style.marginLeft = `${r}px`;
    };
    this.left = () => {
        r = r - 10;
        this.element.style.marginLeft = `${r}px`;
    };
};

let elem = new DomElement('.block', 100, 100, 'red');
elem.createEl();

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowDown') {
        elem.down();
    } else if (event.code === 'ArrowUp') {
        elem.up();
    } else if (event.code === 'ArrowRight') {
        elem.right();
    } else if (event.code === 'ArrowLeft') {
        elem.left();
    }
});