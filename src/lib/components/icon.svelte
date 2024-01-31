<script>
  let borderRadius = 12.5;
  let strokeWidth = 3;
  let textSeperation = 6.25;

  export let colour = "#ffb133";
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110">

  <!-- Border -->
  <path d="
    M 0 {borderRadius} 
    L 0 {100 - borderRadius} 
    Q 0 100, {borderRadius} 100 
    L {100 - borderRadius}  100 
    Q 100 100, 100 {100 - borderRadius}  
    L 100 {borderRadius} 
    Q 100 0, {100 - borderRadius}  0 
    L {borderRadius} 0 
    Q 0 0, 0 {borderRadius}"
    stroke="{colour}"
    stroke-width="{strokeWidth}"
    fill="transparent"
  />

  <!-- Title Bar -->
  <path d="
      M 0 {borderRadius} 
      L 100 {borderRadius}
      Q 100 0, {100 - borderRadius}  0 
      L {borderRadius} 0 
      Q 0 0, 0 {borderRadius}"
    stroke="{colour}"
    stroke-width="{strokeWidth}"
    fill="{colour}"
  />

  <!-- Text -->
  <path d="
     M {textSeperation * 2} {borderRadius + textSeperation}
     L {textSeperation * 5} {borderRadius + textSeperation}
     L {textSeperation * 5} {borderRadius + textSeperation * 2}
     L {textSeperation * 2} {borderRadius + textSeperation * 2}
     L {textSeperation * 2} {borderRadius + textSeperation}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 7} {borderRadius + textSeperation}
     L {textSeperation * 9} {borderRadius + textSeperation}
     L {textSeperation * 9} {borderRadius + textSeperation * 2}
     L {textSeperation * 7} {borderRadius + textSeperation * 2}
     L {textSeperation * 7} {borderRadius + textSeperation}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 11} {borderRadius + textSeperation}
     L {textSeperation * 13} {borderRadius + textSeperation}
     L {textSeperation * 13} {borderRadius + textSeperation * 2}
     L {textSeperation * 11} {borderRadius + textSeperation * 2}
     L {textSeperation * 11} {borderRadius + textSeperation}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 2} {borderRadius + textSeperation * 3}
     L {textSeperation * 4} {borderRadius + textSeperation * 3}
     L {textSeperation * 4} {borderRadius + textSeperation * 4}
     L {textSeperation * 2} {borderRadius + textSeperation * 4}
     L {textSeperation * 2} {borderRadius + textSeperation * 3}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 6} {borderRadius + textSeperation * 3}
     L {textSeperation * 9} {borderRadius + textSeperation * 3}
     L {textSeperation * 9} {borderRadius + textSeperation * 4}
     L {textSeperation * 6} {borderRadius + textSeperation * 4}
     L {textSeperation * 6} {borderRadius + textSeperation * 3}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 10} {borderRadius + textSeperation * 3}
     L {textSeperation * 11} {borderRadius + textSeperation * 3}
     L {textSeperation * 11} {borderRadius + textSeperation * 4}
     L {textSeperation * 10} {borderRadius + textSeperation * 4}
     L {textSeperation * 10} {borderRadius + textSeperation * 3}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 2} {borderRadius + textSeperation * 6}
     L {textSeperation * 7} {borderRadius + textSeperation * 6}
     L {textSeperation * 7} {borderRadius + textSeperation * 7}
     L {textSeperation * 2} {borderRadius + textSeperation * 7}
     L {textSeperation * 2} {borderRadius + textSeperation * 6}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 8} {borderRadius + textSeperation * 6}
     L {textSeperation * 9} {borderRadius + textSeperation * 6}
     L {textSeperation * 9} {borderRadius + textSeperation * 7}
     L {textSeperation * 8} {borderRadius + textSeperation * 7}
     L {textSeperation * 8} {borderRadius + textSeperation * 6}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 4} {borderRadius + textSeperation * 8}
     L {textSeperation * 11} {borderRadius + textSeperation * 8}
     L {textSeperation * 11} {borderRadius + textSeperation * 9}
     L {textSeperation * 4} {borderRadius + textSeperation * 9}
     L {textSeperation * 4} {borderRadius + textSeperation * 8}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 12} {borderRadius + textSeperation * 8}
     L {textSeperation * 14} {borderRadius + textSeperation * 8}
     L {textSeperation * 14} {borderRadius + textSeperation * 9}
     L {textSeperation * 12} {borderRadius + textSeperation * 9}
     L {textSeperation * 12} {borderRadius + textSeperation * 8}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 4} {borderRadius + textSeperation * 10}
     L {textSeperation * 8} {borderRadius + textSeperation * 10}
     L {textSeperation * 8} {borderRadius + textSeperation * 11}
     L {textSeperation * 4} {borderRadius + textSeperation * 11}
     L {textSeperation * 4} {borderRadius + textSeperation * 10}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 10} {borderRadius + textSeperation * 10}
     L {textSeperation * 12} {borderRadius + textSeperation * 10}
     L {textSeperation * 12} {borderRadius + textSeperation * 11}
     L {textSeperation * 10} {borderRadius + textSeperation * 11}
     L {textSeperation * 10} {borderRadius + textSeperation * 10}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 13} {borderRadius + textSeperation * 10}
     L {textSeperation * 14} {borderRadius + textSeperation * 10}
     L {textSeperation * 14} {borderRadius + textSeperation * 11}
     L {textSeperation * 13} {borderRadius + textSeperation * 11}
     L {textSeperation * 13} {borderRadius + textSeperation * 10}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 4} {borderRadius + textSeperation * 12}
     L {textSeperation * 7} {borderRadius + textSeperation * 12}
     L {textSeperation * 7} {borderRadius + textSeperation * 13}
     L {textSeperation * 4} {borderRadius + textSeperation * 13}
     L {textSeperation * 4} {borderRadius + textSeperation * 12}"
    fill="{colour}"
  />
  <path d="
     M {textSeperation * 9} {borderRadius + textSeperation * 12}
     L {textSeperation * 13} {borderRadius + textSeperation * 12}
     L {textSeperation * 13} {borderRadius + textSeperation * 13}
     L {textSeperation * 9} {borderRadius + textSeperation * 13}
     L {textSeperation * 9} {borderRadius + textSeperation * 12}"
    fill="{colour}"
  />
</svg>