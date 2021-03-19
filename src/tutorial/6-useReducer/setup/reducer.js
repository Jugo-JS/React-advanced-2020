// reducer function (recives the state right before update and the action - what we are trying to do)
export const reducer = (state, action) => {
  const newPeople = [...state.people, action.payload]
  if(action.type === 'ADD_ITEM') {
    return {
      ...state, 
      people: newPeople, 
      isModalOpen: true, 
      modalContent: 'item added' 
    }
  }
  if(action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value'
    }
  }
  if(action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false
    }
  }
  if(action.type === 'REMOVE_PERSON') {
    const newPeopleList = state.people.filter((person) => person.id !== action.payload);
    return {
      ...state,
      people: newPeopleList
    }
  }
  throw new Error('no matching action type');
}