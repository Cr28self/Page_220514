
var tuple = document.getElementById('tuple'); //해당 html 내부에 데이터의 id


const name = document.getElementById(`layoutSidenav_content`).getAttribute('name'); //내부 컨텐츠 name값 추출  ( learner / teacher)


// 데이터 추가 이벤트
function Addition(){
    location.href=`${name}-create.html`;
}
// end of 데이터 추가


//취소 이벤트
function Revoke(){
    const check=confirm('취소하시겠습니까?');

        if(check){
            history.back();  
        }
}
//end of 취소 이벤트


//현재 날짜
function today(){

    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;

    document.getElementById('Wdate').value=dateString;

}
//end of 현재 날짜


//이메일 입력 전송 처리
function input_email(){
    var email = document.getElementById('str_email02');
    email.value=document.T_Submit_Form.email_server.value;
}
//end of 이메일 입력 전송 처리


//입력한 데이터 제출 이벤트
function submit(){
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
//end of 입력한 데이터 제출 이벤트


//데이터 수정 이벤트
function Update(){
    location.href=`${name}-rewrite.html`;
}
//end of 데이터 수정 이벤트


//데이터 삭제  이벤트
function Delete(){

    const check=confirm('삭제하시겠습니까?');

        if(check){
            //삭제 동작 구현 코드!!
        }
}
//end of 데이터 수정 이벤트






//데이터의 수정, 삭제 버튼 구현 
if(tuple){
    var RW=`<button id=${name}-teacher class='btn btn-outline-primary btn-xs' onclick='Update();'>수정</button><button id='delete-${name}' class='btn btn-outline-danger btn-xs' onclick='Delete();'>삭제</button>`

try{
    const a=tuple.children;
    for(var i=0;i<a.length;i++){
        a[i].children[a[i].children.length-1].innerHTML+=RW;
    }

}
catch{
    
}
}
//end of 데이터의 수정, 삭제 버튼 구현 



















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