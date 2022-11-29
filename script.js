 
 
 async function getbooksdetails(){
    let url=await fetch('https://www.anapioficeandfire.com/api/books/1')
    console.log(url)
let data=document.getElementsByClassName('data');
document.getElementById('bk').innerHTML=data.json
    let res1=await url.json
    console.log(res1)
    
    document.body.append(url)
      
    let name=document.createElement('books');
    name.setAttribute('id','list');
    
    document.body.append(name);
    
    let td=document.getElementById('bk');
    td.innerHTML=name;
    return td;
    
 }
 let currentpage=1;
    let lastpage=5;
 try{
       async function bk(limitperpage,noofpages){
        let bk=fetch(`https://www.anapioficeandfire.com/api/${books} ${1}`)
        var pg=await fetch('data.json');
        document.body.append(bk,pg);
        //  bk.innerHTML=``
        for(let i=1;i<limitperpage.length;i++)
        {
            var start=currentpage*noofpages;
            var items=start+currentpage;
            limitperpage.append(items);
            items.append(start);
            page--
        }
        
    let elemnt=pageitems.slice(currentpage,lastpage);
           console.log(elemnt);
  
           var table=document.getElementsByClassName('books');
           console.log(table);
           var tbody=document.createElement('list');
           for(let i=0;i<items.length;i++)
           {

            tbody.push(`#books`);
            let td=books('tr');
            let td1=books('td',items[i].name);
            let td2=books('td',items[i].isbn);
            let td3=books('td',items[i].authors);
            let td4=books('td',items[i].publishername);
            let td5=books('td',items[i].relaesedate);
            tbody.append(tr);
            tr.append(td1,td2,td3,td4,td5);
            table[0].append(tbody)

            
           }

           function pagination(items,wrap,limitperpage){
            wrap.innerHTML=`https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10`
            wrap.append(items);

          let count=Math.ceil(items.length/limitperpage);
              
          for(let i=0;i<count;i++)
          var  button=pgebtn;
          wrap.append(buttons);
          console.log(button)
          } 
         pagination(limitperpage,currentpage);


         function pgebtn(page){
let btn=document.createElement('a');
btn.setAttribute('class','getbookdetails()');
btn.innerHTML=page;
document.body.append(btn);
btn.addEventListener('click',function(){
  tbody.removeChild(tr);
  tr.removeChild(td1,td2,td3,td4,td5);
  table[0].removeChild(tbody);
  currentpage=page;
  console.log(currentpage);
  console.log(lastpage);
  pgebtn(lastpage,currentpage)
  
})
return btn;
   }

  }
}catch(err)
{
  console.log("Show the error if it is  occured"+err);

document.getElementsByClassName('books :')=` name: ${name}`;
   document.getElementsByClassName('books :')=`isbn ${isbn}`
   document.getElementsByClassName('books :')=`Author ${authors}`;
   document.getElementsByClassName('books :')=`publisher name ${publishername}`
   document.getElementsByClassName('books :')=`releaseddate ${relaesedate}`
   document.body.append(name,isbn,authors,publishername,relaesedate);
}getbooksdetails()
