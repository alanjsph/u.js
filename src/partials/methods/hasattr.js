    /**
     * hasAttr method
     * check if element has attribute
     * @param  {string} attr - attribute name
     * @return {boolean}
     */
    hasAttr: function(attr) {
      return this.length ? this[0].hasAttribute(attr) : false;
    },
