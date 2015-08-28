    /**
     * next method
     * get next element sibling
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling element
     */
    next: function(sel) {
      return u(u.toArray(this.nextAll(sel)).shift());
    },
