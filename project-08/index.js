var todoList = [];
    let tasksontainer = document.getElementById('tasks-list');
    // للحفظ بعد ما اعمل تحديث
    // get todo data 
    if(localStorage.getItem('tasks')){
      todoList = JSON.parse(localStorage.getItem('tasks'));
      for(let i=0; i<todoList.length;i++){
         let li = document.createElement('li');
         li.setAttribute('class', 'list-group-item');
         li.textContent = todoList[i];
         tasksontainer.appendChild(li);
      }
    }
    // set todo data 
    function addTask(e){
      //   عايزة ال form نفسه ما يعنل submit لكن اخد الداتا يلي جواه واتعامل معاها ما اخسر الداتا الموجودة 
      //   بدونها بلاحظ لما اعمل add بظهر بالpath فوق علامة استفهام
      // ال form ما تعمل submit وانا بتعامل
      e.preventDefault();
      let task = document.getElementById('task');
      // trim هي function بتشيل ال space من اليمين واليسار
      if(task.value.trim() == ''){
        alert('please enter your task')
        return false;
      }

      // let li = document.createElement('li');
      // li.setAttribute('class', 'list-group-item');
      // li.textContent = task.value.trim();
      // tasksontainer.appendChild(li);
      
      // طريقة اخرى لكتابة الكود
      let currentTask = tasksontainer.innerHTML;
      currentTask = currentTask + '<li class="list-group-item">' + task.value.trim() + '</li>';
      tasksontainer.innerHTML = currentTask;

      //   هلقيت لو انا عمل ريفرش بتروح البيانات كيف ممكن احفظها 
     //  localstorage تاخد key ,value تكون على  الصفحة يلي انا فتحاها
    // {name:'sssss'}
    //  localStorage.setItem('name','sssss');
    //  console.log(localStorage.getItem('name'));
    //  هان لما اعمل تحديث بتروح البيانات
    todoList.push(task.value.trim());
    localStorage.setItem('tasks', JSON.stringify(todoList));

      task.value = '';
    }