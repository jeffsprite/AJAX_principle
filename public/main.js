getCSS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css')
    request.onreadystatechange = () =>{
        console.log('request.readyState')
        if(request.readyState === 4){
            console.log('下载成功')
            if(request.status>=200 && request.status <=300){
                const style = document.createElement('style')
                style.innerHTML = request.response;
                document.head.appendChild(style)
            }else{
                console.log('css加载失败')
            }
        }
    }
    request.send();
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/2.js')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4) {
            console.log('下载成功')
            if(request.status>=200 && request.status <=300){
                const script = document.createElement('script')
                script.innerHTML = request.response;
                document.head.appendChild(script);
            }else{
                console.log('js加载失败')
            }
        }
    }
    request.send();
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/3.html')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4) {
            console.log('下载成功')
            if(request.status>=200 && request.status <=300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }else{
                console.log('HTML加载失败')
            }
        }
    }
    request.send();
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4) {
            console.log('下载成功')
            if(request.status>=200 && request.status <=300){
                const dom = request.responseXML;
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send();
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4) {
            console.log('下载成功')
            if(request.status>=200 && request.status <=300){
                const object = JSON.parse(request.response)
                myName.textContent = object.name;
            }
        }
    }
    request.send();
}