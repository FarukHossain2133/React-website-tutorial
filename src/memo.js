import React from 'react';

function MemoComp ({name}){
    console.log('memo component')
  return(
      <>
        <h1>Memo Comp: {name} </h1>
      </>
  )
}

export default React.memo(MemoComp);