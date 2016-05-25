$(function() {

    function toggle() {
        $('.contactMe').slideToggle(2500, function(){

        });

        $('.iconList').fadeToggle(2500, function(){

        });
    };

    $('.hire').on('click', function () {
        toggle();
    });

    var form_id = "contact";

    var data = {
        "access_token": "fgfim35ebeebo0sc9yzwutia"
    };

    function onSuccess() {
    }

    function onError(error) {
    }

    var sendButton = $("#" + form_id + " [name='send']");

    function send() {
        sendButton.val('Sending…');
        sendButton.prop('disabled',true);

        var subject = $("#" + form_id + " [name='subject']").val();
        var message = $("#" + form_id + " [name='text']").val() + " " + "User Email Address:" + " " + $("#" + form_id + " [name='email']").val();
        data['subject'] = subject;
        data['text'] = message;

        $.post('https://postmail.invotes.com/send',
            data,
            onSuccess
        ).fail(onError);

        return false;
    }

    sendButton.on('click', function() {
            send();
            toggle();
            $('.hire').attr('disabled', true);
            $('.hire').text('Thanks!');
    });


    var $form = $("#" + form_id);
    $form.submit(function( event ) {
        event.preventDefault();
    });

});