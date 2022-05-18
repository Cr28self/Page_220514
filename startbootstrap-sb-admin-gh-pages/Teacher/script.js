var Add = document.getElementById('Add');

var Edit = document.getElementById('Edit');

var Cancel = document.getElementById('Cancel');

var tuple = document.getElementById('tuple');



if(Add){

    Add.addEventListener('click', function(event){
        location.href='teacher-create.html';
    });

}


if(Cancel){

    Cancel.addEventListener('click', function(event){
        const check=confirm('취소하시겠습니까?');

        if(check){
            history.back();  
        }
             
    });

}


function today(){

    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;

    document.getElementById('Wdate').value=dateString;

}


function input_email(){
    var email = document.getElementById('str_email02');
    email.value=document.T_Submit_Form.email_server.value;
}

function Tsubmit(){
    var TF=confirm('저장하시겠습니까?');

    if(TF){
        var str_email01 = document.getElementById('str_email01').value;
        var str_email02 = document.getElementById('str_email02').value;

        document.getElementById('Email').value=str_email01+'@'+str_email02;


        document.getElementById('str_email01').setAttribute('disabled',true);
        document.getElementById('str_email02').setAttribute('disabled',true);
        document.getElementById('email_server').setAttribute('disabled',true);
        
        return TF;
    }
    else{
        
        return TF;
    }


}








if(tuple){

try{
    const a=tuple.children;
    for(var i=0;i<a.length;i++){
        a[i].children[a[i].children.length-1].innerHTML+="<button class='update-learner'><a href='teacher-rewrite.html'>수정</a></button>&nbsp;<button class='delete-learner'>삭제</button>"
    }

}
catch{
    
}
}

var update_learner = document.getElementsByClassName('update-teacher');





















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