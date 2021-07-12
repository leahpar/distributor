
class Distributor {

    /**
     * Constructor
     * @param content_selector_id       ID of the items container
     * @param columns_selector_class    CLASS of the columns
     */
    constructor(content_selector_id, columns_selector_class) {

        this.content = document.getElementById(content_selector_id);
        this.columns = document.getElementsByClassName(columns_selector_class);
        this.activeColumnsCount = 0;

        //https://stackoverflow.com/a/43727582/11105345
        window.addEventListener('resize', this.onWindowChange.bind(this));
    }


    /*---------- Core ----------*/

    /**
     * Distribute (move) items from CONTENT into COLUMNS
     */
    distribute() {
        //console.log("distribute");
        let visiblesColumns = [...this.columns].filter(col => col.offsetWidth > 0 && col.offsetHeight > 0);
        this.activeColumnsCount = visiblesColumns.length;
        let qsindex = this.countElements(visiblesColumns) || 0;
        [...this.content.children]
            .forEach(node => {
                node.qsindex = qsindex++;
                this.getSmallestColumn(visiblesColumns).appendChild(node);
            });
    }

    /**
     * Move items back to CONTENT
     * Keeps initial items orders
     */
    resetDistribution() {
        //console.log("resest");
        [...this.columns]
            .forEach(col => {
                [...col.children].forEach(node => this.content.appendChild(node));
            });
        [...this.content.children]
            .sort((a, b) => a.qsindex > b.qsindex ? 1 : -1)
            .forEach(node => this.content.appendChild(node));
    }

    redistribute() {
        //console.log("redistribute");
        this.resetDistribution();
        this.distribute();
    }


    /*---------- Utils ----------*/

    /**
     * Return the smalest column
     * @param columns
     */
    getSmallestColumn(columns) {
        return [...columns].reduce((prev, cur) => prev.clientHeight <= cur.clientHeight ? prev : cur);
    }

    /**
     * Count elements in the columns
     */
    countElements(columns) {
        return [...columns].reduce((count, col) => count + col.children.length, 0);
    }

    /*---------- Responsive ----------*/

    /**
     * Called on window resize
     * Retistribute items on columns change (responsive)
     * Use a timer to limit calls
     */
    onWindowChange() {
        clearTimeout(this.evtTimer);
        // https://stackoverflow.com/a/6997972
        this.evtTimer = setTimeout(() => {
            if (this.activeColumnsCount !== [...this.columns].reduce((count, col) => count + (col.offsetWidth > 0 && col.offsetHeight), 0))
                this.redistribute();
        }, 100);
    }

}
