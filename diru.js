let grade=[]
let credit=[]
    var selectElement;
    var clikcount=0;
     let op=[]
let op2=[]
    function createbuttons(){
        
        const inputContainer = document.getElementById('inputContainer');
    let sel=[]
    let sel2=[]
sel[clikcount]=document.createElement('select')
sel2[clikcount]=document.createElement('select')


var x=0;
while(x<14){
op[x]=document.createElement('option')
op[x].style="padding: 5px; border: 2px solid #ccc; border-radius: 5px; font-size: 13px;"
x++

}
var so=0;
while(so<7){
op2[so]=document.createElement('option')
op2[so].style="padding: 5px; border: 2px solid #ccc; border-radius: 5px; font-size: 13px;"
so++
}


        const inputBox = document.createElement('input');
        
        inputBox.type = 'text';
        inputBox.style.color="blue"
        inputBox.style="padding: 5px; border: 2px solid #ccc; border-radius: 5px; font-size: 13px; text-color:balck;"
       inputBox.placeholder='Course_Name'
       inputBox.size='10'
        inputContainer.appendChild(inputBox)
        let gpa=["Grade ","A+","A-","A","B+","B","B-","C+","C","C-","D+","D","E","AB"]
        let gpa2=["Credit ","3","2","1","4","5","6"]
        var h=0;

        var k=0;
        for(let gp of gpa){
           op[k].textContent=gp
        
            k++;
        }
        for(let gp2 of gpa2){
            op2[h].textContent=gp2

            h++;
        }
        
        var p=0;
while(p<13){
op[x]=document.createElement('option')
p++
sel[clikcount].appendChild(op[p])
}

sel2[clikcount].appendChild(op2[0])
sel2[clikcount].appendChild(op2[1])
sel2[clikcount].appendChild(op2[2])
sel2[clikcount].appendChild(op2[3])
sel2[clikcount].appendChild(op2[4])
sel2[clikcount].appendChild(op2[5])
sel2[clikcount].appendChild(op2[6])
const br=document.createElement('br')
sel[clikcount].id='diru_'+clikcount
sel2[clikcount].id='gow_'+clikcount
console.log('diru'+clikcount)
        inputContainer.appendChild(sel[clikcount])
        inputContainer.appendChild(sel2[clikcount])
        inputContainer.appendChild(br)
        
        clikcount++;
   console.log(window.clikcount)
    }
    function gpafind(){
        var y=0
        
        while(y<window.clikcount){
      let x=document.getElementById('diru_'+y).value
      let k=document.getElementById('gow_'+y).value
      grade[y]=x
      credit[y]=k
    
      y++;
     
    }
     
    
    }


    function gprafind(){
        var end=0
        let divide=0;
        let total=0;
        let Grade;
        let Credit;
        while(end<window.clikcount){
           Grade=grade[end]
           Credit=credit[end]
           divide=Number(divide)+Number(Credit)
           switch(Grade){
        case 'A':
        if(Credit==6){
            total=Number(total)+6*4
        }else if(Credit==5){
            total=Number(total)+5*4
        }else if(Credit==4){
            total=Number(total)+4*4
        }else if(Credit==3){
            total=Number(total)+3*4
        }
        else if(Credit==2){
            total=Number(total)+2*4
        }else if(Credit==1){
            total=Number(total)+1*4
        }
            break
            case 'A-':
        if(Credit==6){
            total=Number(total)+6*3.7
        }else if(Credit==5){
            total=Number(total)+5*3.7
        }else if(Credit==4){
            total=Number(total)+4*3.7
        }else if(Credit==3){
            total=Number(total)+3*3.7
        }
        else if(Credit==2){
            total=Number(total)+2*3.7
        }else if(Credit==1){
            total=Number(total)+1*3.7
        }
            break
            case 'A+':
        if(Credit==6){
            total=Number(total)+6*4
        }else if(Credit==5){
            total=Number(total)+5*4
        }else if(Credit==4){
            total=Number(total)+4*4
        }else if(Credit==3){
            total=Number(total)+3*4
        }
        else if(Credit==2){
            total=Number(total)+2*4
        }else if(Credit==1){
            total=Number(total)+1*4
        }
            break
            case 'B+':
        if(Credit==6){
            total=Number(total)+6*3.3
        }else if(Credit==5){
            total=Number(total)+5*3.3
        }else if(Credit==4){
            total=Number(total)+4*3.3
        }else if(Credit==3){
            total=Number(total)+3*3.3
        }
        else if(Credit==2){
            total=Number(total)+2*3.3
        }else if(Credit==1){
            total=Number(total)+1*3.3
        }
            break
            case 'B':
        if(Credit==6){
            total=Number(total)+6*3
        }else if(Credit==5){
            total=Number(total)+5*3
        }else if(Credit==4){
            total=Number(total)+4*3
        }else if(Credit==3){
            total=Number(total)+3*3
        }
        else if(Credit==2){
            total=Number(total)+2*3
        }else if(Credit==1){
            total=Number(total)+1*3
        }
            break
            case 'B-':
        if(Credit==6){
            total=Number(total)+6*2.7
        }else if(Credit==5){
            total=Number(total)+5*2.7
        }else if(Credit==4){
            total=Number(total)+4*2.7
        }else if(Credit==3){
            total=Number(total)+3*2.7
        }
        else if(Credit==2){
            total=Number(total)+2*2.7
        }else if(Credit==1){
            total=Number(total)+1*2.7
        }
            break
            case 'C+':
        if(Credit==6){
            total=Number(total)+6*2.3
        }else if(Credit==5){
            total=Number(total)+5*2.3
        }else if(Credit==4){
            total=Number(total)+4*2.3
        }else if(Credit==3){
            total=Number(total)+3*2.3
        }
        else if(Credit==2){
            total=Number(total)+2*2.3
        }else if(Credit==1){
            total=Number(total)+1*2.3
        }
            break
            case 'C':
        if(Credit==6){
            total=Number(total)+6*2
        }else if(Credit==5){
            total=Number(total)+5*2
        }else if(Credit==4){
            total=Number(total)+4*2
        }else if(Credit==3){
            total=Number(total)+3*2
        }
        else if(Credit==2){
            total=Number(total)+2*2
        }else if(Credit==1){
            total=Number(total)+1*2
        }
         
        break
        case 'C-':
        if(Credit==6){
            total=Number(total)+6*1.7
        }else if(Credit==5){
            total=Number(total)+5*1.7
        }else if(Credit==4){
            total=Number(total)+4*1.7
        }else if(Credit==3){
            total=Number(total)+3*1.7
        }
        else if(Credit==2){
            total=Number(total)+2*1.7
        }else if(Credit==1){
            total=Number(total)+1*1.7
        }
            break
            case 'D+':
        if(Credit==6){
            total=Number(total)+6*1.3
        }else if(Credit==5){
            total=Number(total)+5*1.3
        }else if(Credit==4){
            total=Number(total)+4*1.3
        }else if(Credit==3){
            total=Number(total)+3*1.3
        }
        else if(Credit==2){
            total=Number(total)+2*1.3
        }else if(Credit==1){
            total=Number(total)+1*1.3
        }
            break
            case 'D':
        if(Credit==6){
            total=Number(total)+6*1
        }else if(Credit==5){
            total=Number(total)+5*1
        }else if(Credit==4){
            total=Number(total)+4*1
        }else if(Credit==3){
            total=Number(total)+3*1
        }
        else if(Credit==2){
            total=Number(total)+2*1
        }else if(Credit==1){
            total=Number(total)+1*1
        }
            break
            case 'E':
        if(Credit==6){
            total=Number(total)+6*0
        }else if(Credit==5){
            total=Number(total)+5*0
        }else if(Credit==4){
            total=Number(total)+4*0
        }else if(Credit==3){
            total=Number(total)+3*0
        }
        else if(Credit==2){
            total=Number(total)+2*0
        }else if(Credit==1){
            total=Number(total)+1*0
        }
            break
            case 'AB':
        if(Credit==6){
            total=Number(total)+6*0
        }else if(Credit==5){
            total=Number(total)+5*0
        }else if(Credit==4){
            total=Number(total)+4*0
        }else if(Credit==3){
            total=Number(total)+3*0
        }
        else if(Credit==2){
            total=Number(total)+2*0
        }else if(Credit==1){
            total=Number(total)+1*0
        }
            break
        }
           end++
        }
            
        let gpse=document.getElementById('leo')
        let foi=Number(total)/Number(divide)
        var joi=foi.toFixed(2)
        gpse.innerHTML="Your GPA IS  "+joi
        }
        
        