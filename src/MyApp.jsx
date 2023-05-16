import React from 'react';

class MyApp extends React.Component {
    

    constructor(props) {
        super(props);
        this.ListStyle = {
            listStyleType: "none"
        };
        this.planets = [
            {label: "Mars"},
            {label: "Venus"},
            {label: "Jupiter"},
            {label: "Earth"},
            {label: "Saturn"},
            {label: "Neptune"}

        ];
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.planets.map((planets, index) => <li key={planets.label} style={this.ListStyle}>{planets.label}</li>)}
                </ul>
            </div>
        )
    }
}

export default MyApp;