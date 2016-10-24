var hideAll = function() {
    var contentElements = document.querySelectorAll('.tabs__content');

    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].setAttribute('aria-hidden', true);
    }
};

var resetTabindexAll = function() {
    var contentElements = document.querySelectorAll('.tabs__content');

    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].setAttribute('tabindex', -1);
    }
};

var unselectAll = function() {
    var contentLabels = document.querySelectorAll('.tabs__label');

    for (var i = 0; i < contentLabels.length; i++) {
        contentLabels[i].setAttribute('aria-selected', false);
        contentLabels[i].setAttribute('aria-expanded', false);
    }
};

var TwitchSwitchRadio = function(e) {
    hideAll();
    unselectAll();

    var labelId = 'tablabel' + this.value;
    var panel = document.querySelector('[role="tablist"]');
    var label = document.querySelector('#' + labelId);
    var content = document.querySelector('[aria-labelledby="' + label.id + '"]');
    panel.setAttribute('aria-activedescendant', labelId);
    content.setAttribute('aria-hidden', false);
    label.setAttribute('aria-selected', true);
    label.setAttribute('aria-expanded', true);
};

var TwitchSwitchLabel = function(e) {
    if(e.keyCode === 13) {
        resetTabindexAll();

        var labelId = 'tablabel' + this.value;
        var label = document.querySelector('#' + labelId);
        var content = document.querySelector('[aria-labelledby="' + label.id + '"]');
        content.setAttribute('tabindex', 0);
        content.focus();
    }
};

var radios = document.querySelectorAll('.tabs__radio');

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', TwitchSwitchRadio);
}

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('keypress', TwitchSwitchLabel);
}
