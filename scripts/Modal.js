
//On gère l'ouverture du menu
class Modal {
    constructor(el) {
        this._el = el;


        this._modal = document.querySelector('[data-js-modal]');

        


        for (let i = 0; i < this._el.length; i++) {
            //this._img = this._el[i].dataset;
            console.log(this._el[i].dataset.jsModalData);
        }


        this._elIframe = document.querySelector('iframe')

        console.log(this._elIframe);


       this.init();

    }

    init = ()=> {
        
for (let i = 0; i < this._el.length; i++) {
    this._el[i].addEventListener('click', this.afficheModal);
    
}

for (let i = 0; i < this._el.length; i++) {
    this._el[i].addEventListener('click', this.setDataset);
    
}



    }

    setDataset = (e)=> {

        let monDatasetActuel = e.target.dataset.jsModalData;
        return monDatasetActuel;

    };



    afficheModal = (e)=> {

            
            if (this._modal.classList.contains('modal--close')) {
                this._modal.classList.replace('modal--close', 'modal--open')
                let test1 = this.setDataset(e);
                //Set attribute pour iframe SRC
                console.log(test1);

                this._elIframe.setAttribute('src','https://www.youtube.com/embed/'+ test1);
                //Empêche le scroll
                document.documentElement.classList.add('overflow-y--hidden');
                console.log(this._el.dataset);

               this._modal.addEventListener('click', this.fermeModal);
                 


        }
        
    
    
        };

        

        fermeModal = ()=> {
            if (this._modal.classList.contains('modal--open')) {
                this._modal.classList.replace('modal--open', 'modal--close')
                //Autorise à nouveau le scroll
                document.documentElement.classList.remove('overflow-y--hidden');
               

        }
    
        };



}





