/*
Arreglo que contiene los items JSON y las nuevas tareas que se agregaran
*/
var tasks = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "change_state": ch_state
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
    "change_state": ch_state
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false,
    "change_state": ch_state
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true,
    "change_state": ch_state
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false,
    "change_state": ch_state
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false,
    "change_state": ch_state
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false,
    "change_state": ch_state
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true,
    "change_state": ch_state
	},
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false,
    "change_state": ch_state
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true,
    "change_state": ch_state
  }
 ];

 
window.addEventListener('load',load);

/*Esta funcion carga y muestra todos los items}*/
function load()
{
	show_tasks();
}




/*Esta funcion agregara nuevas tareas, aqui:

Se realiza una verificacion para determinar si el valor ingresado es distinto del vacio
Cada tarea se representara como un objeto con atributos y metodos
En base al atributo completed se determina en cual de las dos listas( pendientes y completadas) se mostrara la tarea

Se utiliza el metodo change_state para realiza el cambio de estado de una tarea de pendiente (false)
a completada (true) o completada(true) a pendiente(false)
*/

function add_task()
{
	var new_task = document.getElementById("input_task");
	var uncompleted_container = document.getElementById("uncompleted-list");

	var task_object = {
    "userId": 1,
    "id": 1,
    "title": new_task.value,
    "completed": false,
    "change_state": ch_state 
  	};

	
	if(new_task.value != "")
	tasks.push(task_object);

	show_tasks();
}


/*El metodo change_state es ek metodo que cada objeto representa a una tarea
 Esta funcion se encargara de cambiar el estado de una tarea 
 Esta funcion recibe un puntero this que recibe el objeto sobre el cual esta llamando y se encarga de modificar el valor
 .Si es tpasa  a F y si es F pasa a T
*/
function ch_state()
{
	this.completed = !this.completed;
}




/*Esta funcion cambiara el estado de las tareas segun su indice
El indice representa la posicion que ocupa dentro del arregllo de tareas.
Una vez tenido el indice , se ubica el objeto dentro del arreglo y unicamente se llama su metodo.Y asi verificas su estado que puede ser
completado y no cpmpletado */
function change_task(ind)
{
	index = parseInt(ind);
	tasks[index].change_state();
	show_tasks();
}



/*Esta funcion se encargara de eliminar una tarea de la lista de tareas en base a su indice*/
function delete_task(ind)
{
	index = parseInt(ind);
	tasks.splice(index,1);
	show_tasks();
}


/*Esta funcion se encargara de actualizar y mostrar ek contenido actual del arreglo global que contiene todas las tareas
Aqui se muestra las tareas de acuerdo al valor del atributo  completed del objeto que representa cada tarea
representa a cada tarea*/
function show_tasks()
{
	var completed_container = document.getElementById("completed-list");
	var uncompleted_container = document.getElementById("uncompleted-list");

	completed_container.innerHTML = "";
	uncompleted_container.innerHTML = "";

	var uncompleted_template = "";
	var completed_template = "";

/*Aqui recorro todo el arreglo de tareas y asi determino a que lista pertenece cada tarea*/
	for(var i=0;i<tasks.length;i++)
	{
		if(tasks[i].completed == true)
		{
			completed_template +=  "<li class='list-group-item'> "+ 
									tasks[i].title + 
									" <button type='button' class='btn btn-primary' onclick=change_task("+ i + ")>Tarea no completada</button> "+
									" <button type='button' class='btn btn-success' onclick=delete_task(" + i +")>Eliminar tarea</button> "+
									" </li>";
		}
		else if(tasks[i].completed == false)
		{
			uncompleted_template += "<li class='list-group-item'> "+
									tasks[i].title + 
									" <button type='button' class='btn btn-primary' onclick=change_task(" + i + ")>Tarea completada</button> " + 
									" <button type='button' class='btn btn-success' onclick=delete_task(" + i + ")>Eliminar tarea</button> " +
									" </li>";
		}
	}
	uncompleted_container.innerHTML = uncompleted_template;
	completed_container.innerHTML = completed_template;
}	


