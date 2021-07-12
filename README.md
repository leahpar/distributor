# Distributor

```html
<!-- Source container -->
<div style="display: none" id="content">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <!-- ... -->
</div>

<div>
    <!-- target containers -->
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
</div>
```

```javascript
    var distributor = new Distributor(
        'content', // ID    of element containing items to distribute
        'column'   // CLASS of columns
    );
```

[Example here](http://htmlpreview.github.io/?https://github.com/leahpar/distributor/example.html)

