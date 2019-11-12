import React from 'react';

import './style.scss';

const PrintBarCode = props => {
    return(
        <div className="print-barcode">
            <div class="main-title"><h1>Query Sample Status</h1></div>
            <div className="print-barcode--id filterMainWrapper">
                <div className="row">
                    <div className="col-2 col-sm-3">
                        <span className="print--title">Print Barcode ID</span>
                    </div>
                    <div className="col-5 col-sm-9">
                        <div className="print--form-control">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="print--button">
                            <a href="#" className="btn btn-pri">Print</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintBarCode;