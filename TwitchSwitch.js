var labels = document.querySelectorAll('.tabs__label');

var hideAll = function() {
    var contentElements = document.querySelectorAll('.tabs__content');

    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].setAttribute('aria-hidden', true);
    }
};

var unselectAll = function() {
    var contentLabels = document.querySelectorAll('.tabs__label');

    for (var i = 0; i < contentLabels.length; i++) {
        contentLabels[i].setAttribute('aria-selected', false);
    }
};

var TwitchSwitch = function(e) {
    hideAll();
    unselectAll();

    document.querySelector('[aria-labelledby="' + this.id + '"]').setAttribute('aria-hidden', false);
    this.setAttribute('aria-selected', true);
};

for (var i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', TwitchSwitch);
}
