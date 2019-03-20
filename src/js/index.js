import MainController from'./controllers/mainController';
const main = ()=>{
    const controller = MainController;
	console.log('TCL: //main -> controller', controller);
    console.log(controller.getData());
}

(callback=>{
    if (document.readyState!='loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', ()=>{
        if (document.readyState=='complete') callback();
    });
})(main);