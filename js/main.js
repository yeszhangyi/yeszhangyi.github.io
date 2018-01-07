
    function show() {   
        var a = document.getElementById('info').value;  
        var li = document.createElement('li');  
        li.innerText = a;  
        document.getElementById('list').appendChild(li);  
    }  