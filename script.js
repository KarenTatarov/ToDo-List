$(function() {
   let $todoList = $('#todo_list');
   let $input = $('#input');
   let $textarea = $('#textarea');
   let $notification = $('#notification');

   let displayNotification = function() {
       if(!$todoList.children().length) {
           $notification.fadeIn('faste');
       } else {
           $notification.css('display', 'none');
       }
   };

   $('#button').on('click', function() {
       if ($input.val() && $textarea.val()) {
        $todoList.append(`
            <li class="todo">
                <div>
                    <h3>${$input.val()}<h3>
                    <button class="delete"></button>
                    <a class="select" href="#"></a>
                </div>
                <p class="text">${$textarea.val()}</p>
            </li>
        `)
        $input.val('');
        $textarea.val('');
        displayNotification();
       };    
    });
    
    $todoList.on('click', '.delete', function() {
        $(this).parents('.todo').remove();
       displayNotification();
    });

    $todoList.on('click', '.select', function() {
        $(this).parents('.todo').find('.text').slideToggle();
    });
});