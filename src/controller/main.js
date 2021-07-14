var toDoListService = new ToDoListService();
var validator = new Validator();
var listToDo = [] 

function getEle(id) {
    return document.getElementById(id)
}
var getToDoList = function () {
    toDoListService.getAllToDoListApi()
        .then(function (res) {
            console.log('res ne', res.data);
            listToDo = res.data;
            renderToDoList(res.data);
            renderToDoCompleted(res.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
getToDoList();

function renderToDoList(list) {
    var content = ''
    list.forEach(function (toDo, index) {
        if (toDo.status == false) {
            content += `
            <li> 
                ${toDo.taskName} 
                <div>
                <button id="btnXoa" onClick="xoaToDo(${toDo.id})"><i class="fa fa-trash-alt"></i></button>
                <button id="btnCheck" onClick="checkToDo(${toDo.id})"><i class="fa fa-check-circle"></i></button>
                </div>               
            </li>
        `}
    })
    getEle('todo').innerHTML = content;
}

var renderToDoCompleted = function (toDoList) {
    let content = '';
    toDoList.forEach(function (toDo, index) {
        if (toDo.status == true) {
            content += `
            <li> 
                ${toDo.taskName} 
                <div>
                <button id="btnXoa" onClick="xoaToDo(${toDo.id})"><i class="fa fa-trash-alt"></i></button>
                <button id="btnCheck" onClick="checkCompleted(${toDo.id})"><i class="fa fa-check-circle"></i></button>
                </div>               
            </li>
        `
        }
    })
    getEle('completed').innerHTML = content;
}
getEle('addItem').addEventListener('click', function () {
    var id = Math.random();
    var taskName = getEle('newTask').value;
    var status = false;

    let isValid = true;
    isValid = validator.KiemTraRong(taskName, 'notiInput', 'Vui lòng không để trống') && validator.KiemTraTrung(listToDo, taskName, false, 'notiInput', "Thông tin đã tồn tại") && validator.KiemTraTrung(listToDo, taskName, true, 'notiInput', "Thông tin đã hoàn thành")

    console.log(isValid)
    if (!isValid) {
        return;

    }

    var toDoList = new Task(id, taskName, status);
    toDoListService.addToDoListApi(toDoList)
        .then(function (res) {
            getToDoList();
        })
        .catch(function (err) {
            console.log(err)
        })
})
var xoaToDo = function (id) {
    toDoListService.deleteToDoListApi(id)
        .then(function (res) {
            getToDoList();
            alert('Delete Success!');

        })
        .catch(function (err) {
            console.log(err);
        })
}

var checkToDo = function (id) {
    toDoListService.getToDoListApi(id)
        .then(function (res) {
            var toDoCheck = { ...res.data, status: true }
            toDoListService.checkToDoListApi(id, toDoCheck)
                .then(function (res) {
                    getToDoList()
                    alert('checkCompleted !');
                })
        })
        .catch(function (err) {
            console.log(err);
        })
}

var checkCompleted = function (id) {
    toDoListService.getToDoListApi(id)
        .then(function (res) {
            var toDoCheck = { ...res.data, status: false }
            toDoListService.checkToDoListApi(id, toDoCheck)
                .then(function (res) {
                    getToDoList()
                    alert('checkCompleted !');
                })
        })
        .catch(function (err) {
            console.log(err);
        })
}