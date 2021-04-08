// set up store
const store = Redux.createStore(moodReducer);

// subscribe renderFace to face changes
const face = document.getElementById('face');

const text = document.getElementById('text');

// listeners for the buttons
document.getElementById('happy').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_HAPPY', payload: '٩(◕‿◕｡)۶' });
  text.innerText = "I am HAPPY!"
});

document.getElementById('sad').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_SAD', payload: '(ಥ﹏ಥ)' });
  text.innerText = "I am SAD!"
});
document.getElementById('angry').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_ANGRY', payload: '٩(ఠ益ఠ)۶' });
  text.innerText = "I am ANGRY!"
});
document.getElementById('confused').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_CONFUSED', payload: 'ლ(ಠ_ಠ ლ)' });
  text.innerText = "I am CONFUSED!"
});

function renderFace() {
  face.innerHTML = store.getState().face;
}

renderFace()
store.subscribe(renderFace)