$(function() {

    function toggle() {
        $('.iconList').slideToggle(1200, function() {

        });

        $('.contactMe').slideToggle(1200, function() {

        });
    }

    $('.hire').on('click', function () {
        $(this).text('Let\'s chat!');
        toggle();
    });

    var form_id = "contact";

    var data = {"access_token": "fgfim35ebeebo0sc9yzwutia"};

    function onSuccess() {}

    function onError(error) {}

    var sendButton = $("#" + form_id + " [name='send']");

    function send() {

        sendButton.val('Sending…');
        sendButton.prop('disabled',true);

        var subject = $("#" + form_id + " [name='subject']").val();
        var message = $("#" + form_id + " [name='text']").val();
        var email = $("#" + form_id + " [name='email']").val();
        data['subject'] = subject;
        data['text'] = message;

        $.post('https://postmail.invotes.com/send',
            data,
            onSuccess
        ).fail(onError);

        return false;
    }

    var emailValid = false;
    var messageValid = false;
    var messageTextarea = $('#message');
    var emailInput = $('#emailInput');

    emailInput.on('keyup', function () {
        var regEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
        emailValid = regEx.test(emailInput.val());
        setSendButtonStatus();
        });

    messageTextarea.on('keyup', function () {
        messageValid = !!messageTextarea.val();
        setSendButtonStatus();
    });

    setSendButtonStatus();

    function setSendButtonStatus() {
        if (messageValid && emailValid) {
            sendButton.prop('disabled', false);
            sendButton.css('background', '#25B5EF')
        } else {
            sendButton.prop('disabled', true);
            sendButton.css({'background': 'black', 'border': 'black'})
        }
    }

    sendButton.on('click', function() {
        if(true) {
            send();
            toggle();
            $(".hire").attr('disabled', true);
            $(".hire").text('Thanks!');
        } else {
            alert('Do it')
        }
    });

    var $form = $("#" + form_id);
    $form.submit(function( event ) {
        event.preventDefault();
    });

});