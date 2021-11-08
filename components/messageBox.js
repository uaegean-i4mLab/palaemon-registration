import React , { useState } from "react";
import SimpleButton from "@material-ui/core/Button";

export default function MessageBox(props) {
    const [showText, setShowText] = useState(false);

    return (
        <div style={{ marginTop: "1.5rem" }}>
                <React.Fragment>
                    <SimpleButton onClick={() => setShowText(!showText)}>More Info</SimpleButton>
                    {showText && <div>{props.message}</div>}
                </React.Fragment>
        </div>
    );
};

