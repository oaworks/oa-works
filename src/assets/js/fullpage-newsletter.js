jQuery(document).ready(function() {

  var paramsintoform = function() {
    if (window.location.search) {
      var s = window.location.search.split('?')[1];
      var params = s.split('&');
      for ( var p = 0; p < params.length; p++ ) {
        var parts = params[p].split('=');
        var cp = parts[0];
        if (cp.length && parts.length === 2 && parts[0] !== 'nothanks' && $('#'+cp).length) {
          $('#'+cp).val(decodeURIComponent(parts[1]));
        }
      }
    }
  }
  paramsintoform();

  var goto = false;
  var valid = undefined;
  var submit = function(e) {
    if (valid === false) {
      valid = undefined; // reset validity check and let the form continue to display warning
    } else {
      try { e.preventDefault(); } catch(err) {};

      valid = $('#fullpage-newsletter')[0].checkValidity();
      if (!valid) {
        $('#fullpage-submit').click(); // will run again, but this time skip to letting the form display warning
      } else {
        // form valid now, send the data and go to thanks
        $('fullpage-#submit').replaceWith('<button>Submitting&hellip;</button>');

        var data = {};

        if (window.location.search) {
          var s = window.location.search.split('?')[1];
          var params = s.split('&');
          for ( var p = 0; p < params.length; p++ ) {
            var parts = params[p].split('=');
            if (parts.length === 2 && parts[0] !== 'nothanks' && (!fields.length || fields.indexOf(parts[0]) !== -1)) data[parts[0]] = encodeURIComponent(parts[1]);
          }
        }

        $('._oaworks_form').each(function() {
          if (!fields.length || fields.indexOf($(this).attr('id')) !== -1) data[$(this).attr('id')] = encodeURIComponent($(this).val());
        });

        goto = $(this).attr('href');
        console.log(data);
        $.ajax({
          url: url,
          method: 'GET',
          dataType: 'json',
          data: data,
          success: function(res) {
            console.log(res);
            if (window.location.search.indexOf('nothanks') === -1) window.location = goto;
          }
        });
      }
    }
  }
  $('body').on('click','#fullpage-submit',submit);
});

// Above script supports many forms, the script below points it to the right sheet
sid = 'AKfycbyVmK7svDvj2yg9SpFNH6dZ0zF33oXUcfj_OhWVjSHKNEIVNuVdybbMIHOjcH_DA5VD';
url = 'https://api.openaccessbutton.org/ill/collect/' + sid;
fields = [];

  // Allow the enter key to be used to submit while in the text box
  var input = document.getElementById("fullpage-email-signup");
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("fullpage-submit").click();
    }
  });
