import MainController from'./controllers/mainController';
import MainView from'./views/mainView';
const main = ()=>{
    const controller = MainController;
    MainView(controller);
}

(callback=>{
    if (document.readyState!='loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', ()=>{
        if (document.readyState=='complete') callback();
    });
})(main);