
document.querySelector('.accordion-box').addEventListener('click', function(e){
    let target = e.target.getAttribute('data-btn');

    document.querySelector('.accordion-content#' + target).classList.toggle('active');

});

document.querySelector('.drop-btn').addEventListener('click', function() {
    document.querySelector('.drop-menu').classList.toggle('active');
    document.querySelector('.fas.fa-sort-down').classList.toggle('active');
});

function modalController(action) {
    if (action == 'close') {
        document.querySelectorAll('.modal-container').forEach(function (element) {
            element.classList.remove('active');
        })
    } else {
        document.querySelector('.modal-container#' + action).classList.add('active');
    }
}

document.querySelectorAll('[data-modal]').forEach(function (element) {
    element.addEventListener('click', function () {
        let target = this.getAttribute('data-modal');
        console.log(target);
        modalController(target);
    });
});

function progress(value) {
    
    let $progress = document.querySelector('.progress-svg');
    


    if( !($progress.innerHTML.length) ) {

        $progress.innerHTML = ' <div class="wrapper">' +
                    '<svg>' +
                        '<rect fill="#214252"/>' +
                    '</svg>' +
                '</div>' +
                '<div class="value"></div>'

    }
    
    if(value >= 100) value = 100;
    if(value <= 0) value = 0;

    let $value = document.querySelector('.value');

    document.querySelector('rect').setAttribute('width', value +'%')
    $value.textContent = ''+ value +'%';
     
}

let i = 0;

setInterval(function(){
    i++;
    progress(i);
}, 200);


document.querySelectorAll('.tab-btn').forEach(function(element){
    element.addEventListener('click', function(){

        let target = element.getAttribute('data-tab');

        document.querySelectorAll('.tab-btn').forEach(function(item){
            item.classList.remove('active');
        });

        document.querySelectorAll('.tab-content').forEach(function(item){
            item.classList.remove('active');
        });

        document.querySelector('.tab-content#' + target).classList.add('active');

        element.classList.add('active');
    


        console.log(target);
        
    })
});