class Gallery extends HTMLElement {
    constructor() {
        super();   
        
        const div = document.createElement('div');
        var shadow = this.attachShadow({mode: "open"});

        this.make_src = (src) => src.split(';').map(el => `./resources/${el}.jpeg`);
        this.get_images = (src, div) => src.map(el => 
            {
                var im = document.createElement('img')
                im.setAttribute('src', el)
                im.setAttribute('onerror', `this.src = "./resources/notFound.png"`)
                im.setAttribute('onclick', `handleClick(this)`)
                div.appendChild(im)
            });

        div.setAttribute('class', 'ml_gallery');

        const style = document.createElement('style');
        style.innerHTML = 
        `
        .ml_gallery
        {
            display: flex;
            flex-wrap: wrap;
            justify-content:center;
        }
        .ml_gallery div
        {
            width: 400px;
			height: 400px;
            display: flex;
            margin: 5px;
            overflow: hidden;
            flex-wrap: wrap;
            justify-content:center;
        }
        img
        {
            width: auto;
            height: 50vh;
            margin: 40px;
            overflow: hidden;
            flex-wrap: wrap;
            transition: all 2s ease-in-out;
            justify-content:center;
        }
        .fullscreen
        {
            position: fixed;
            height: 100vh;
            width: auto;
            justify: center;
            z-index: 1;
        }
        `
        this.hasAttribute('imageList') ? this.get_images(this.make_src(this.getAttribute('imageList')), div) : {};
        shadow.appendChild(style);
        shadow.appendChild(div);
    }

}
window.customElements.define('ml-gallery', Gallery);

sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));}

handleLoad = async (th) => {
    var was = th.innerHTML
    th.innerHTML = `<div class="ml_loader"></div>`
    await this.sleep(1500)
    th.innerHTML = was
}
document.body.onload = handleLoad(document.body)

const handleClick = (th) => th.getAttribute('class') !== 'fullscreen' ? th.setAttribute('class', 'fullscreen') : th.setAttribute('class', '');