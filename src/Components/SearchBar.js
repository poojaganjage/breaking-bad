import React, {useState} from 'react';

function SearchBar({setQuery}) {
    // const [text, setText] = useState("");
    // console.log(text);
    return (
        <div>
            <section className="search">
                <form>
                    <input 
                        className='form-control' 
                        placeholder='Search Characters' 
                        autoFocus 
                        type="text"
                        name="search"
                        //value={text}
                        onChange={
                            (e) => {
                                //setText(e.target.value)
                                setQuery(e.target.value)
                            }
                        }
                        id="search"
                    />
                </form>
            </section>
        </div>
    );
}
export default SearchBar;
