function ranking(people) {
    return people.sort((a,b)=>a.points===b.points?a.name.localeCompare(b.name):b.points-a.points)
    .map(x => {x.position = people.findIndex(y => y.points === x.points) + 1; return x;})
    ;
  }