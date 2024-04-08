import React, { ChangeEvent, MouseEvent } from 'react'

export const User = () => {
  // фокус спал:
  const onBlurElementHandler = () => {
    console.log('Go away focus of Element')
  }


  function onChangeTextHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    console.log('textarea handler:', event.currentTarget.value);
  }

  function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
    console.log('input handler:', event.currentTarget.value)
  }

  function saveUser() {
    console.log('user have been saved');
  }



  return <div>
    <textarea onChange={onChangeTextHandler} onBlur={onBlurElementHandler}>Tumen</textarea>
    <input type="text" onChange={onChangeInputHandler}/>
    <button onClick={saveUser}>save</button>
  </div>
}