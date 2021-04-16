function initVue() {

    new Vue({
        el: '#app',
        data: {
  
          values:[],
          filter:[],
          filtered:[],
        },
        mounted(){
  
          axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    
          .then(data => {
              
              this.values = data.data.response;
              
              for (let i = 0; i < this.values.length; i++) {
                const elem = this.values[i].genre;
                if(!this.filter.includes(elem)){
  
                  this.filter.push(elem);
                }
                
              }
              console.log(this.filter);
              console.log(this.filtered);
              
              
              
            })
  
        },
        
        
        
    })
  }
  
  function init() {
  
    // const autoBtn = $('#auto-btn')
    // const btn = $('#btn');
    // btn.click(boxGenetaror);
    // autoBtn.click(generateAuto);
    initVue()
    console.log()
    
}
document.addEventListener('DOMContentLoaded', init);
