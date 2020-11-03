$(function() {
    let list = [{
            id: 1,
            task: "Shopping",
            done: false,
        },
        {
            id: 2,
            task: "Shopping 2",
            done: true,
        },
        {
            id: 3,
            task: "Shopping 3",
            done: true,
        },
    ];

    renderList(list);

    $('.add').click(function(e) {
        e.preventDefault();
        let task = $('.task').val();
        if (task) {
            list = [
                ...list,
                { id: Math.floor(Math.random() * (1000 - 10) + 10), task, done: true }
            ];
            renderList(list);
        }
    });
    $('body').on('click', '.delete', function() {
        let id = $(this).parents("li").data("id");
        list = list.filter(val => val.id !== id);
        renderList(list);
    });
    $('body').on('click', '.item', function() {
        $(this).toggleClass('active');
        let id = $(this).parents("li").data("id");
        const currentId = list.findIndex(val => val.id === id);
        list[currentId].done ? list[currentId].done = false : list[currentId].done = true;
    });
});

function renderList(list) {
    $('.list').empty();
    list.map((val) => {
        val.done ?
            $(`
        <li data-id=${val.id} ><span class="item">${val.task}</span> <button class="delete">Delete</button></li>
        `).appendTo('.list') :
            $(`
        <li data-id=${val.id} ><span class="item active">${val.task}</span> <button class="delete">Delete</button></li>
        `).appendTo('.list');
    });
};