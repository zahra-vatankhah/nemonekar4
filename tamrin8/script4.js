const selectall=document.getElementById('selectall');
const select=document.querySelectorAll('#select');
const btn=document.querySelector('button')
selectall.onclick=()=>{
    if(selectall.checked==true){
          for(i=0;i<select.length;i++){
            select[i].checked=true;
             btn.classList.add('active');
          }
    }
    else{
        for(i=0;i<select.length;i++){
            select[i].checked=false;
            btn.classList.remove('active');
        }
    }
}
