

function showTab(tabId){

    const tabs=document.querySelectorAll('.tabContent');

    tabs.forEach(tab=>{
        if(tab.id===tabId){
            tab.style.display='block';
             
        }
        else{
            tab.style.display='none';
          
        }
    })
}