import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className="mx-16 my-10 ">
                <h1 className='text-3xl mt-10'>Question 1 : What is Context API ?</h1>
                <h1 className='text-2xl my-3'>Answer : The React Context API is a way for a React app to effectively produce global variables that can be passed around the application.This is the alternative form of moving props from grandparent to child to parent, and so on.It is also touted as an easier, lighter approach to state management using Redux.<br></br>
                    We declare it by writing React.createContext(). It returns a consumer and a provider. Provider is a component that provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </h1>

                <h1 className='text-3xl mt-10'>Question 2 : Difference of Inline, Block and Inline-Block</h1>
                <h1 className='text-2xl my-3'>Answer : <br />
                    <strong>Inline</strong> element doesn't start on a new line and only occupy just the width it requires.We cannot set the width or height. <br /><br />
                    few elements that have a default Inline property:<br /><br />

                    - <code>span</code><br />
                    - <code>a</code><br />
                    - <code>img</code><br />
                    - <code>em</code><br />
                    - <code>strong</code><br /><br />
                    <strong>Inline-block</strong> is formatted just like the inline element, where it doesn't start on a new line.We can set width and height values.<br /><br />

                    <strong>Block</strong>  element will start on a new line and occupy the full width available.We can set width and height values. <br /><br />
                    few elements that have a default block property:<br /><br />

                    - <code>div</code><br />
                    - <code>h1</code><br />
                    - <code>p</code><br />
                    - <code>li</code><br />
                    - <code>section</code>,

                </h1>
            </div>
        </>
    );
};

export default Blogs;