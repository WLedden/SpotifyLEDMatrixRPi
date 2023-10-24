var intervalID = setInterval(update_values,1000);
$SCRIPT_ROOT = {{ request.script_root|tojson|safe }};
function update_values() {
        $.getJSON($SCRIPT_ROOT + 'Current_Song',
            
    function(data) {
        $('#song').text(data.song);
        console.log(data)
    });
    
    };
    
    function stopTextColor() {
    clearInterval(intervalID);
}