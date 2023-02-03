$(function (){
    console.log("page is loaded")
    
    let newtodobox = $('#newtodo')
    let addtodobtn = $('#addtodo')
    let todolist = $('#todolist')

    addtodobtn.click(function (){
        // console.log("Button was clicked")
        let newtodo =  newtodobox.val()
        //console.log(newtodo)

        $.post(//sends response to server without refreshing whole page(AJAX)
            '/todos/',//location
            {task: newtodo},
            function(data){
                //console.log(data)
                todolist.empty();
                for (todo of data){
                    todolist.append("<li>" + todo.task +"</li>")
                }
            }
        )
    })
})

//console.log("Some stuff")