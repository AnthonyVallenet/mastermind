import React from 'react';

function Tableau() {
  return (
      <div className="Tableau">
        <div className="top">
            <i className="fas fa-chevron-right"></i>
        </div>
        <div className="middle">
            <div>
                <p>Player</p>
            </div>

            <div>
                <div className="rgb red">
                </div>
                <div className="rgb orange">
                </div>
                <div className="rgb blue">
                </div>
                <div className="rgb purple">
                </div>
                <div className="rgb yellow">
                </div>
                <div className="rgb green">
                </div>
            </div>

            <div>
                <div className="case">
                </div>
                <div className="case">
                </div>
                <div className="case">
                </div>
                <div className="case">
                </div>
            </div>

            <div>
                <button type="button">GO</button>
                <button type="button"><i className="fas fa-undo"></i></button>
            </div>
        </div>
      </div>
  );
}

export default Tableau;
