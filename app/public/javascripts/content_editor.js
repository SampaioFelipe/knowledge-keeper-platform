window.addEventListener('load', function() {
    // custom buttons
    var edit_button = document.getElementById("edit_button");
    var save_button = document.getElementById("save_button");
    var cancel_button = document.getElementById("cancel_button");

    var hidden_buttons_container = document.getElementById("hidden_buttons_container");

    // editor setup
    var editor = ContentTools.EditorApp.get();

    ContentTools.StylePalette.add([
        new ContentTools.Style('Author', 'author', ['p'])
    ]);

    editor.init('*[data-editable]', 'main-content', null, false);

    // starting the editor mode
    edit_button.addEventListener('click', function() {
        editor.start();

        edit_button.classList.add("is-hidden");
        hidden_buttons_container.classList.remove("is-hidden");
    });

    save_button.addEventListener('click', function(){
        editor.stop(true);

        // TODO: verificar se salvou
        hidden_buttons_container.classList.add("is-hidden");
        edit_button.classList.remove("is-hidden");

    });

    cancel_button.addEventListener('click', function(){
        editor.stop(false);

        // TODO: verificar se salvou
        hidden_buttons_container.classList.add("is-hidden");
        edit_button.classList.remove("is-hidden");

    });

    // Add support for auto-save
    editor.addEventListener('start', function (ev) {
        var _this = this;

        // Call save every 30 seconds
        function autoSave() {
            _this.save(true);
        };
        this.autoSaveTimer = setInterval(autoSave, 30 * 1000);
    });

    editor.addEventListener('stop', function (ev) {
        // Stop the autosave
        clearInterval(this.autoSaveTimer);
    });

    editor.addEventListener('saved', function (ev) {
        var name, onStateChange, passive, payload, regions, xhr;

        // Check if this was a passive save
        passive = ev.detail().passive;

        // Check that something changed
        regions = ev.detail().regions;
        if (Object.keys(regions).length == 0) {
            return;
        }
    
        // Set the editor as busy while we save our changes
        this.busy(true);
    
        // Collect the contents of each region into a FormData instance
        payload = new FormData();

        payload.append(
            'title',
            document.getElementById("content-title").innerHTML
            );
        
        payload.append(
            'subtitle',
            document.getElementById("content-subtitle").innerHTML
            );

        payload.append('regions', JSON.stringify(regions));
    
        // Send the update content to the server to be saved
        function onStateChange(ev) {
            // Check if the request is finished
            if (ev.target.readyState == 4) {
                editor.busy(false);
                if (ev.target.status == '200') {
                    // Save was successful, notify the user with a flash
                    new ContentTools.FlashUI('ok');
                } else {
                    // Save failed, notify the user with a flash
                    new ContentTools.FlashUI('no');
                }
            }
        };    
        xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', onStateChange);
        xhr.open('POST', '/save-my-page');
        xhr.send(payload);
    });  

});