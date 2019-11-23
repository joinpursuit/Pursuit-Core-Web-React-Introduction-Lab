import React from 'react'

class Contacts extends React.Component {
    render() {
        return (
            <div className= 'contactList'>
                <h4>Contacts</h4>
                <ul>
                    <div>
                        <h4>Jordan Walke</h4>
                        <h5> React Creator</h5>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h4>Bordan Walke</h4>
                        <h5> React Creator</h5>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h4>Mordan Walke</h4>
                        <h5> React Creator</h5>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h4>Sordan Walke</h4>
                        <h5> React Creator</h5>
                        <p>Lorem Ipsum</p>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Contacts