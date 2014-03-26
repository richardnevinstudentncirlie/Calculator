$(document).ready(function() {
    $("#convertbutton").click(function() {
        var metricValue = $("#metricinput").val();
        var imperialValue = $("#imperialinput").val();


        if (((metricValue.length !=0) && (imperialValue.length !=0))
            || ((metricValue.length == 0) && imperialValue.length == 0)) {
            alert("Please set one field to convert")
        }
        if (metricValue.length != 0) {
            $("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        }
        else if (imperialValue.length != 0) {
            $("#metricinput").val(Converter.convertFromMetricToImperial(imperialValue));
        }
    });
    $("#clearbutton").click(function() {
        $("#imperialinput").val('');
        $("#metricinput").val('');
    });

});