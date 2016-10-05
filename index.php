<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./tabs.css">
    <link rel="stylesheet" href="./demo.css">
    <title>CSS Tabs</title>
</head>
<body>
    <div class="tabs">
        <input type="radio" id="tab1" class="tabs__radio" name="tabs" value="1" checked>
        <input type="radio" id="tab2" class="tabs__radio" name="tabs" value="2">
        <input type="radio" id="tab3" class="tabs__radio" name="tabs" value="3">
        <input type="radio" id="tab4" class="tabs__radio" name="tabs" value="4">
        <input type="radio" id="tab5" class="tabs__radio" name="tabs" value="5">
        <input type="radio" id="tab6" class="tabs__radio" name="tabs" value="6" disabled>
        <input type="radio" id="tab7" class="tabs__radio" name="tabs" value="7">
        <input type="radio" id="tab8" class="tabs__radio" name="tabs" value="8">
        <input type="radio" id="tab9" class="tabs__radio" name="tabs" value="9">
        <input type="radio" id="tab10" class="tabs__radio" name="tabs" value="10">
        <label for="tab1" class="tabs__label">Tab 1</label>
        <label for="tab2" class="tabs__label">Tab 2</label>
        <label for="tab3" class="tabs__label">Tab 3</label>
        <label for="tab4" class="tabs__label">Tab 4</label>
        <label for="tab5" class="tabs__label">Tab 5</label>
        <label for="tab6" class="tabs__label">Tab 6</label>
        <label for="tab7" class="tabs__label">Tab 7</label>
        <label for="tab8" class="tabs__label">Tab 8</label>
        <label for="tab9" class="tabs__label">Tab 9</label>
        <label for="tab10" class="tabs__label">Tab 10</label>
        <div class="tabs__content">
            <p>Tab content 1</p>
        </div>
        <div class="tabs__content">
            <p>Tab content 2</p>
        </div>
        <div class="tabs__content">
            <p>Tab content 3</p>
        </div>
        <div class="tabs__content">
            <p>Tab content 4</p>
        </div>
        <div class="tabs__content">
            <p>Tab content 5</p>
        </div>
        <div class="tabs__content">
            <p>Tab content 6</p>
        </div>
        <div class="tabs__content">
            <p>Tab content 7</p>
        </div>
        <div class="tabs__content">
            <p>Tab content 8</p>
        </div>
        <div class="tabs__content">
            <p>Tab content 9</p>
        </div>
        <div class="tabs__content">
            <p>Tab content 10</p>
        </div>
    </div>
    <button class="button" type="button" onclick="hideDisabled()">Hide disabled tabs</button>
    <script>
        function hideDisabled() {
            var tabs = document.getElementsByClassName('tabs__label');
            var content = document.getElementsByClassName('tabs__content');

            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.toggle('hide-if-disabled');
                content[i].classList.toggle('hide-if-disabled');
            }
        }
    </script>
</body>
</html>
