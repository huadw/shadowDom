const template = document.createElement('template');
template.innerHTML = `
    <style>
      :host {
        display: block;
        overflow: hidden;
        border: 1px solid red;
        width: 130px;
        margin-bottom: 10px;
      }

      .image {
        width: 130px;
        height: 78px;
      }

      .container {
        font-size: 20px;
        padding-left: 5px;
      }


    </style>

    <img class="image">
    <div class="container">
    <span  class="name"></span>
    <slot name="msg">默认数据</slot>
    </div>
`


class CcMw extends HTMLElement {
    constructor() {
        super();
        var shadow = this.attachShadow({
            mode: 'closed'
        });
        var content = template.content.cloneNode(true);
        content.querySelector('img').setAttribute('src', this.getAttribute('image'));
        content.querySelector('.container > .name').innerText = this.getAttribute('name');
        shadow.appendChild(content);
    }
}
window.customElements.define('cc-mw', CcMw);