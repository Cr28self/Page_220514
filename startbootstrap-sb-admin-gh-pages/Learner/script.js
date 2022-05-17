var Add = document.getElementById('Add');

var Edit = document.getElementById('Edit');

var Cancel = document.getElementById('GoBack');


console.log(Cancel)



Cancel.addEventListener('click', function(event){
    alert('d');        
});

Add.addEventListener('click', function(event){
    location.href='create.html';
});











// if(Add.addEventListener){
//     t.addEventListener('click', function(event){
//         alert('Hello world, '+event.target.value);
//     }); 
// }


// else if(t.attachEvent){
//     t.attachEvent('onclick', function(event){
//         alert('Hello world, '+event.target.value);
//     })
// }