/*
	Andrei Soldatenkov
	WebClient testing:
*/
var exampleSocket = new WebSocket("wss://192.168.31.118:5880");
//var exampleSocket = new WebSocket("ws://192.10.1.37:5880");
console.log("server started");
exampleSocket.onmessage = function (event) {
    console.log(event.data);
    $( "#dough01" ).text(event.data);
    //document.getElementById("myLog").value = event.data;

  };


(function($) {

    var $bt_sendMessage = $('dough')
    $(function() {

        $( "a.dough" ).click(function() {
            alert( "Send message to server via WebSocket." );
            console.log("send message");
            var msg = {
                type: "message",
                text: this.text,
                id:   123456789,
                date: Date.now()
              };
            
              // Send the msg object as a JSON-formatted string.
              exampleSocket.send(JSON.stringify(msg));
              $( "#curDough" ).text(this.text);
              $("a.dough").css("background-color", "transparent");
              $(this).css("background", "yellow");

          });

        $bt_sendMessage.on('click', 'a', function(event) {
            console.log("send message");
            var msg = {
                type: "message",
                text: "I love you",
                id:   123456789,
                date: Date.now()
              };
            
              // Send the msg object as a JSON-formatted string.
              exampleSocket.send(JSON.stringify(msg));
        });
    });   
})(jQuery);