    // 定义函数  
    function show() {  
        // 获得输入  
        var a = document.getElementById('info').value;  
        // 显示  
        // document.getElementById('result').innerText = a;  
        var li = document.createElement('li');  
        li.innerText = a;  
      
        document.getElementById('list').appendChild(li);  
        // alert('hello');  
    }  