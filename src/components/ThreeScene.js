import React from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";


class App extends React.Component {
    constructor() {
        super();
        this.vantaRef = React.createRef();
    }
    componentDidMount() {
        this.vantaEffect = NET({
            el: this.vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            size: 1.60,
            speed: 2.40,
            color: 0xf02b,
            backgroundColor: 0x1e1e1e
        });
    }
    componentWillUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy();
        }
    }
    render() {
        return (
            <div style={{ height: "100vh", width: "100%" }} ref={this.vantaRef}></div>
        );
    }
}

export default App;
