let para=document.querySelectorAll('p');

let li=document.querySelectorAll('li');

let article=document.querySelector('article');

para.forEach(p=>{
    p.setAttribute("class","paragraph");
    console.log(p);
});

console.log(para[2].getAttribute("class"));

li.forEach(list=>{
    if(list.textContent.includes('warning')){
        list.classList.add('warning');
    }else if(list.textContent.includes('primary')){
        list.classList.add('primary');
    }
});

let family={
    parentname:["U Ba","Daw Mya"],
    ch:["Mya Mya","Ko Ko"]
};
let fname=family.parentname;
console.log(fname);

family.ch.forEach(child=>{
    console.log(child);
});

let children=Array.from(article.children);
children.forEach(child=>{
    console.log(child);
});

const sibling=children.forEach(sil=>{
    console.log(sil);
});


