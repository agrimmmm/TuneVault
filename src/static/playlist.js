const remove=document.querySelectorAll('.rem-butt')


remove.forEach(button => {

    button.addEventListener('click',()=>{
        const itemId = button.getAttribute('id');
        deleteItem(itemId);
    });
});


function deleteItem(itemId) {
fetch(`/delete_item/${itemId}`, {
    method: 'POST'
})
.then(response => response.json())
.then(data => {
    if (data.status === 'success') {
        // Item deleted successfully
        location.reload();
        // Refresh the page or update the item list
        // as per your requirement
    } else {
        alert('Error: ' + data.message);
    }
});
}
