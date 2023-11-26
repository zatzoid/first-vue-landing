import { ref } from 'vue';

export function useSlider() {
  const translateValue = ref(0);

  function moveSlider(val, maxVal) {
    if (translateValue.value + val < maxVal && translateValue.value + val >= 0) {
      translateValue.value += val;
    } else {
      translateValue.value = 0;
    }
  }


  return {
    translateValue,
    moveSlider,
   
  };
}
