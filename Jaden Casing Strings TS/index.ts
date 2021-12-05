String.prototype.toJadenCase = function () {
    //...
    return this.split(" ")
      .map((elem) => elem[0].toUpperCase() + elem.slice(1))
      .join(" ");
  };