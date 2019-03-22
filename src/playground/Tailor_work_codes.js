import React from 'react';
import '../Styles/Components/Tailor_work_codes.css'

class Tailors_work_codes extends React.Component {
        constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

        handleChange(event) {
            this.setState({
                file: URL.createObjectURL(event.target.files[0])
            })
        }

        render() {
            return (
                <div className="img_flexbox">
                    <input type="file" onChange={this.handleChange}/>
                    <img 
                        src={this.state.file}
                        
                        />
                </div>
            )
    }
}    

export default Tailors_work_codes