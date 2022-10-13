import React from 'react';
import CharacterListItem from './CharacterListItem';

function CharacterList({items}) {
  return (
    <section className='cards'>
        {items.map((item) => {
            return <CharacterListItem 
                    key={item.char_id}
                    item={item}
            />
        })}
    </section>
  );
}
export default CharacterList;
