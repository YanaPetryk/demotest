/*function button(params) {
    const el = document.createElement('div');

    let clicked = 0;

    el.className = 'button';
    if (params.text) {
        el.innerText = params.text
    }
    if (params.color) {
        el.className = `${el.className} button_${params.color}`
    }
    el.onclick = () => {
        clicked++;
        console.log(clicked);
        if (params.onClick) {
            params.onClick();
        }
    }
    return el;
}

function textContent() {
    const el = document.createElement('div');
    el.className = 'border';
    el.style = 'height:20px;width:200px;border:1px solid green;';
    return el;
}


window.addEventListener('load', () => {
    const ContentElement = textContent();
    const buttonElement = button({
        color: 'white',
        text: 'HELLO WORLD',
        onClick: () => {
            ContentElement.innerText = 'HELLO WORLD';
        }
    });
    const anotherElement = button({
        text: 'Test 2',
        onClick: () => {
            console.log(123);
        }
    });

    const newElement = button({
        text: 'HA-HA-HA',
        onClick: () => {
            alert('It is me :)');
        }
    });
    document.body.append(ContentElement);
    document.body.append(buttonElement);
    document.body.append(anotherElement);
    document.body.append(newElement);
})
*/


function button(params) {
    const el = document.createElement('div');

    let clicked = 0;

    el.className = 'button';
    if (params.text) {
        el.innerText = params.text
    }
    if (params.color) {
        el.className = `${el.className} button_${params.color}`
    }
    el.onclick = () => {
        clicked++;
        console.log(clicked);
        if (params.onClick) {
            params.onClick();
        }
    }
    return el;
}

function textContent() {
    const el = document.createElement('div');
    el.className = 'border';
    el.style = 'height:20px;width:200px;border:1px solid green;';
    return el;
}
