function initVue() {

    new Vue({
        el: '#app',
        data: {

            values: [],
            genere: '',

        },
        mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')

            .then(data => {
                
                this.values = data.data.response;
                
                
                
            })
            
        },
        computed: {
            
            generi: function () {
                const filter = [];
                
                for (let i = 0; i < this.values.length; i++) {
                    const elem = this.values[i].genre;
                    const years = this.values[i].year;
                    if (!filter.includes(elem)) {
                        
                        filter.push(elem);
                    }
                
                    
                }
                return filter;
            },
            
            filteredAlbum: function(){
                
                if(this.genere != ''){
                    //old arr        iesimo    genere     valore v-model     
                    return this.values.filter(album => album.genre == this.genere).sort(function (a,b){
                        return (a.year - b.year);
                    });//ritorna un arrey nuovo di pacca
                }else {
                    return this.values.sort(function (a,b){
                        return (a.year - b.year);
                    }); // old arr
                }
                
            },
            
        }
        
        
        
    })
}

function init() {
    
    
    initVue()
    
   
}
document.addEventListener('DOMContentLoaded', init);