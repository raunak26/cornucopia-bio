import './benefits.css';
import React, { useState } from 'react';

const Benefits = () => {
    const [openDialog, setOpenDialog] = useState(null);

    const openDialogBox = (id) => {
        setOpenDialog(id);
    };

    const closeDialogBox = () => {
        setOpenDialog(null);
    };

    return (
        <div className="benefits">
            <h2>Benefits</h2>
            <p>
                In the ever-evolving landscape of scientific research, the integration of Artificial 
                Intelligence (AI) and Machine Learning (ML) models has emerged as a transformative 
                force, promising to accelerate the pace of discovery, enhance experimental precision, 
                and ultimately redefine the scientific method.
            </p>
            <div className="buttons">
                <div className="button-container top">
                    <div className="button-container-subset">
                        <button className="dialog-button" onClick={() => openDialogBox(1)}>Optimized Experimentation</button>
                        <button className="dialog-button" onClick={() => openDialogBox(2)}>Directed Feedback</button>
                    </div>
                    <div className="button-container-subset">
                        <button className="dialog-button" onClick={() => openDialogBox(3)}>Predictive Insights</button>
                        <button className="dialog-button" onClick={() => openDialogBox(4)}>Accelerated Drug Discovery</button>
                    </div>
                </div>
                <div className="button-container bottom">
                    <div className="button-container-subset">
                        <button className="dialog-button" onClick={() => openDialogBox(5)}>Cross-Disciplinary Applications</button>
                        <button className="dialog-button" onClick={() => openDialogBox(6)}>Data Integration</button>
                    </div>
                    <div className="button-container-subset">
                        <button className="dialog-button" onClick={() => openDialogBox(7)}>Resource Efficiency</button>
                        <button className="dialog-button" onClick={() => openDialogBox(8)}>Scientific Collaboration</button>
                    </div>
                </div>
            </div>

            {/* Dialog Boxes */}
            {openDialog === 1 && (
                <div className="dialog">
                    <h2>Optimized Experimentation</h2>
                    <p>
                        One of the most significant advantages of Cornucopia's S.A.M 
                        is their ability to optimize experimental design...
                    </p>
                    <button onClick={closeDialogBox}>Close</button>
                </div>
            )}

            {openDialog === 2 && (
                <div className="dialog">
                    <h2>Directed Feedback</h2>
                    <p>
                        S.A.M provides researchers with real-time, context-aware 
                        feedback during experiments...
                    </p>
                    <button onClick={closeDialogBox}>Close</button>
                </div>
            )}

            {openDialog === 3 && (
                <div className="dialog">
                    <h2>Predictive Insights</h2>
                    <p>
                        These models excel in predicting experimental outcomes based 
                        on historical data...
                    </p>
                    <button onClick={closeDialogBox}>Close</button>
                </div>
            )}

            {openDialog === 4 && (
                <div className="dialog">
                    <h2>Accelerated Drug Discovery</h2>
                    <p>
                        In the field of pharmaceuticals, S.A.M has revolutionized 
                        drug discovery...
                    </p>
                    <button onClick={closeDialogBox}>Close</button>
                </div>
            )}

            {openDialog === 5 && (
                <div className="dialog">
                    <h2>Cross-Disciplinary Applications</h2>
                    <p>
                        Cornucopia's S.A.M transcends disciplinary boundaries...
                    </p>
                    <button onClick={closeDialogBox}>Close</button>
                </div>
            )}

            {openDialog === 6 && (
                <div className="dialog">
                    <h2>Data Integration</h2>
                    <p>
                        S.A.M can seamlessly integrate data from various sources...
                    </p>
                    <button onClick={closeDialogBox}>Close</button>
                </div>
            )}

            {openDialog === 7 && (
                <div className="dialog">
                    <h2>Resource Efficiency</h2>
                    <p>
                        By minimizing the need for repetitive or low-yield experiments...
                    </p>
                    <button onClick={closeDialogBox}>Close</button>
                </div>
            )}

            {openDialog === 8 && (
                <div className="dialog">
                    <h2>Scientific Collaboration</h2>
                    <p>
                        Cornucopia's S.A.M facilitates collaboration among scientists...
                    </p>
                    <button onClick={closeDialogBox}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Benefits;
