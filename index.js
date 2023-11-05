let string="";
let flag=0;
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            
            string=eval(string);
            document.getElementById('value').dir="rtl";
            document.getElementById('value').value=string;

            string="";

        }
        else if(e.target.innerHTML==="ON/OFF")
        {
            
            if(flag===1)
            {
                string="";
                 document.getElementById('value').value=string;
                 flag=0;
            }
            else 
            {
                document.getElementById('value').value=0;
                string="";
                flag=1;
            }

            
        }
        else if(e.target.innerHTML==='C')
        {
            document.getElementById('value').dir="ltr";
            document.getElementById('value').value=0;
            string="";
            flag=1;

        }
        else
        {
            document.getElementById('value').dir="ltr";
            console.log(e.target)
            string=string+e.target.innerHTML;
            console.log(string);
            document.getElementById('value').value=string;
            falg=1;
        }
    })
})