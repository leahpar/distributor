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
// Initialize distributor
var distributor = new Distributor(
    'content', // ID    of element containing items to distribute
    'column',  // CLASS of columns,
    true       // Automatically redistribute items (if added/removed/hidden column)
);

// Distribute items
distributor.distribute();

// If more items added to source container, distribute them
distributor.distribute();

// Manually redistribute items (if added/removed/hidden column)
distributor.redistribute();

// Put back items in source container (why not)
distributor.resetDistribution();

```

[Example here](https://htmlpreview.github.io/?https://github.com/leahpar/distributor/master/example.html)

