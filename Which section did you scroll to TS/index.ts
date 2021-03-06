// Your website is divided vertically in sections, and each can be of different size (height).
// You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
// Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

// Example:
// getSectionIdFromScroll( 300, [300,200,400,600,100] )

// will output number 1 as it's the second section.

// getSectionIdFromScroll( 1600, [300,200,400,600,100] )

// will output number -1 as it's past last section.

// Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).

//SOLUTION1
function getSectionIdFromScroll(scrollY,sizes){
    let i=0;
    while (scrollY>=0)
      scrollY-=sizes[i++]
    return scrollY<0?--i:-1
  }


  //SOLUTION2

  function getSectionIdFromScroll1(scrollY,sizes){
    let total = 0;
    for (let i = 0; i < sizes.length; i++) {
      total = total + sizes[i];
      if (scrollY < total) {
        return i;
      }
    }
  }