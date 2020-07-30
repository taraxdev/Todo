document.addEventListener('DOMContentLoaded',function(){

    //better code
    <!--//delete note-->
    const list = document.querySelector('#page-list ul');

    list.addEventListener('click', function(e){
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    })

    //add notes
    const addForm = document.forms['add-note'];
    addForm.addEventListener('submit',function(e){
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        
    // create elements
    const li = document.createElement('li');
    const note = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // append to document
    li.appendChild(note);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // add content
    deleteBtn.textContent = 'delete';
    note.textContent = value;

    // add classes
    note.classList.add('note');
    deleteBtn.classList.add('delete');

    });

    //hide all
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            list.style.display = "none";
        }
        else {
            list.style.display = "initial"
        }
    })
   
    //custom search
    const searchBar = document.forms['note-down'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const notes =list.getElementsByTagName('li');
        Array.from(notes).forEach(function(note){
            const title =note.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) !=-1){
                note.style.display = 'block';
            }  else {
                note.style.display = 'none';
            }
        })
    })

        //  to stop from adding empty notes
        //  if( document.getElementById('span').value === '' ){
        //     alert('empty');
        //     return false;
        // }


})


    